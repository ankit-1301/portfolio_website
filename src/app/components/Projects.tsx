import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { LineChart, Radar, ShoppingCart, Plane, CheckCircle, ExternalLink } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      icon: LineChart,
      title: 'EOD Securities Pricing Data Pipeline',
      description:
        'Automated end-of-day pricing ingestion pipeline for U.S. equities and ETFs using AWS, Snowflake, Airflow, and dbt delivering analytics-ready datasets with 50%+ query performance improvement.',
      techStack: ['AWS S3', 'Snowflake', 'Apache Airflow', 'dbt', 'Python', 'Power BI'],
      features: [
        'Automated API ingestion pipeline storing raw market data in AWS S3 data lake',
        'Airflow DAG orchestration with scheduling, retry logic, and pipeline monitoring',
        'dbt incremental fact and dimension models with automated data quality tests',
        'Snowflake warehouse optimization improving analytical query performance by 50%+',
      ],
    },
    {
      icon: Radar,
      title: 'Real-Time IoT Fleet Analytics Platform',
      description:
        'Real-time streaming analytics platform processing IoT fleet telemetry using Kafka and Apache Flink with anomaly detection triggering alerts within 5 seconds.',
      techStack: [
        'Apache Kafka',
        'Apache Flink',
        'Azure Data Lake',
        'Azure Functions',
        'Synapse Analytics',
        'Twilio',
      ],
      features: [
        'Kafka streaming pipeline ingesting real-time vehicle telemetry data',
        'Apache Flink stream processing detecting anomalies such as overspeeding and fuel drops',
        'Azure Functions triggering automated SMS and call alerts via Twilio within seconds',
        'Cold-path analytics with Synapse fact/dimension models powering BI dashboards',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'ShopVista E-Commerce Data Platform',
      description:
        'Modern data lakehouse built on Azure Databricks using PySpark and Medallion Architecture to process large-scale e-commerce datasets for analytics and BI.',
      techStack: [
        'Azure Databricks',
        'PySpark',
        'ADLS Gen2',
        'Delta Lake',
        'Docker',
        'Power BI',
      ],
      features: [
        'Implemented Bronze, Silver, and Gold Medallion pipelines using PySpark',
        'Built scalable data transformations with schema validation and deduplication',
        'Published Star Schema gold tables optimized for BI reporting',
        'Containerized workflows using Docker enabling reproducible deployments',
      ],
    },
    {
      icon: Plane,
      title: 'Travel Booking Data Platform',
      description:
        'Data platform transforming travel booking and payment datasets into analytics-ready models using dimensional modeling and machine learning.',
      techStack: ['Python', 'SQL', 'Databricks', 'Delta Lake', 'XGBoost', 'Scikit-learn'],
      features: [
        'Designed Bronze → Silver → Gold Medallion pipelines for booking and payment data',
        'Implemented Star Schema and SCD Type 2 dimensional models for revenue analytics',
        'Engineered ML-ready features for customer behavior analysis',
        'Trained XGBoost model for revenue prediction and customer segmentation',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-[#0A1628] overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00BCD4] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#4DD0E1] rounded-lg flex items-center justify-center mb-6">
                <project.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#00BCD4]/20 text-[#4DD0E1] text-sm rounded-full border border-[#00BCD4]/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                    <CheckCircle className="text-[#00BCD4] flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Details Button */}
              {/* <button className="flex items-center gap-2 px-6 py-3 bg-[#00BCD4] text-white font-semibold rounded-lg hover:bg-[#4DD0E1] transition-all duration-300 hover:shadow-lg group">
                View Details
                <ExternalLink
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
