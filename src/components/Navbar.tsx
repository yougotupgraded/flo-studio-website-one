import { motion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-white" />
          <span className="font-semibold tracking-tight text-lg">Flo Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
