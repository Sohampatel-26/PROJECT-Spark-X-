import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff, ArrowRight, Mail, Lock, User } from "lucide-react";
import SparkxLogo from "@/components/SparkxLogo";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LINES = Array.from({ length: 8 }, (_, i) => ({
  x: 10 + i * 12, delay: i * 0.4, dur: 6 + i * 0.7,
}));

const InputField = ({ icon: Icon, type, placeholder, value, onChange, required, minLength, right, delay = 0 }: any) => {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.55, ease }}
    >
      <motion.div
        animate={{ color: focused ? "#c084fc" : "rgba(255,255,255,0.2)" }}
        transition={{ duration: 0.25 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
      >
        <Icon className="w-4 h-4" />
      </motion.div>
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        required={required} minLength={minLength}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full pl-11 pr-12 py-[14px] rounded-xl text-sm outline-none placeholder:text-white/20"
        style={{
          fontFamily: "'Outfit', sans-serif",
          background: focused ? "rgba(168,85,247,0.06)" : "rgba(255,255,255,0.025)",
          border: `1px solid ${focused ? "rgba(168,85,247,0.45)" : "rgba(255,255,255,0.07)"}`,
          boxShadow: focused
            ? "0 0 0 3px rgba(168,85,247,0.07), 0 0 30px rgba(168,85,247,0.08), inset 0 0 0 9999px rgba(168,85,247,0.06)"
            : "inset 0 0 0 9999px rgba(255,255,255,0.025)",
          color: "rgba(255,255,255,0.92)", caretColor: "#c084fc",
          WebkitTextFillColor: "rgba(255,255,255,0.92)",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      />
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="absolute bottom-0 left-4 right-4 h-px origin-left pointer-events-none"
            style={{ background: "linear-gradient(90deg, #7c3aed, #c084fc, #ec4899)" }}
          />
        )}
      </AnimatePresence>
      {right}
    </motion.div>
  );
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 20, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 20, damping: 30 });

  useEffect(() => {
    const h = (e: MouseEvent) => {
      const r = containerRef.current?.getBoundingClientRect();
      if (!r) return;
      mouseX.set((e.clientX - r.left - r.width / 2) * 0.015);
      mouseY.set((e.clientY - r.top - r.height / 2) * 0.015);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => { if (session) navigate("/"); });
    supabase.auth.getSession().then(({ data: { session } }) => { if (session) navigate("/"); });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back to Sparkx!");
      } else {
        const { error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName }, emailRedirectTo: window.location.origin } });
        if (error) throw error;
        toast.success("Check your email to verify!");
      }
    } catch (err: any) { toast.error(err.message || "Authentication failed"); }
    finally { setLoading(false); }
  };

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse 200% 150% at 50% 0%, #1a1a1a 0%, #141414 30%, #111111 55%, #0d0d0d 100%)" }}>

      {/* Animated vertical scan lines */}
      {LINES.map((l, i) => (
        <motion.div key={i} className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: `${l.x}%`, background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.06), rgba(236,72,153,0.04), transparent)" }}
          animate={{ opacity: [0, 0.6, 0], scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: l.dur, repeat: Infinity, delay: l.delay, ease: "easeInOut" }} />
      ))}

      {/* Ambient orbs with parallax */}
      <motion.div className="absolute pointer-events-none"
        style={{ top: "-20%", left: "-15%", width: 800, height: 800, background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)", filter: "blur(100px)", x: smoothX, y: smoothY }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute pointer-events-none"
        style={{ bottom: "-20%", right: "-15%", width: 700, height: 700, background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      {/* Fine grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Floating particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div key={i} className="absolute w-px h-px rounded-full pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: i % 3 === 0 ? "rgba(168,85,247,0.8)" : i % 3 === 1 ? "rgba(236,72,153,0.7)" : "rgba(255,255,255,0.4)",
            width: i % 4 === 0 ? 2 : 1, height: i % 4 === 0 ? 2 : 1,
          }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -40, -80], x: [(Math.random() - 0.5) * 30] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 6, ease: "easeOut" }} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease }}
        className="relative z-10 w-full max-w-[400px] px-5"
      >
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="text-center mb-10"
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring", bounce: 0.3 }}
          >
            <SparkxLogo size="lg" isDark={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.9, ease }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <motion.div className="h-px w-12"
              style={{ background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.5))" }}
              animate={{ scaleX: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
            <p className="text-[10px] tracking-[0.45em] uppercase font-medium"
              style={{ color: "rgba(192,132,252,0.55)", fontFamily: "'Outfit', sans-serif" }}>
              AI · Creative Studio
            </p>
            <motion.div className="h-px w-12"
              style={{ background: "linear-gradient(90deg, rgba(192,132,252,0.5), transparent)" }}
              animate={{ scaleX: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
          </motion.div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease }}
          className="relative rounded-3xl p-7 overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(22,22,22,0.97), rgba(14,14,14,0.99))",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 60px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Animated top shimmer */}
          <motion.div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.9) 35%, rgba(236,72,153,0.7) 65%, transparent 100%)" }}
            animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }} />

          {/* Roaming inner glow */}
          <motion.div className="absolute inset-0 pointer-events-none rounded-3xl"
            animate={{ opacity: [0.15, 0.45, 0.15], backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 60%)" }} />

          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(168,85,247,0.1), transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, rgba(236,72,153,0.1), transparent 70%)" }} />

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex mb-7 p-1 rounded-2xl gap-1"
            style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            {["Sign In", "Sign Up"].map((label, i) => {
              const active = i === 0 ? isLogin : !isLogin;
              return (
                <button key={label} onClick={() => setIsLogin(i === 0)}
                  className="flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 relative overflow-hidden"
                  style={{ color: active ? "#fff" : "rgba(255,255,255,0.22)", fontFamily: "'Outfit', sans-serif" }}>
                  {active && (
                    <motion.div layoutId="auth-tab" className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(236,72,153,0.25))", border: "1px solid rgba(168,85,247,0.4)", boxShadow: "0 0 24px rgba(168,85,247,0.15)" }}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }} />
                  )}
                  {active && (
                    <motion.div className="absolute inset-0 pointer-events-none rounded-xl"
                      initial={{ x: "-100%" }} animate={{ x: "200%" }}
                      transition={{ duration: 1.2, delay: 0.1 }}
                      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div key="name"
                  initial={{ opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }} transition={{ duration: 0.35, ease }}>
                  <InputField icon={User} type="text" placeholder="Your name" value={displayName}
                    onChange={(e: any) => setDisplayName(e.target.value)} required={!isLogin} delay={0} />
                </motion.div>
              )}
            </AnimatePresence>

            <InputField icon={Mail} type="email" placeholder="Email address" value={email}
              onChange={(e: any) => setEmail(e.target.value)} required delay={0.5} />

            <InputField icon={Lock} type={showPassword ? "text" : "password"} placeholder="Password" value={password}
              onChange={(e: any) => setPassword(e.target.value)} required minLength={6} delay={0.58}
              right={
                <motion.button type="button" onClick={() => setShowPassword(!showPassword)}
                  whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg z-10"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#c084fc")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}>
                  <AnimatePresence mode="wait">
                    <motion.div key={showPassword ? "off" : "on"}
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              } />

            <AnimatePresence>
              {isLogin && (
                <motion.div className="flex justify-end"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <button type="button" className="text-xs transition-colors duration-200"
                    style={{ color: "rgba(192,132,252,0.4)", fontFamily: "'Outfit', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c084fc")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(192,132,252,0.4)")}>
                    Forgot password?
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button type="submit" disabled={loading}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(168,85,247,0.55), 0 0 0 1px rgba(168,85,247,0.35)" }}
              whileTap={{ scale: 0.975 }}
              className="w-full py-[14px] rounded-xl text-sm font-bold flex items-center justify-center gap-2 relative overflow-hidden mt-1"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)", color: "#fff", boxShadow: "0 8px 32px rgba(168,85,247,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}>
              {/* Shimmer sweep */}
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }} />
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
              ) : (
                <span className="relative z-10 flex items-center gap-2 tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {isLogin ? "Sign In" : "Create Account"}
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
              )}
            </motion.button>

            <motion.div className="flex items-center gap-3 py-1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
              <motion.div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }}
                animate={{ scaleX: [0, 1] }} transition={{ delay: 0.8, duration: 0.6 }} />
              <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "'Outfit', sans-serif" }}>or continue with</span>
              <motion.div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }}
                animate={{ scaleX: [0, 1] }} transition={{ delay: 0.8, duration: 0.6 }} />
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-2.5"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}>
              {[
                { name: "Google", svg: <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
                { name: "GitHub", svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              ].map(({ name, svg }, i) => (
                <motion.button key={name} type="button"
                  whileHover={{ scale: 1.04, borderColor: "rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.06)" }}
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.07, duration: 0.4 }}
                  className="py-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit', sans-serif", transition: "all 0.25s" }}>
                  {svg} {name}
                </motion.button>
              ))}
            </motion.div>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center text-xs mt-6"
          style={{ color: "rgba(255,255,255,0.18)", fontFamily: "'Outfit', sans-serif" }}
        >
          {isLogin ? "New to Sparkx?" : "Already have an account?"}
          <motion.button onClick={() => setIsLogin(!isLogin)}
            className="ml-1.5 font-semibold"
            whileHover={{ color: "#c084fc" }}
            style={{ color: "rgba(192,132,252,0.6)" }}>
            {isLogin ? "Create free account →" : "Sign in →"}
          </motion.button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Auth;
