"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ChatBubbleProps {
  sender: "doody" | "user";
  content: string;
}

export default function ChatBubble({ sender, content }: ChatBubbleProps) {
  const isDoody = sender === "doody";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-end gap-2 ${isDoody ? "justify-start" : "justify-end"}`}
    >
      {/* 두디 아바타 */}
      {isDoody && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/chatting.svg"
            alt="두디"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 말풍선 */}
      <div
        className={`max-w-[70%] px-4 py-2.5 text-[15px] leading-relaxed ${
          isDoody
            ? "bg-white text-[#3D4149] rounded-2xl rounded-bl-md shadow-sm"
            : "bg-[#DEE5D4] text-[#3D4149] rounded-2xl rounded-br-md"
        }`}
      >
        {content}
      </div>
    </motion.div>
  );
}
