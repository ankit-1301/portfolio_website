import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Workflow, Database, Cloud, Code, Activity } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Workflow,
      category: 'Data Engineering & Orchestration',
      skills: [
        'ETL/ELT',
        'Apache Airflow',
        'Data Modeling (3NF, Star Schema)',
        'Data Warehousing',
        'Batch Processing',
        'Data Quality Validation',
      ],
      color: '#00BCD4',
    },
    {
      icon: Database,
      category: 'Databases & Storage',
      skills: [
        'PostgreSQL',
        'Aurora PostgreSQL',
        'Snowflake',
        'MySQL',
        'Oracle',
        'Redis',
      ],
      color: '#4DD0E1',
    },
    {
      icon: Cloud,
      category: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, RDS)',
        'AWS Lambda',
        'CloudFront',
        'WAF & GuardDuty',
        'Azure Data Factory',
        'Docker',
        'CI/CD',
        'Kubernetes',
      ],
      color: '#00BCD4',
    },
    {
      icon: Code,
      category: 'Programming & Tools',
      skills: [
        'Python (Pandas, NumPy)',
        'SQL',
        'Node.js',
        'Express',
        'Git/GitHub',
        'Jupyter',
        'VS Code',
      ],
      color: '#4DD0E1',
    },
    {
      icon: Activity,
      category: 'Data Streaming & Analytics',
      skills: ['Kafka', 'Apache Spark', 'Power BI', 'Data Visualization'],
      color: '#00BCD4',
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
