import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, X, Download } from 'lucide-react';

export function ChatbotWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Auto-open chatbot after 3 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const chatActions = [
    {
      icon: Mail,
      label: 'Send Email',
      emoji: '📧',
      action: () => window.location.href = 'mailto:Devanshi.jtandel@gmail.com',
    },
    {
      icon: Phone,
      label: 'Call Me',
      emoji: '📞',
      action: () => window.location.href = 'tel:+17328221603',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      emoji: '💼',
      action: () => window.open('https://www.linkedin.com/in/devanshi-tandel-a96607184/', '_blank'),
    },
    {
      icon: Github,
      label: 'GitHub',
      emoji: '💻',
      action: () => window.open('https://github.com/devtandel24?tab=repositories', '_blank'),
    },
    {
      icon: Download,
      label: 'Download Resume',
      emoji: '📄',
      action: () => {
        // Placeholder for resume download
        alert('Resume download would start here. Please provide the resume PDF file.');
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isChatOpen ? (
        <motion.div
          className="bg-white rounded-lg shadow-2xl w-80 max-h-[500px] flex flex-col"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00BCD4] to-[#4DD0E1] p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-white" size={24} />
              <div>
                <div className="text-white font-semibold">
                  Connect with Devanshi
                </div>
                <div className="text-white/80 text-xs">How can I help?</div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="mb-4 p-3 bg-[#F5F5F5] rounded-lg">
              <p className="text-sm text-[#212121]">
                Hi! I'm here to help you connect with Devanshi. How would you like to reach out?
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              {chatActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-[#00BCD4] hover:bg-[#00BCD4]/5 transition-all duration-200 text-left"
                >
                  <span className="text-2xl">{action.emoji}</span>
                  <span className="text-[#212121] font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 text-center">
            <p className="text-xs text-[#9E9E9E]">Response time: Within 24 hours</p>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-[#00BCD4] to-[#4DD0E1] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="text-white" size={28} />
        </motion.button>
      )}
    </div>
  );
}
