"use client";

import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";
import CompareProgressBar from "./CompareProgressBar";
import { reportData } from "@/data/report";

interface SeniorReportViewProps {
  onBack: () => void;
}

export default function SeniorReportView({ onBack }: SeniorReportViewProps) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 1 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[60] bg-[#F5F6F8] overflow-y-auto"
    >
      {/* 헤더 */}
      <div className="sticky top-0 bg-[#D2E0FB]/60 backdrop-blur-md px-4 pt-4 pb-3 flex items-center z-10 border-b border-[#D2E0FB]/40">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors mr-3"
        >
          <ArrowLeft size={20} className="text-[#3D4149]" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#3D4149]">
          선배 리포트
        </h1>
      </div>

      <div className="px-5 py-5 space-y-4 pb-12">
        {/* 1. 상단 3-Grid 카드 (한 화면에 모두 들어오도록 크기 축소) */}
        <div className="w-full flex gap-2 pb-2">
          {/* 회복 기간 */}
          <div className="flex-1 bg-white rounded-[16px] p-3 shadow-sm min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#A9ADB6] mb-0.5 tracking-tight">회복 기간</p>
            <p className="text-[15px] sm:text-[17px] font-semibold text-[#3D4149] mb-1">8개월</p>
            <p className="text-[9px] sm:text-[10px] text-[#A9ADB6] whitespace-nowrap overflow-hidden text-ellipsis tracking-tight">꾸준히 작은 것부터</p>
          </div>
          {/* 가장 힘든 축 */}
          <div className="flex-1 bg-white rounded-[16px] p-3 shadow-sm min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#A9ADB6] mb-0.5 tracking-tight">가장 힘든 축</p>
            <p className="text-[15px] sm:text-[17px] font-semibold text-[#D2B48C] mb-1">경제</p>
            <p className="text-[9px] sm:text-[10px] text-[#A9ADB6] whitespace-nowrap overflow-hidden text-ellipsis tracking-tight">통장 공포 → 극복</p>
          </div>
          {/* 첫 미션 */}
          <div className="flex-1 bg-white rounded-[16px] p-3 shadow-sm min-w-0">
            <p className="text-[10px] sm:text-[11px] text-[#A9ADB6] mb-0.5 tracking-tight">첫 미션</p>
            <p className="text-[15px] sm:text-[17px] font-semibold text-[#3D4149] mb-1">물 한 잔</p>
            <p className="text-[9px] sm:text-[10px] text-[#A9ADB6] whitespace-nowrap overflow-hidden text-ellipsis tracking-tight">Lv.1에서 시작</p>
          </div>
        </div>

        {/* 2. 비교 프로그레스 바 영역 */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D1D3D8]" />
              <span className="text-[12px] text-[#7D828C]">슬럼프 당시</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8EACCD]" />
              <span className="text-[12px] text-[#7D828C]">현재</span>
            </div>
          </div>

          <div>
            {reportData.seniorStats.map((stat, idx) => (
              <CompareProgressBar key={idx} {...stat} />
            ))}
          </div>
        </div>

        {/* 3. 회복 타임라인 */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <RotateCcw size={16} className="text-[#8EACCD]" />
            <h2 className="text-[15px] font-semibold text-[#5A5E67]">회복 타임라인</h2>
          </div>

          <div className="relative border-l-2 border-[#ECEDF0] ml-3 mt-4">
            {reportData.timeline.map((item, idx) => (
              <div key={idx} className="mb-8 pl-6 relative">
                {/* 둥근 마커 */}
                <span className={`absolute w-3.5 h-3.5 rounded-full -left-[9px] top-1 ${item.dotClass} border-2 border-white`} />
                
                {/* 날짜 & 제목 */}
                <p className="text-[12px] text-[#A9ADB6]">{item.date}</p>
                <p className="text-[15px] font-semibold text-[#3D4149] mt-0.5 mb-2">{item.title}</p>
                
                {/* 컬러 보더 말풍선 */}
                <div className={`bg-[#F5F6F8] rounded-[12px] rounded-tl-none p-3.5 border-l-4 ${item.colorClass}`}>
                  <p className="text-[#5A5E67] text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
