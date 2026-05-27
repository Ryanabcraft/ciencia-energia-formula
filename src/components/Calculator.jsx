import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, RefreshCw, DollarSign, Zap } from 'lucide-react';

const Calculator = () => {
  const [power, setPower] = useState(5500);
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(0.90);
  
  const [results, setResults] = useState({
    kwhPerDay: 0,
    kwhPerMonth: 0,
    costPerMonth: 0
  });

  useEffect(() => {
    const powerKw = power / 1000;
    const kwhDay = powerKw * hours;
    const kwhMonth = kwhDay * days;
    const costMonth = kwhMonth * rate;

    setResults({
      kwhPerDay: kwhDay.toFixed(2),
      kwhPerMonth: kwhMonth.toFixed(2),
      costPerMonth: costMonth.toFixed(2)
    });
  }, [power, hours, days, rate]);

  return (
    <section id="calc" className="py-20 bg-primary-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Calculadora de Consumo</h2>
          <p className="text-slate-500">Simule o gasto de qualquer aparelho em tempo real.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="card-premium h-full">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Potência do Aparelho (Watts)
                </label>
                <div className="relative">
                  <Zap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    value={power}
                    onChange={(e) => setPower(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Horas de uso / dia
                  </label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Dias de uso / mês
                  </label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Tarifa da Região (R$ / kWh)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    step="0.01"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-mono"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 flex gap-4">
               <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <span className="text-amber-600 font-bold">!</span>
               </div>
               <p className="text-xs text-amber-800 dark:text-amber-400 mt-1">
                 <strong>Dica:</strong> Uma geladeira comum gasta cerca de 30-50 kWh por mês. Um chuveiro elétrico pode chegar a 100 kWh se usado 1h por dia!
               </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-premium border-l-8 border-l-primary-500 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Consumo Diário</p>
                <h3 className="text-3xl font-mono font-bold text-primary-500">{results.kwhPerDay} <span className="text-sm font-sans font-normal text-slate-500">kWh/dia</span></h3>
              </div>
              <div className="bg-primary-500/10 p-4 rounded-2xl">
                <CalcIcon className="text-primary-500 w-8 h-8" />
              </div>
            </div>

            <div className="card-premium border-l-8 border-l-accent-500 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Consumo Mensal</p>
                <h3 className="text-3xl font-mono font-bold text-accent-600">{results.kwhPerMonth} <span className="text-sm font-sans font-normal text-slate-500">kWh/mês</span></h3>
              </div>
              <div className="bg-accent-500/10 p-4 rounded-2xl">
                <Zap className="text-accent-500 w-8 h-8" />
              </div>
            </div>

            <div className="card-premium border-l-8 border-l-emerald-500 flex flex-col justify-center bg-emerald-500/5">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Custo Mensal Estimado</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-emerald-600">R$</span>
                <h2 className="text-6xl font-mono font-black text-emerald-600 tracking-tighter">
                  {results.costPerMonth}
                </h2>
              </div>
              <p className="text-xs text-emerald-700/60 mt-4">* Cálculo baseado apenas na tarifa informada, sem impostos extras.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
