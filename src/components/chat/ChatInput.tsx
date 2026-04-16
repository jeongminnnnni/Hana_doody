"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-transparent px-4 py-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="오늘 하루는 어떠셨나요?"
          disabled={disabled}
          className="flex-1 bg-white text-[#3D4149] text-[15px] font-normal
                     placeholder:text-[#A9ADB6] rounded-full px-5 py-3
                     border border-[#ECEDF0] shadow-sm outline-none
                     focus:border-[#8EACCD] transition-colors duration-200
                     disabled:opacity-50"
        />
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleSend}
          disabled={disabled || !text.trim()}
          className="w-11 h-11 flex items-center justify-center
                     bg-[#8EACCD] rounded-full shadow-sm
                     disabled:opacity-40 cursor-pointer
                     transition-opacity duration-200"
        >
          <Send size={18} className="text-white ml-0.5" />
        </motion.button>
      </div>
    </div>
  );
}