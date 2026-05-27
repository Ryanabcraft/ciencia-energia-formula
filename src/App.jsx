import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Theory from './components/Theory';
import Calculator from './components/Calculator';
import Exercises from './components/Exercises';
import Footer from './components/Footer';
import { Zap } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center z-[9999]">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-800 border-t-primary-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="text-primary-500 w-8 h-8 fill-current animate-pulse" />
          </div>
        </div>
        <p className="mt-6 text-slate-500 font-bold tracking-widest text-sm animate-pulse">CARREGANDO CONHECIMENTO...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Theory />
        <Calculator />
        <Exercises />
      </main>
      <Footer />
    </div>
  );
}

export default App;
