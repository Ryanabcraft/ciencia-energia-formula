import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary-500 rounded-full blur-[120px] -mr-40 -mt-40"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-accent-500 rounded-full blur-[100px] -ml-20 -mb-20"></div>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0 -z-10 opacity-50">
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute bg-primary-400/20 rounded-full w-2 h-2"
             animate={{
               x: [0, Math.random() * 200 - 100],
               y: [0, Math.random() * 200 - 100],
               opacity: [0, 0.5, 0],
             }}
             transition={{
               duration: 5 + Math.random() * 5,
               repeat: Infinity,
               ease: "linear"
             }}
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
           />
         ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm mb-6 border border-primary-200 dark:border-primary-800">
              <Zap className="w-4 h-4 fill-current" />
              <span>Educação em Energia</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Domine o <span className="text-primary-500">Consumo de Energia</span> Elétrica
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Aprenda de forma interativa como calcular o gasto dos seus eletrodomésticos, 
              entenda o kWh e descubra como economizar na sua conta de luz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#intro" className="btn-primary">
                Começar agora <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#calc" className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-all group">
                <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Play className="w-4 h-4 fill-current text-primary-500" />
                </div>
                Usar Calculadora
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-slate-200">+500 estudantes</span> já aprenderam aqui.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4">
               {/* Dashboard Mockup */}
               <div className="card-premium p-4 md:p-8 overflow-hidden aspect-video relative flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-sm text-slate-400">Gasto este mês</p>
                      <h2 className="text-4xl font-bold text-primary-500">R$ 245,30</h2>
                    </div>
                    <div className="bg-primary-500/10 p-3 rounded-2xl border border-primary-500/20">
                      <Zap className="text-primary-500 w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-primary-500"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>0 kWh</span>
                      <span>Meta: 350 kWh</span>
                    </div>
                  </div>

                  {/* Floating labels */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-10 glass px-4 py-2 rounded-xl text-sm font-bold shadow-lg"
                  >
                    💡 E = P × t
                  </motion.div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
