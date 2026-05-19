import { useState, useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import { posterSupabase } from "@/integrations/supabase/posterClient";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Sun, Moon, Download, Undo2, Redo2, ArrowLeft } from "lucide-react";
import SparkxLogo from "@/components/SparkxLogo";
import PosterCanvas from "@/components/PosterCanvas";
import InspectorPanel from "@/components/InspectorPanel";
import HistoryPanel, { HistoryItem } from "@/components/HistoryPanel";
import PosterPromptPage from "@/components/poster/PosterPromptPage";
import type { PosterState, PosterElement } from "@/types/poster";
import { DEFAULT_POSTER, createPosterElements, STYLE_OVERLAYS } from "@/types/poster";

const createId = () => Math.random().toString(36).slice(2, 9);

const Index = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [poster, setPoster] = useState<PosterState>({ ...DEFAULT_POSTER });
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("sparkx-history") || "[]"); }
    catch { return []; }
  });
  const [undoStack, setUndoStack] = useState<PosterState[]>([]);
  const [redoStack, setRedoStack] = useState<PosterState[]>([]);
  const currentHistoryIdRef = useRef<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const posterRef = useRef<PosterState>(poster);
  const widthRef = useRef(poster.width);
  const heightRef = useRef(poster.height);

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("sparkx-poster-theme");
    const dark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", dark);
    document.body.style.background = dark ? "#0d0d0d" : "#f0f0f0";
    return dark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("sparkx-poster-theme", isDark ? "dark" : "light");
    document.body.style.background = isDark ? "#0d0d0d" : "#f0f0f0";
    return () => { document.body.style.background = ""; };
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("sparkx-history", JSON.stringify(history.slice(0, 50)));
  }, [history]);

  useEffect(() => {
    posterRef.current = poster;
    widthRef.current = poster.width;
    heightRef.current = poster.height;
  }, [poster]);

  const selectedElement = poster.elements.find((el) => el.id === selectedElementId) || null;

  const pushUndo = useCallback(() => {
    setUndoStack(prev => [...prev.slice(-30), { ...posterRef.current }]);
    setRedoStack([]);
  }, []);

  const handleUndo = useCallback(() => {
    setUndoStack(prev => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      setRedoStack(r => [...r, { ...posterRef.current }]);
      setPoster(last);
      return prev.slice(0, -1);
    });
  }, []);

  const handleRedo = useCallback(() => {
    setRedoStack(prev => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      setUndoStack(u => [...u, { ...posterRef.current }]);
      setPoster(last);
      return prev.slice(0, -1);
    });
  }, []);

  const captureSnapshot = useCallback(async (): Promise<string | null> => {
    const canvas = document.getElementById("poster-canvas");
    if (!canvas) return null;
    try {
      const { default: html2canvas } = await import("html2canvas");
      const result = await html2canvas(canvas as HTMLElement, { useCORS: true, scale: 0.4, backgroundColor: null });
      return result.toDataURL("image/jpeg", 0.6);
    } catch { return null; }
  }, []);

  // Stable generate — uses refs for width/height, no poster state dependency
  const handleGenerate = useCallback(async (prompt: string) => {
    setIsGenerating(true);
    setSelectedElementId(null);

    try {
      const { data, error } = await posterSupabase.functions.invoke("generate-poster", {
        body: { prompt },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      if (!data?.image || !data?.text) throw new Error("Invalid response from server");

      let image = data.image;
      const { text } = data;

      // Convert external URL to blob to avoid CORS issues with CSS background-image
      try {
        const res = await fetch(image);
        const blob = await res.blob();
        image = URL.createObjectURL(blob);
      } catch {
        // fallback: use URL directly
      }
      const style = text.style || "luxury";
      const overlay = STYLE_OVERLAYS[style as keyof typeof STYLE_OVERLAYS] || STYLE_OVERLAYS.luxury;
      const elements = createPosterElements(text, widthRef.current, heightRef.current);

      const newPoster: PosterState = {
        ...DEFAULT_POSTER,
        prompt,
        backgroundImage: image,
        elements,
        overlayOpacity: overlay.opacity,
        overlayColor: overlay.color,
        filter: overlay.filter,
        overlayGradient: overlay.gradient || "",
        grain: style === "cinematic" || style === "retro" ? 0.15 : 0,
        vignette: style === "cinematic" || style === "neon" ? 0.4 : style === "luxury" ? 0.2 : 0,
      };

      setPoster(newPoster);
      posterRef.current = newPoster;

      const historyId = createId();
      currentHistoryIdRef.current = historyId;
      setTimeout(async () => {
        const thumb = await captureSnapshot();
        if (thumb) {
          setHistory(prev => [{
            id: historyId, prompt, thumbnail: thumb,
            timestamp: Date.now(), poster: newPoster,
          }, ...prev]);
        }
      }, 800);

      toast.success("Poster created!", { description: "Double-click text to edit · Drag to reposition" });
    } catch (err: any) {
      console.error("Generation failed:", err);
      toast.error(err?.message || "Failed to generate poster. Try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [captureSnapshot]);

  useEffect(() => {
    if (!currentHistoryIdRef.current || isGenerating) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const thumb = await captureSnapshot();
      if (!thumb || !currentHistoryIdRef.current) return;
      const id = currentHistoryIdRef.current;
      const saved = { ...posterRef.current };
      setHistory(prev => prev.map(h => h.id === id ? { ...h, thumbnail: thumb, poster: saved } : h));
    }, 1500);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [poster, captureSnapshot]);

  const handleUpdatePoster = useCallback((updates: Partial<PosterState>) => {
    pushUndo();
    setPoster(p => ({ ...p, ...updates }));
  }, [pushUndo]);

  const handleUpdateElement = useCallback((id: string, updates: Partial<PosterElement>) => {
    pushUndo();
    setPoster(p => ({ ...p, elements: p.elements.map(el => el.id === id ? { ...el, ...updates } : el) }));
  }, [pushUndo]);

  const handleAddElement = useCallback(() => {
    pushUndo();
    const newEl: PosterElement = {
      id: createId(), type: "text", content: "Your Text",
      x: 40 + Math.random() * 100, y: 200 + Math.random() * 200,
      fontSize: 32, fontWeight: 700, color: "#ffffff",
      fontFamily: "Playfair Display", textAlign: "left",
      opacity: 1, rotation: 0, letterSpacing: 0,
      textTransform: "none", lineHeight: 1.2,
      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
    };
    setPoster(p => ({ ...p, elements: [...p.elements, newEl] }));
    setSelectedElementId(newEl.id);
  }, [pushUndo]);

  const handleDuplicateElement = useCallback((id: string) => {
    pushUndo();
    setPoster(p => {
      const el = p.elements.find(e => e.id === id);
      if (!el) return p;
      return { ...p, elements: [...p.elements, { ...el, id: createId(), x: el.x + 20, y: el.y + 20 }] };
    });
  }, [pushUndo]);

  const handleDeleteElement = useCallback((id: string) => {
    pushUndo();
    setPoster(p => ({ ...p, elements: p.elements.filter(el => el.id !== id) }));
    setSelectedElementId(null);
  }, [pushUndo]);

  const handleExport = useCallback(async (format: "png" | "jpg" = "png") => {
    const canvas = document.getElementById("poster-canvas");
    if (!canvas) return;
    try {
      const { default: html2canvas } = await import("html2canvas");
      const result = await html2canvas(canvas as HTMLElement, { useCORS: true, scale: 3, backgroundColor: null });
      const link = document.createElement("a");
      link.download = `sparkx-poster.${format}`;
      link.href = result.toDataURL(format === "jpg" ? "image/jpeg" : "image/png", format === "jpg" ? 0.95 : undefined);
      link.click();
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch { toast.error("Export failed. Try again."); }
  }, []);

  const handleRestoreHistory = useCallback((item: HistoryItem) => {
    pushUndo();
    setPoster(item.poster);
    setHistoryOpen(false);
    toast.success("Poster restored from history");
  }, [pushUndo]);

  const handleDeleteHistory = useCallback((id: string) => {
    setHistory(prev => prev.filter(h => h.id !== id));
  }, []);

  const handleDownloadHistory = useCallback(async (item: HistoryItem) => {
    setPoster(item.poster);
    setTimeout(() => handleExport("png"), 500);
  }, [handleExport]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z" && !e.shiftKey) { e.preventDefault(); handleUndo(); }
      if ((e.metaKey || e.ctrlKey) && e.key === "z" && e.shiftKey) { e.preventDefault(); handleRedo(); }
      if ((e.metaKey || e.ctrlKey) && e.key === "y") { e.preventDefault(); handleRedo(); }
      if ((e.key === "Delete" || e.key === "Backspace") && selectedElementId && document.activeElement === document.body) {
        e.preventDefault();
        handleDeleteElement(selectedElementId);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleUndo, handleRedo, selectedElementId, handleDeleteElement]);

  if (!started) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
        <PosterPromptPage onGenerate={(prompt) => {
          setIsGenerating(true);
          setStarted(true);
          handleGenerate(prompt);
        }} />
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden" style={{ height: "100vh", maxHeight: "100vh", background: isDark ? "#0d0d0d" : "#f0f0f0" }}>
      <header className="flex-shrink-0 px-5 py-2 flex items-center gap-4 backdrop-blur-xl"
        style={{ background: isDark ? "rgba(10,10,10,0.85)" : "rgba(255,255,255,0.85)", borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.1)" }}>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={() => { currentHistoryIdRef.current = null; setStarted(false); }}
            className="h-8 w-8 rounded-xl flex items-center justify-center transition-all hover:scale-105"
            style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111" }}>
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <SparkxLogo isDark={isDark} size="md" />
          <div className="h-6 w-px" style={{ background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }} />
          <div className="flex items-center gap-1">
            <button onClick={() => setHistoryOpen(!historyOpen)}
              className="h-8 w-8 rounded-xl flex items-center justify-center transition-all hover:scale-105 relative"
              style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111" }}>
              <Clock className="h-3.5 w-3.5" />
              {history.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full sparkx-badge text-[8px] font-bold flex items-center justify-center shadow-sm">
                  {history.length}
                </span>
              )}
            </button>
            <button onClick={handleUndo} disabled={undoStack.length === 0}
              className="h-8 w-8 rounded-xl flex items-center justify-center transition-all hover:scale-105 disabled:opacity-30"
              style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111" }}>
              <Undo2 className="h-3.5 w-3.5" />
            </button>
            <button onClick={handleRedo} disabled={redoStack.length === 0}
              className="h-8 w-8 rounded-xl flex items-center justify-center transition-all hover:scale-105 disabled:opacity-30"
              style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111" }}>
              <Redo2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
          <button onClick={() => setIsDark(!isDark)}
            className="h-8 w-8 rounded-xl flex items-center justify-center transition-all hover:scale-105"
            style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111" }}>
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <div className="flex rounded-xl overflow-hidden shadow-sm" style={{ border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)" }}>
            <button onClick={() => handleExport("png")} className="h-8 px-4 sparkx-export font-ui text-xs flex items-center gap-1.5 transition-all hover:brightness-110">
              <Download className="h-3 w-3" /> PNG
            </button>
            <button onClick={() => handleExport("jpg")} className="h-8 px-3 font-ui text-xs flex items-center gap-1.5 transition-all hover:brightness-90"
              style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)", color: isDark ? "#fff" : "#111", borderLeft: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)" }}>
              JPG
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative" style={{ minHeight: 0 }}>
        {/* History overlay — fixed on top of everything */}
        <AnimatePresence>
          {historyOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                onClick={() => setHistoryOpen(false)}
              />
              <HistoryPanel
                items={history} isOpen={historyOpen}
                onClose={() => setHistoryOpen(false)}
                onRestore={handleRestoreHistory}
                onDelete={handleDeleteHistory}
                onDownload={handleDownloadHistory}
              />
            </>
          )}
        </AnimatePresence>
        <PosterCanvas
          poster={poster} selectedElementId={selectedElementId}
          onSelectElement={setSelectedElementId}
          onUpdateElement={handleUpdateElement}
          isGenerating={isGenerating}
        />
        <InspectorPanel
          poster={poster} selectedElement={selectedElement}
          onUpdatePoster={handleUpdatePoster}
          onUpdateElement={handleUpdateElement}
          onAddElement={handleAddElement}
          onDeleteElement={handleDeleteElement}
          onDuplicateElement={handleDuplicateElement}
          onExport={() => handleExport("png")}
        />
      </div>
    </div>
  );
};

export default Index;
