import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code2, BarChart3, Sparkles } from "lucide-react";

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Initialize particles
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = `rgba(196, 30, 58, ${alpha})`; // Dragon Red #C41E3A
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        if (mouse.x > -500) {
          const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mDist < 80) {
            const force = (80 - mDist) / 80;
            const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        ctx.fillStyle = "rgba(196, 30, 58, 0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-visible bg-slate-950/5 rounded-2xl border border-slate-200/50 backdrop-blur-[2px]">
      {/* Background Interactive Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-0" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,20,25,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,20,25,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-2xl z-0"></div>

      {/* Central Brand Accent Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Floating Elements Container */}
      <div className="relative w-full h-full flex items-center justify-center z-10 p-6">
        
        {/* Code Editor Mockup (Floating Top-Left) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-4 left-4 md:top-8 md:left-8 w-64 md:w-80 bg-slate-900/90 text-slate-300 rounded-xl border border-slate-800 backdrop-blur-md overflow-hidden text-xs font-mono animate-float-slow shadow-[0_25px_50px_-12px_rgba(196,30,58,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              App.tsx
            </span>
          </div>
          {/* Content */}
          <div className="p-4 space-y-2 select-none text-[11px] leading-relaxed">
            <div>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-400">agency</span> ={" "}
              <span className="text-yellow-300">{"{"}</span>
            </div>
            <div className="pl-4">
              <span className="text-slate-400">name:</span>{" "}
              <span className="text-emerald-400">"Nascraft Digitals"</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">vision:</span>{" "}
              <span className="text-emerald-400">"Digital Excellence"</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">precision:</span>{" "}
              <span className="text-pink-400">true</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">stack:</span>{" "}
              <span className="text-purple-400">[</span>
              <span className="text-emerald-400">"React"</span>,{" "}
              <span className="text-emerald-400">"TypeScript"</span>,{" "}
              <span className="text-emerald-400">"Tailwind"</span>
              <span className="text-purple-400">]</span>
            </div>
            <div>
              <span className="text-yellow-300">{"}"}</span>;
            </div>
          </div>
        </motion.div>

        {/* Analytics Card Mockup (Floating Bottom-Right) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-60 md:w-72 bg-white/95 rounded-xl border border-slate-100 p-4 md:p-5 flex flex-col gap-3.5 backdrop-blur-md animate-float-medium shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Performance</p>
                <h4 className="text-xs font-bold text-slate-800">Software Analytics</h4>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">+48.2%</span>
          </div>

          {/* Mini Sparkline Chart */}
          <div className="h-16 w-full flex items-end justify-between gap-1 pt-2">
            {[40, 55, 30, 45, 60, 75, 50, 70, 90, 85].map((val, idx) => (
              <div key={idx} className="flex-1 bg-slate-100 rounded-t-sm h-full relative overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + idx * 0.05 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-primary rounded-t-sm"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium">
            <span>Q1 Goals</span>
            <span>Active Optimization</span>
          </div>
        </motion.div>

        {/* Small floating badge (Top Right) */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-12 right-12 bg-white/90 border border-slate-100 rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-2 text-xs font-semibold text-slate-700 backdrop-blur-md hidden md:flex"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Interactive UX/UI</span>
        </motion.div>
      </div>

      {/* Floating Card CSS Animation Helper */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
