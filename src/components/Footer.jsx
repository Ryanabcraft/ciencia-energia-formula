import React from 'react';
import { Zap, Github, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 p-1.5 rounded-lg">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold">EduEnergia</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              Transformando a educação em energia elétrica através de ferramentas interativas e conteúdo simplificado para estudantes de todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all text-slate-400 hover:text-primary-500">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all text-slate-400 hover:text-primary-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all text-slate-400 hover:text-primary-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#intro" className="hover:text-primary-500 transition-colors">O que é Energia?</a></li>
              <li><a href="#formulas" className="hover:text-primary-500 transition-colors">Fórmulas</a></li>
              <li><a href="#calc" className="hover:text-primary-500 transition-colors">Calculadora</a></li>
              <li><a href="#quiz" className="hover:text-primary-500 transition-colors">Exercícios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                contato@eduenergia.com.br
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                suporte@escola.gov.br
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2026 EduEnergia. Feito com ❤️ para estudantes brasileiros.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:underline">Políticas de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
