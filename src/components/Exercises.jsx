import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle, XCircle, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

const Exercises = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const examples = [
    {
      title: "Chuveiro Elétrico",
      power: "5500W",
      time: "30 min",
      explanation: "1. Potência: 5500W / 1000 = 5.5 kW. 2. Tempo: 30 min / 60 = 0.5h. 3. Cálculo: 5.5 kW × 0.5h = 2.75 kWh."
    },
    {
      title: "TV de LED",
      power: "200W",
      time: "4h",
      explanation: "1. Potência: 200W / 1000 = 0.2 kW. 2. Tempo: 4h (já em horas). 3. Cálculo: 0.2 kW × 4h = 0.8 kWh."
    }
  ];

  const questions = [
    {
      q: "Um ventilador de 100W fica ligado por 10 horas. Qual o consumo em kWh?",
      a: "1",
      explanation: "100W = 0.1kW. Então: 0.1 kW × 10h = 1 kWh."
    },
    {
      q: "Um ferro de passar (1200W) é usado por 30 minutos. Qual o consumo?",
      a: "0.6",
      explanation: "1200W = 1.2kW. 30min = 0.5h. Então: 1.2 × 0.5 = 0.6 kWh."
    }
  ];

  const checkAnswer = () => {
    if (userAnswer === questions[currentQuestion].a) {
      setFeedback("correct");
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setFeedback("wrong");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setFeedback(null);
    }
  };

  return (
    <section id="quiz" className="py-20 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Solved Examples */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Exemplos Resolvidos</h2>
          <div className="space-y-4">
            {examples.map((ex, idx) => (
              <div key={idx} className="card-premium overflow-hidden">
                <button 
                  onClick={() => setSelectedExample(selectedExample === idx ? null : idx)}
                  className="w-full flex items-center justify-between font-bold text-lg"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-primary-500" />
                    {ex.title} ({ex.power})
                  </span>
                  <ChevronDown className={`transition-transform ${selectedExample === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {selectedExample === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                    >
                      <p className="font-mono text-sm bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
                        {ex.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-primary-600 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Dica para Prova 📝</h3>
              <ul className="space-y-3 opacity-90 text-sm">
                <li className="flex gap-2"><span>•</span> Nunca esqueça de converter Watts para quilowatts (divida por 1000).</li>
                <li className="flex gap-2"><span>•</span> Se o exercício falar em "W", olhe bem se não é "kW".</li>
                <li className="flex gap-2"><span>•</span> Multiplicação com vírgula: ande a casa decimal para a esquerda.</li>
              </ul>
            </div>
            <Award className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10" />
          </div>
        </div>

        {/* Interactive Quiz */}
        <div className="lg:mt-0">
          <div className="card-premium h-full bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-primary-500/30">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Pratique Agora</h3>
              <div className="px-3 py-1 bg-primary-500 text-white rounded-full text-xs font-bold">
                Q {currentQuestion + 1} de {questions.length}
              </div>
            </div>

            <p className="text-xl font-medium mb-8 leading-relaxed">
              {questions[currentQuestion].q}
            </p>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Sua resposta (apenas números)"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono text-xl outline-none focus:ring-4 focus:ring-primary-500/20 transition-all"
              />

              {!feedback ? (
                <button
                  onClick={checkAnswer}
                  className="btn-primary w-full justify-center py-4"
                >
                  Verificar Resposta
                </button>
              ) : (
                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl flex items-center gap-3 font-bold ${
                    feedback === "correct" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                  }`}>
                    {feedback === "correct" ? <CheckCircle /> : <XCircle />}
                    {feedback === "correct" ? "Você acertou!" : "Ops, tente novamente."}
                  </div>
                  
                  <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-sm italic">
                    <strong>Explicação:</strong> {questions[currentQuestion].explanation}
                  </div>

                  {currentQuestion < questions.length - 1 && (
                    <button
                      onClick={nextQuestion}
                      className="w-full py-4 rounded-2xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors"
                    >
                      Próxima Questão
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
