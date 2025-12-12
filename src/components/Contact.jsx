import React from 'react';
import { Mail, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

export default function Contact({ isVisible }) {
  return (
    <section
      id="contact"
      className={`mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-cyan-500/20 transition-all duration-1000 ${
        isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-5xl font-bold mb-6 text-cyan-400 border-b-4 border-cyan-400 pb-2 inline-block font-heading flex items-center gap-3">
        <Mail /> Contact Me
      </h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {contactInfo.map((contact) => {
          const IconComponent = contact.icon;

          return (
            <a
              key={contact.title}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-800 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-2 text-cyan-400 group-hover:text-cyan-300">
                <IconComponent size={24} />
                <h3 className="text-xl font-bold font-heading">{contact.title}</h3>
              </div>

              <p className="text-gray-300 flex items-center gap-2">
                {contact.value}
                {contact.link.startsWith('http') && <ExternalLink size={16} />}
              </p>
            </a>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tejasnichat2001@gmail.com"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading glow-effect"
        >
          <Send size={20} /> Send Email
        </a>

        <a
          href="https://linkedin.com/in/devops-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 border-2 border-blue-400 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading"
        >
          <Linkedin size={20} /> Connect on LinkedIn
        </a>

        <a
          href="https://github.com/devopsengineer"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading hover:bg-cyan-500/10"
        >
          <Github size={20} /> View GitHub
        </a>
      </div>
    </section>
  );
}