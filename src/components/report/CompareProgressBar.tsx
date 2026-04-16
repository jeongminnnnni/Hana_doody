"use client";

import { motion } from "framer-motion";

interface CompareProgressBarProps {
  label: string;
  past: number;
  current: number;
  color: string;
}

export default function CompareProgressBar({
  label,
  past,
  current,
  color,
}: CompareProgressBarProps) {
  return (
    <div className="flex items-start gap-4 mb-5">
      <span className="w-8 mt-1 text-[13px] text-[#7D828C] font-semibold">{label}</span>
      
      <div className="flex-1 flex flex-col gap-2 relative top-1">
        {/* 과거(슬럼프 당시) 바 - 얇게 */}
        <div className="w-full h-[8px] bg-[#F5F6F8] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${past}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-[#D1D3D8] rounded-full"
          />
        </div>

        {/* 현재 바 - 두껍게 */}
        <div className="w-full h-[12px] bg-[#F5F6F8] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${current}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`h-full ${color} rounded-full`}
          />
        </div>
      </div>
      
      <span className="w-8 mt-1 text-right text-[13px] text-[#A9ADB6]">{current}%</span>
    </div>
  );
}
