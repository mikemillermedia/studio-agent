import React, { useState } from 'react';
import { ChatWindow } from './components/ChatWindow';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
// Add this to resize the iframe automatically
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({ type: 'resize', isOpen: isOpen }, '*');
    }
  }, [isOpen]);

  return (
    <div className="font-sans antialiased text-studio-text">
      {/* Launch Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-studio-accent text-white rounded-full shadow-lg hover:bg-indigo-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Open Studio Assistant"
        >
          <span className="text-3xl font-bold group-hover:rotate-12 transition-transform">
            R
          </span>
          {/* Pulse Effect */}
          <span className="absolute -inset-1 rounded-full bg-studio-accent opacity-30 animate-pulse-slow"></span>
        </button>
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