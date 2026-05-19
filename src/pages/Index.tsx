import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchPage from "@/components/SearchPage";
import LoadingScreen from "@/components/LoadingScreen";
import IntroAnimation from "@/components/IntroAnimation";
import GeneratedWebsite from "@/components/GeneratedWebsite";
import CategoryPicker from "@/components/CategoryPicker";
import ModePicker from "@/components/ModePicker";
import type { WebsiteCategory } from "@/components/CategoryPicker";
import { generateWebsiteContent, type WebsiteContent } from "@/lib/generateContent";
import { buildImagePrompts, generateAIImages } from "@/lib/aiImages";
import { toast } from "sonner";

type AppState = "mode" | "idle" | "picking" | "loading" | "intro" | "generated";

const pageVariants = {
  initial: { opacity: 0, scale: 0.97, filter: "blur(8px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.02, filter: "blur(6px)" },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pageTransition = { duration: 0.5, ease };

const Index = () => {
  const [state, setState] = useState<AppState>("mode");
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState<WebsiteCategory | null>(null);
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [aiProgress, setAiProgress] = useState(0);
  const [aiStatus, setAiStatus] = useState("");
  const aiImagesRef = useRef<Map<string, string>>(new Map());
  const contentRef = useRef<WebsiteContent | null>(null);

  const handleModeSelect = useCallback(() => {
    setState("idle");
  }, []);

  const handleGenerate = useCallback((userPrompt: string) => {
    setPrompt(userPrompt);
    setState("picking");
  }, []);

  const handleCategorySelect = useCallback((selectedCategory: WebsiteCategory) => {
    setCategory(selectedCategory);
    setAiProgress(0);
    setAiStatus("Preparing content...");
    setState("loading");

    // Generate content FIRST
    const generated = generateWebsiteContent(prompt, selectedCategory);
    contentRef.current = generated;
    setContent(generated);

    // Build image prompts using actual product/service names
    const productInfo = generated.products?.map(p => ({ name: p.name, description: p.description }));
    const serviceInfo = generated.services?.map(s => ({ name: s.title, description: s.description }));
    const imagePrompts = buildImagePrompts(prompt, selectedCategory, productInfo, serviceInfo);

    setAiStatus("Generating AI images...");
    generateAIImages(imagePrompts, (done, total) => {
      const pct = Math.round((done / total) * 100);
      setAiProgress(pct);
      setAiStatus(`Generating AI images (${done}/${total})...`);
    }).then((imageMap) => {
      aiImagesRef.current = imageMap;
      if (imageMap.size === 0) {
        console.warn("No AI images generated, falling back to curated images");
      }
      setAiProgress(100);
      setAiStatus("All images ready!");
    }).catch((err) => {
      console.error("AI image generation failed:", err);
      toast.error("AI images couldn't be generated, using curated images instead");
      setAiProgress(100);
    });
  }, [prompt]);

  const handleLoadingComplete = useCallback(() => {
    // Inject AI images into content before showing intro
    setContent(prev => {
      if (!prev) return prev;
      const generated = { ...prev };
      const aiImages = aiImagesRef.current;
      if (aiImages.size > 0) {
        if (aiImages.has("hero")) generated.heroImage = aiImages.get("hero")!;
        if (aiImages.has("about")) generated.aboutImage = aiImages.get("about")!;
        if (aiImages.has("promo-banner")) generated.promoBanner = aiImages.get("promo-banner")!;

        generated.categoryImages = generated.categoryImages || [];
        for (let i = 1; i <= 6; i++) {
          const key = `category-${i}`;
          if (aiImages.has(key)) generated.categoryImages[i - 1] = aiImages.get(key)!;
        }

        generated.services.forEach((svc, i) => {
          const key = `service-${i}`;
          if (aiImages.has(key)) svc.image = aiImages.get(key)!;
        });

        generated.galleryImages.forEach((img, i) => {
          const key = `gallery-${i}`;
          if (aiImages.has(key)) img.src = aiImages.get(key)!;
        });

        for (let bi = 1; bi <= 8; bi++) {
          const bgKey = `bg-section-${bi}`;
          if (aiImages.has(bgKey)) {
            (generated as any)[`bgSection${bi}`] = aiImages.get(bgKey)!;
          }
        }

        if (aiImages.has("promo-banner-2")) {
          (generated as any).promoBanner2 = aiImages.get("promo-banner-2")!;
        }

        generated.blogPosts.forEach((post, i) => {
          const blogKey = `blog-${i}`;
          const fallbackKey = `gallery-${i % 4}`;
          if (aiImages.has(blogKey)) post.image = aiImages.get(blogKey)!;
          else if (aiImages.has(fallbackKey)) post.image = aiImages.get(fallbackKey)!;
        });

        if (generated.products) {
          generated.products.forEach((prod, i) => {
            const key = `product-${i}`;
            if (aiImages.has(key)) prod.image = aiImages.get(key)!;
          });
        }
      }
      return generated;
    });
    setState("intro");
  }, []);

  const handleIntroComplete = useCallback(() => {
    setState("generated");
  }, []);

  const handleBack = useCallback(() => {
    setState("mode");
    setPrompt("");
    setCategory(null);
    setContent(null);
    setAiProgress(0);
    setAiStatus("");
    aiImagesRef.current = new Map();
    contentRef.current = null;
  }, []);

  const renderPage = () => {
    switch (state) {
      case "mode":
        return (
          <motion.div key="mode" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen">
            <ModePicker onSelect={handleModeSelect} />
          </motion.div>
        );
      case "idle":
        return (
          <motion.div key="search" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen" style={{ overflowX: "hidden" }}>
            <SearchPage onGenerate={handleGenerate} onBack={() => setState("mode")} />
          </motion.div>
        );
      case "picking":
        return (
          <motion.div key="picking" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen">
            <CategoryPicker prompt={prompt} onSelect={handleCategorySelect} onBack={() => setState("idle")} />
          </motion.div>
        );
      case "loading":
        return (
          <motion.div key="loading" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen">
            <LoadingScreen prompt={prompt} onComplete={handleLoadingComplete} aiProgress={aiProgress} aiStatus={aiStatus} onBack={() => setState("picking")} />
          </motion.div>
        );
      case "intro":
        return content ? (
          <motion.div key="intro" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="min-h-screen">
            <IntroAnimation content={content} onComplete={handleIntroComplete} />
          </motion.div>
        ) : null;
      case "generated":
        return content ? (
          <motion.div key="generated" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.7, ease }} className="min-h-screen">
            <GeneratedWebsite content={content} onBack={handleBack} />
          </motion.div>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderPage()}
    </AnimatePresence>
  );
};

export default Index;
