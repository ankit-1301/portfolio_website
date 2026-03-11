import React from 'react';
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
      position: 'Data Engineer',
      company: 'Bizviz Technologies (BDB.ai)',
      location: 'Bengaluru, India',
      period: 'Nov 2024 – Present',
      highlights: [
        'Engineered 12+ production ETL/ELT pipelines on AWS S3 and Snowflake processing 2–5M records/day',
        'Architected Medallion Architecture (Bronze/Silver/Gold) on Databricks Delta Lake with Star Schema and SCD Type 2 modeling',
        'Optimized warehouse performance using partitioning and incremental loads improving query performance by 50–60%',
        'Automated workflows with Airflow DAGs and dbt data quality tests enabling reliable analytics datasets',
      ],
    },
    {
      icon: Code,
      position: 'Data Service Engineer Intern',
      company: 'Windowmaker',
      location: 'Vadodara, India',
      period: 'Jan 2024 – Mar 2024',
      highlights: [
        'Extracted and validated 100K+ records using SQL improving reporting accuracy',
        'Developed Python-based data quality validation scripts for reconciliation processes',
        'Improved data reliability by implementing automated validation checks and anomaly detection',
        'Collaborated with business teams to streamline reporting and analytics workflows',
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