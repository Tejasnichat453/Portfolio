import React from 'react';
import { Server } from 'lucide-react';
import { skills } from '../data/skills';
import { certifications } from '../data/certifications';

export default function Skills({ isVisible }) {
  return (
    <section
      id="skills"
      className={`mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-cyan-500/20 transition-all duration-1000 ${
        isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-5xl font-bold mb-6 text-cyan-400 border-b-4 border-cyan-400 pb-2 inline-block font-heading flex items-center gap-3">
        <Server /> Skills & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl text-center border border-white/10 group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-2 font-heading">{skill.name}</h3>
            <p className="text-white/80 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mb-6 text-cyan-400 font-heading">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-gray-800 border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400 transition-all hover:scale-105 flex items-center gap-4 group"
          >
            <div className="text-5xl group-hover:scale-110 transition-transform">{cert.icon}</div>
            <div>
              <h4 className="font-bold text-lg text-white font-heading">{cert.name}</h4>
              <p className="text-cyan-400">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}