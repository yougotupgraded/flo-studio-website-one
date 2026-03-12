import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-sm text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Next-Gen AI Infrastructure
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Automate the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            impossible.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Flo Studio provides enterprise-grade AI infrastructure and automated workflows. 
          We transform local businesses into tech-enabled powerhouses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton className="bg-white text-black font-medium flex items-center gap-2 group">
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton className="glass text-white font-medium glass-hover">
            Book a Consultation
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
