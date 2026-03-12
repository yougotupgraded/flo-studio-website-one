import { motion } from 'motion/react';
import { Cpu, Workflow, Globe, Zap, Database, Lock } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">What We Do</h2>
          <p className="text-white/60 text-lg max-w-xl font-light">
            Comprehensive tech solutions designed to scale your operations and minimize manual overhead.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Large Feature */}
          <motion.div variants={item} className="glass rounded-3xl p-8 md:col-span-2 flex flex-col justify-between group glass-hover transition-colors overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-3">AI Infrastructure</h3>
              <p className="text-white/60 font-light max-w-md">
                Custom LLM deployments, RAG pipelines, and scalable inference endpoints tailored to your proprietary data.
              </p>
            </div>
          </motion.div>

          {/* Square Feature */}
          <motion.div variants={item} className="glass rounded-3xl p-8 flex flex-col justify-between group glass-hover transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Automated Workflows</h3>
              <p className="text-white/60 font-light text-sm">
                Connect your tools and automate repetitive tasks with zero-maintenance pipelines.
              </p>
            </div>
          </motion.div>

          {/* Square Feature */}
          <motion.div variants={item} className="glass rounded-3xl p-8 flex flex-col justify-between group glass-hover transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Web & Tech Onboarding</h3>
              <p className="text-white/60 font-light text-sm">
                Modern, high-performance websites that serve as the foundation for your digital transformation.
              </p>
            </div>
          </motion.div>

          {/* Wide Feature */}
          <motion.div variants={item} className="glass rounded-3xl p-8 md:col-span-2 flex flex-col justify-between group glass-hover transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white/70" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Database className="w-5 h-5 text-white/70" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white/70" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-3">Enterprise Security & Speed</h3>
              <p className="text-white/60 font-light max-w-md">
                Bank-grade encryption, edge caching, and 99.99% uptime guarantees for all deployed infrastructure.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
