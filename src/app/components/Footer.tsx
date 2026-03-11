import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Ankit Rathod</h3>
            <p className="text-[#80DEEA] mb-4">Data Engineer</p>
            <p className="text-gray-400 text-sm">
              © 2026 Ankit Rathod. All rights reserved.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/ankit-rathod-27a631233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#00BCD4] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ankit-1301?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#00BCD4] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:asr95128@gmail.com"
                className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#00BCD4] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="text-red-500" size={14} fill="currentColor" /> and lots of data
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>Building the future, one pipeline at a time.</p>
        </div>
      </div>
    </footer>
  );
}