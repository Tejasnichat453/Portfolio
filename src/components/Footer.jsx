import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20 py-8 text-center">
      <p className="text-gray-400 font-heading">
        <span className="text-cyan-400">$ echo</span> "&copy; 2025 DevOps Engineer. All rights reserved."
      </p>
      <p className="text-gray-500 text-sm mt-2">Built with React + Tailwind CSS | Deployed on Vercel</p>
    </footer>
  );
}