import React, { useState, useEffect } from 'react';
import { ChatWindow } from './components/ChatWindow';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-studio-text">
      {/* Launch Button & Bubble */}
      {!isOpen && (
        <>
          {/* Greeting Bubble */}
          {showBubble && (
            <div className="fixed bottom-24 right-8 z-50 animate-bounce transition-transform duration-1000">
               <div className="bg-[#F5EFE6] text-[#131313] px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border border-[#131313]/10 relative max-w-[200px]">
                  <p className="text-sm font-medium leading-tight">Hi, I'm your AI assistant, ask me anything</p>
               </div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#131313] text-[#F5EFE6] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center z-50 group border border-[#F5EFE6]/10"
            aria-label="Open Rise & Render Assistant"
          >
            <span className="text-3xl font-bold group-hover:rotate-12 transition-transform">
              R
            </span>
            {/* Pulse Effect */}
            <span className="absolute -inset-1 rounded-full bg-[#F5EFE6] opacity-10 animate-pulse-slow"></span>
          </button>
        </>
      )}

      {/* The Chat Widget */}
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
      {/* Background Overlay (Optional, for mobile mainly) */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default App;