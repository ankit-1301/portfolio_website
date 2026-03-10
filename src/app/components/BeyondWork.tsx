import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export function BeyondWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section
      id="beyond-work"
      className="relative py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#4A148C] overflow-hidden"
    >
      {/* Playful Background Patterns */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Sparkles className="text-[#00BCD4] opacity-20" size={20} />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Beyond the Data</h2>
          <p className="text-xl text-[#80DEEA] mb-8">
            Life's too short to just code - curious about what makes me tick?
          </p>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto mb-12" />

          {/* Large Interactive Card */}
          <motion.div
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-12 rounded-2xl border-2 border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => navigate('/beyond-data')}
          >
            <div className="text-center">
              {/* Icon Grid */}
              <div className="flex justify-center gap-6 mb-8">
                <motion.span
                  className="text-6xl"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                  }}
                >
                  🎭
                </motion.span>
                <motion.span
                  className="text-6xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  🎤
                </motion.span>
                <motion.span
                  className="text-6xl"
                  animate={{
                    rotate: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                >
                  🎨
                </motion.span>
                <motion.span
                  className="text-6xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                >
                  ✈️
                </motion.span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover My Creative Side
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                From Bharatanatyam dancing to singing, art, and travel adventures - explore the
                creative passions that fuel my life beyond code!
              </p>

              <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#00BCD4] text-white font-semibold rounded-lg hover:bg-[#4DD0E1] transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                Explore Beyond the Data
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
            </div>
          </motion.div>

          {/* Fun Fact Teaser */}
          <motion.div
            className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-lg border border-[#00BCD4]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="text-3xl">🦕</span>
              <p className="text-sm">
                <span className="font-bold text-[#00BCD4]">Hint:</span> I'm fascinated by
                dinosaurs... click to find out why!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
