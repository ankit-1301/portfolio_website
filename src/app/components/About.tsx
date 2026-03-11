import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 bg-[#F5F5F5] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#0A1628" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#00BCD4] mb-6" />
            <p className="text-lg text-[#212121] leading-relaxed mb-6">
              Data Engineer specializing in building scalable ETL/ELT pipelines and modern
              data platforms on AWS, Databricks, and Snowflake. Experienced in designing
              Medallion Architecture data lakes, implementing Star Schema and SCD Type 2
              models, and processing high-volume datasets ranging from millions of records
              per day.
            </p>
            <p className="text-lg text-[#212121] leading-relaxed mb-6">
              Currently working as a Data Engineer at Bizviz Technologies, where I build
              production-grade data pipelines, optimize warehouse performance, and enable
              analytics teams with reliable, ML-ready datasets. Passionate about solving
              complex data problems, improving query performance, and building scalable
              data infrastructure that powers business decisions.
            </p>
            <div className="flex items-center gap-2 text-[#00BCD4] font-semibold">
              <div className="w-2 h-2 bg-[#00BCD4] rounded-full animate-pulse" />
              Currently based in Bangalore, India | Willing to relocate anywhere
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}