import React from 'react';
import { Terminal, Server, Activity, Mail } from 'lucide-react';

export default function Header({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'about', icon: <Terminal size={18} />, label: 'About' },
    { id: 'skills', icon: <Server size={18} />, label: 'Skills' },
    { id: 'experience', icon: <Activity size={18} />, label: 'Experience' },
    { id: 'contact', icon: <Mail size={18} />, label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-2xl font-bold text-cyan-400 font-heading flex items-center gap-2">
            <Terminal className="animate-pulse" /> My.Portfolio
          </div>
          <ul className="flex gap-4 flex-wrap">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                    activeSection === item.id 
                      ? 'bg-cyan-500 text-black border-cyan-400 glow-effect' 
                      : 'text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}