import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Code, GraduationCap, CheckCircle } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      icon: Building2,
      position: 'Data Science Specialist',
      company: 'DAE Inc.',
      location: 'Connecticut, USA',
      period: 'Sep 2024 – Present',
      highlights: [
        'Architected dual-platform educational technology infrastructure',
        'Designed enterprise-scale database architecture achieving 40% query performance improvement',
        'Deployed production AWS infrastructure with 99.9% uptime',
        'Implemented FERPA-compliant data governance framework',
      ],
    },
    {
      icon: Code,
      position: 'Software Engineer',
      company: 'Tata Consultancy Services',
      location: 'India',
      period: 'Jul 2021 – Dec 2022',
      highlights: [
        'Designed relational data models for 15+ enterprise clients',
        'Built data migration pipelines processing 10M+ records with 99.8% accuracy',
        'Developed automated workflows using Apache Airflow reducing manual intervention by 40%',
        'Created Power BI dashboards serving 50+ stakeholders',
      ],
    },
    {
      icon: GraduationCap,
      position: 'Teaching/Learning Assistant – AI & Data Science',
      company: 'University of New Haven',
      location: 'Connecticut, USA',
      period: 'Aug 2023 – Dec 2024',
      highlights: [
        'Supported 60+ graduate students with data engineering projects',
        'Utilized Python, SQL, and cloud technologies for academic program improvements',
        'Mentored students on best practices in data pipeline development',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/5 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BCD4] via-[#4DD0E1] to-[#00BCD4]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-[#00BCD4] flex items-center justify-center shadow-lg z-10">
                  <exp.icon className="text-[#00BCD4]" size={28} />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  } md:w-1/2`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-[#00BCD4]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-[#00BCD4] font-semibold mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-1">{exp.position}</h3>
                    <div className="text-lg text-[#1E3A5F] mb-4">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#212121]">
                          <CheckCircle
                            className="text-[#00BCD4] flex-shrink-0 mt-0.5"
                            size={18}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}