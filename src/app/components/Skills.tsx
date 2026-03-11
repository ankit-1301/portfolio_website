import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Workflow, Layers, Database, Code2, CloudCog, Radio } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Workflow,
      category: 'Data Pipeline Engineering',
      skills: [
        'ETL / ELT Pipeline Development',
        'Apache Airflow',
        'dbt (Data Build Tool)',
        'Batch & Incremental Processing',
        'Data Quality Validation',
        'API Data Ingestion',
      ],
      color: '#00BCD4',
    },
    {
      icon: Layers,
      category: 'Data Architecture & Modeling',
      skills: [
        'Medallion Architecture',
        'Data Lakehouse Design',
        'Star Schema',
        'SCD Type 2',
        'Dimensional Modeling',
        'Data Warehousing',
      ],
      color: '#4DD0E1',
    },
    {
      icon: Database,
      category: 'Data Platforms & Storage',
      skills: [
        'Snowflake',
        'Databricks',
        'Delta Lake',
        'AWS S3 Data Lake',
        'PostgreSQL',
        'MongoDB',
      ],
      color: '#00BCD4',
    },
    {
      icon: Code2,
      category: 'Programming & Data Processing',
      skills: [
        'Python',
        'SQL',
        'PySpark',
        'Pandas',
        'NumPy',
        'Object-Oriented Programming',
      ],
      color: '#4DD0E1',
    },
    {
      icon: CloudCog,
      category: 'Cloud & Infrastructure',
      skills: [
        'AWS (S3, Lambda, IAM)',
        'Azure (ADLS Gen2, Synapse)',
        'Docker',
        'CI/CD Pipelines',
        'Git & GitHub',
      ],
      color: '#00BCD4',
    },
    {
      icon: Radio,
      category: 'Streaming & Analytics',
      skills: [
        'Apache Kafka',
        'Apache Flink',
        'Event-Driven Architecture',
        'Power BI',
        'Real-Time Data Processing',
      ],
      color: '#4DD0E1',
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-[#F5F5F5] overflow-hidden">
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10,10 L30,10 L30,30 M70,10 L90,10 L90,30 M10,70 L30,70 L30,90 M70,70 L90,70 L90,90"
                stroke="#0A1628"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="10" cy="10" r="2" fill="#00BCD4" />
              <circle cx="90" cy="10" r="2" fill="#00BCD4" />
              <circle cx="10" cy="90" r="2" fill="#00BCD4" />
              <circle cx="90" cy="90" r="2" fill="#00BCD4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
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
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <category.icon style={{ color: category.color }} size={28} />
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-[#0A1628] mb-4">{category.category}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white text-[#212121] text-sm rounded-md border border-gray-200 hover:border-[#00BCD4] hover:shadow-md transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
