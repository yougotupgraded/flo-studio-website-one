import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function LeadGen() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/[0.02] blur-[50px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 relative z-10">
            Ready to upgrade your business?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto font-light relative z-10">
            Join our exclusive list to receive insights on AI automation and early access to our new infrastructure tools.
          </p>

          <form className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-white/30 text-xs mt-6 relative z-10">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
