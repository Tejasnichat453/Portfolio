import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Download } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '$ whoami\nDevOps Engineer | Cloud Architect | Automation Specialist';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden grid-background">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-pulse glow-effect">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-7xl">
                <Terminal className="text-cyan-400" size={80} />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tejas Nichat
            </span>
          </h1>
          <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 max-w-3xl mx-auto mb-8 text-left glow-effect">
            <pre className="text-cyan-400 text-lg terminal-cursor whitespace-pre-wrap">{terminalText}</pre>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading glow-effect"
            >
              <Mail size={20} /> Get In Touch
            </button>
            <button className="bg-gray-800 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading hover:bg-cyan-500/10">
              <Download size={20} /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}