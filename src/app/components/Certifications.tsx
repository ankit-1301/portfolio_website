import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Data Engineering Basics for Data Analysts',
      issuer: 'Codebasics',
      issued: 'Feb 2026',
      credentialId: 'CB-103-216597',
      url: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcodebasics.io%2Fcertificate%2FCB-103-216597&urlhash=8HNc&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByQNBPAm2RIWIYnkRHK3n5g%3D%3D',
      description: 'Core data engineering concepts and foundational pipeline patterns',
    },
    {
      title: 'Python: Beginner to Advanced For Data Professionals',
      issuer: 'Codebasics',
      issued: 'Feb 2026',
      credentialId: 'CB-48-216597',
      url: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcodebasics.io%2Fcertificate%2FCB-48-216597&urlhash=EXST&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByQNBPAm2RIWIYnkRHK3n5g%3D%3D',
      description: 'Python proficiency for data workflows, analysis, and automation',
    },
    {
      title: 'SQL Beginner to Advanced For Data Professionals',
      issuer: 'Codebasics',
      issued: 'Jan 2026',
      credentialId: 'CB-50-216597',
      url: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fcodebasics.io%2Fcertificate%2FCB-50-216597&urlhash=8vDZ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BTgCz7g7aSUmOkSJ7pHI%2F1g%3D%3D',
      description: 'SQL skills for querying, modeling, and analytics at scale',
    },
  ];

  return (
    <section id="certifications" className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cert-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A1628" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cert-grid)" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto mb-6" />
          <p className="text-lg text-[#212121] max-w-2xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-[#F5F5F5] p-6 rounded-lg shadow-lg border border-[#00BCD4]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center">
                  <Award className="text-[#00BCD4]" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-2">{cert.title}</h3>
                  <p className="text-[#1E3A5F] font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-[#212121] text-sm opacity-80 mb-3">
                    Issued {cert.issued} • Credential ID {cert.credentialId}
                  </p>
                  <p className="text-[#212121] text-sm flex items-start gap-2">
                    <CheckCircle className="text-[#00BCD4] flex-shrink-0 mt-0.5" size={16} />
                    <span>{cert.description}</span>
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[#00BCD4] font-semibold hover:text-[#4DD0E1] transition-colors group"
                  >
                    <span>View / Download Certificate</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
