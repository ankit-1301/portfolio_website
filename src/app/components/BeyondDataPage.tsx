import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Palette, Plane, Sparkles, ArrowLeft } from 'lucide-react';

export function BeyondDataPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (!audioRef.current) {
      // Create audio element - you can replace this with your actual audio file
      audioRef.current = new Audio('/path-to-your-audio.mp3');
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed:', error);
        // If no audio file is available, just show the animation
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 5000);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#4A148C] overflow-hidden">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-[#00BCD4]/30 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>
      </div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Beyond the Data</h1>
          <p className="text-xl text-[#80DEEA]">
            Life's too short to just code - here's what makes me, me!
          </p>
          <div className="w-20 h-1 bg-[#00BCD4] mx-auto mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Dance */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                <span className="text-4xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bharatanatyam Dancer</h3>
              <p className="text-gray-200">
                Diploma holder in classical Indian dance. Grace, discipline, and storytelling through
                movement.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#FFD700] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Singing - Interactive with Enhanced Animation */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              {/* Animated Singing Character */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                {/* Main singing emoji/cartoon */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#C44569] rounded-full flex items-center justify-center"
                  animate={
                    isPlaying
                      ? {
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
                >
                  <motion.span 
                    className="text-6xl"
                    animate={
                      isPlaying
                        ? {
                            rotate: [-5, 5, -5],
                          }
                        : {}
                    }
                    transition={{ duration: 0.3, repeat: isPlaying ? Infinity : 0 }}
                  >
                    🎤
                  </motion.span>
                </motion.div>
                
                {/* Enhanced Music Notes Animation */}
                {isPlaying && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                        animate={{
                          x: [0, (Math.cos(i * 60 * Math.PI / 180) * 80)],
                          y: [0, (Math.sin(i * 60 * Math.PI / 180) * 80) - 40],
                          opacity: [1, 0.8, 0],
                          scale: [0, 1, 0.8],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut",
                        }}
                      >
                        {i % 3 === 0 ? '🎵' : i % 3 === 1 ? '🎶' : '♪'}
                      </motion.div>
                    ))}
                  </>
                )}

                {/* Pulsing ring effect when playing */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 border-4 border-[#FF6B9D] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Melody Maker</h3>
              <p className="text-gray-200 mb-4">
                Music is my escape. Hit play to hear my voice!
              </p>
              <button
                onClick={handlePlayAudio}
                className="flex items-center gap-2 px-6 py-3 bg-[#FF6B9D] text-white font-semibold rounded-lg hover:bg-[#C44569] transition-all duration-300 mx-auto shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Music size={20} />
                {isPlaying ? 'Pause' : 'Play Audio'}
              </button>
            </div>
          </motion.div>

          {/* Card 3: Drawing & Art */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#00BCD4] to-[#4DD0E1] rounded-full flex items-center justify-center">
                <Palette className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Creative Canvas</h3>
              <p className="text-gray-200 mb-4">
                From data visualizations to doodles - I love bringing ideas to life.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1_VZ2lbC-X1AAx8IugADI252_stdEhf0p?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BCD4] text-white font-semibold rounded-lg hover:bg-[#4DD0E1] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                🎨 View My Gallery
              </a>
            </div>
          </motion.div>

          {/* Card 4: Travel */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-[#00BCD4]/30 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#4DD0E1] to-[#00BCD4] rounded-full flex items-center justify-center">
                <Plane className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Wanderlust Explorer</h3>
              <p className="text-gray-200 mb-4">
                Collecting memories from around the world, one destination at a time.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1W1qXhecSA6WEhUb6UuYYoAFNaNkg_d4B?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4DD0E1] text-white font-semibold rounded-lg hover:bg-[#00BCD4] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                ✈️ See My Adventures
              </a>
            </div>
          </motion.div>
        </div>

        {/* Fun Fact Box */}
        <motion.div
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg border border-[#00BCD4]/30 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 text-white">
            <span className="text-4xl">🦕</span>
            <p className="text-lg">
              <span className="font-bold text-[#00BCD4]">Fun Fact:</span> I'm fascinated by
              dinosaurs - creatures that don't exist anymore but still capture imagination. Kind of
              like legacy code, but cooler!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
