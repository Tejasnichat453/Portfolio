import React from 'react';
import { Activity, Download, FileText } from 'lucide-react';

export default function Experience({ isVisible }) {
  const experiences = [
    {
      title: 'junior DevOps Engineer -Skillmine',
      period: '2021 - Present',
      responsibilities: [
        'Led migration of monolithic applications to microservices architecture using Kubernetes',
        'Implemented GitOps workflows with ArgoCD, reducing deployment time by 60%',
        'Automated infrastructure provisioning using Terraform and AWS CloudFormation',
        'Established monitoring and alerting with Prometheus, Grafana, and ELK stack'
      ]
    },
    {
      title: 'DevOps Engineer - Cloud Solutions Inc',
      period: '2019 - 2021',
      responsibilities: [
        'Built and maintained CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions',
        'Containerized legacy applications and deployed them on AWS ECS and EKS',
        'Managed multi-cloud infrastructure across AWS, Azure, and GCP'
      ]
    },
    
  ];

  return (
    <section
      id="experience"
      className={`mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-cyan-500/20 transition-all duration-1000 ${
        isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-5xl font-bold mb-6 text-cyan-400 border-b-4 border-cyan-400 pb-2 inline-block font-heading flex items-center gap-3">
        <Activity /> Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="border-l-4 border-cyan-400 pl-6 hover:border-purple-400 transition-colors duration-300 bg-gray-800/50 p-6 rounded-r-xl"
          >
            <h4 className="text-2xl font-bold text-white font-heading">{exp.title}</h4>
            <p className="text-cyan-400 italic mb-3 font-semibold">{exp.period}</p>
            <ul className="text-gray-300 space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap mt-8">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading glow-effect">
          <Download size={20} /> Download Full Resume
        </button>
        <button
          onClick={() => window.print()}
          className="bg-gray-800 border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 font-heading hover:bg-cyan-500/10"
        >
          <FileText size={20} /> Print Resume
        </button>
      </div>
    </section>
  );
}