"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
}

export default function ProgressBar({ label, value, color }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-8 text-[13px] text-[#7D828C] font-semibold">{label}</span>
      <div className="flex-1 h-[14px] bg-[#F5F6F8] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
      <span className="w-8 text-right text-[13px] text-[#A9ADB6]">{value}%</span>
    </div>
  );
}
