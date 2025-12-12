import React from 'react';
import { Terminal, Cloud, Container, Zap } from 'lucide-react';

export default function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-cyan-500/20 transition-all duration-1000 ${
        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-5xl font-bold mb-6 text-cyan-400 border-b-4 border-cyan-400 pb-2 inline-block font-heading flex items-center gap-3">
        <Terminal /> About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Experienced DevOps Engineer with 1.5 years of expertise in building and maintaining scalable cloud infrastructure. 
            Passionate about automation, continuous integration, and delivering high-quality solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Specialized in container orchestration, cloud architecture, and implementing GitOps workflows. 
            Strong advocate for Infrastructure as Code and DevSecOps practices.
          </p>
          <div className="flex gap-4 flex-wrap mt-6">
            <div className="bg-gray-800 border border-cyan-500/30 px-4 py-2 rounded-lg">
              <span className="text-cyan-400 font-bold">1.5+</span> Years Experience
            </div>
            <div className="bg-gray-800 border border-cyan-500/30 px-4 py-2 rounded-lg">
              <span className="text-cyan-400 font-bold">5+</span> Projects Deployed
            </div>
            <div className="bg-gray-800 border border-cyan-500/30 px-4 py-2 rounded-lg">
              <span className="text-cyan-400 font-bold">99.9%</span> Uptime
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-800 border border-cyan-500/20 p-4 rounded-lg hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Cloud className="text-cyan-400" size={24} />
              <h3 className="font-bold text-xl font-heading">Cloud Architecture</h3>
            </div>
            <p className="text-gray-400">Designing scalable and resilient cloud solutions</p>
          </div>
          <div className="bg-gray-800 border border-cyan-500/20 p-4 rounded-lg hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Container className="text-cyan-400" size={24} />
              <h3 className="font-bold text-xl font-heading">Container Orchestration</h3>
            </div>
            <p className="text-gray-400">Expert in Kubernetes and Docker ecosystem</p>
          </div>
          <div className="bg-gray-800 border border-cyan-500/20 p-4 rounded-lg hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="text-cyan-400" size={24} />
              <h3 className="font-bold text-xl font-heading">CI/CD Pipelines</h3>
            </div>
            <p className="text-gray-400">Automating deployment and delivery processes</p>
          </div>
        </div>
      </div>
    </section>
  );
}