
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode from the website
  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);
  }, []);

  return (
    <div>
      {/* 🔴 Chatbot Toggle Button (Adapts to Dark/Light Mode) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors 
          ${isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-red-600 text-white hover:bg-red-700"}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* 💬 Chatbot Window (Only Visible When Open) */}
      {isOpen && (
        <div
          className={`fixed bottom-20 right-6 w-80 h-96 rounded-2xl shadow-xl border
            ${isDarkMode ? "bg-black text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
          style={{ zIndex: 1000 }}
        >
          {/* 🤖 Chatbase AI Assistant (No Extra UI Elements) */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/vfpIr3Zpp2gNsMTmk_jX2"
            width="100%"
            height="100%"
            className="border-none rounded-2xl"
            allow="microphone"
          ></iframe>
        </div>
      )}
    </div>
  );
};
