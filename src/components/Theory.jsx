import React from 'react';
import { motion } from 'framer-motion';
import { Info, Calculator, Zap, Clock, TrendingDown } from 'lucide-react';

const Theory = () => {
  const steps = [
    {
      title: "Converter W para kW",
      desc: "Eletrodomésticos costumam vir em Watts (W). Divida por 1.000 para obter Quilowatts (kW).",
      formula: "P(kW) = P(W) / 1000",
      icon: <Zap className="text-amber-500" />
    },
    {
      title: "Calcular Tempo em Horas",
      desc: "Se o tempo estiver em minutos, divida por 60. Se estiver em horas, use direto.",
      formula: "t(h) = min / 60",
      icon: <Clock className="text-blue-500" />
    },
    {
      title: "Multiplicar Potência × Tempo",
      desc: "O resultado é o consumo em kWh por um único uso.",
      formula: "E = P(kW) × t(h)",
      icon: <Calculator className="text-emerald-500" />
    },
    {
      title: "Multiplicar pela Tarifa",
      desc: "Multiplique o total de kWh pelo custo do kWh na sua conta (ex: R$ 0,90).",
      formula: "Custo = Energia × Tarifa",
      icon: <TrendingDown className="text-rose-500" />
    }
  ];

  return (
    <div className="py-20 space-y-32">
      {/* Intro Section */}
      <section id="intro" className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O que é Energia Elétrica?</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Antes de calcularmos, precisamos entender os conceitos básicos que regem a nossa conta de luz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-premium">
            <div className="bg-primary-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Energia e Consumo</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Energia elétrica é o que faz nossos aparelhos funcionarem. O consumo é a quantidade dessa energia que um aparelho "pede" para realizar sua função em um certo tempo.
            </p>
          </div>

          <div className="card-premium">
            <div className="bg-primary-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Potência (W e kW)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              A Potência (P) mede a "rapidez" de consumo. 1000 Watts (W) equivalem a 1 Quilowatt (kW). Quanto maior a potência, mais rápido o consumo.
            </p>
          </div>

          <div className="card-premium">
            <div className="bg-primary-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Info className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">O kWh</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              O Quilowatt-hora (kWh) é a unidade que as empresas de energia usam para cobrar. Representa o uso de 1kW de potência durante 1 hora.
            </p>
          </div>
        </div>
      </section>

      {/* Formulas Section */}
      <section id="formulas" className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">A Fórmula Mágica 🧪</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Toda a ciência do consumo se resume a uma multiplicação simples. Se você entender esta fórmula, dominará sua conta de luz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0 mt-1 font-bold">E</div>
                  <div>
                    <h4 className="font-bold">Energia (kWh)</h4>
                    <p className="text-sm text-slate-500">É o total de "trabalho" realizado no período.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-1 font-bold">P</div>
                  <div>
                    <h4 className="font-bold">Potência (kW)</h4>
                    <p className="text-sm text-slate-500">A força do aparelho. Lembre-se: sempre em kW!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-1 font-bold">t</div>
                  <div>
                    <h4 className="font-bold">Tempo (h)</h4>
                    <p className="text-sm text-slate-500">Quanto tempo o aparelho ficou ligado.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-primary-600 to-primary-400 text-white border-0 shadow-lg shadow-primary-500/20">
              <p className="text-primary-100 uppercase tracking-widest font-bold text-sm mb-4">Fórmula Principal</p>
              <div className="text-6xl font-mono font-bold py-12 text-center border-y border-white/20">
                E = P × t
              </div>
              <div className="mt-8 flex justify-between items-center text-primary-100">
                <div className="text-center px-4">
                  <p className="text-xs">Energia</p>
                  <p className="font-bold">kWh</p>
                </div>
                <div className="text-2xl">×</div>
                <div className="text-center px-4">
                  <p className="text-xs">Potência</p>
                  <p className="font-bold">kW</p>
                </div>
                <div className="text-2xl">×</div>
                <div className="text-center px-4">
                  <p className="text-xs">Tempo</p>
                  <p className="font-bold">Horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Section */}
      <section id="steps" className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Passo a Passo do Cálculo</h2>
          <p className="text-slate-500 dark:text-slate-400">Siga estas etapas para nunca mais errar em uma prova ou no dia a dia.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-sm transition-all"
            >
              <div className="bg-slate-50 dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                {step.icon}
              </div>
              <span className="absolute top-8 right-8 text-4xl font-bold opacity-10">0{idx + 1}</span>
              <h3 className="font-bold text-xl mb-4">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{step.desc}</p>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700 text-primary-500">
                {step.formula}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};



export default Theory;
