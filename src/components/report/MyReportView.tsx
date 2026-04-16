// src/components/report/MyReportView.tsx
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ProgressBar from "./ProgressBar";
import { reportData } from "@/data/report";

interface MyReportViewProps {
  onViewSenior: () => void;
}

export default function MyReportView({ onViewSenior }: MyReportViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* 헤더 - 배경색 단색(#D2E0FB)으로 변경 */}
      <div className="bg-[#D2E0FB] px-6 pt-5 pb-6">
        <h1 className="text-[22px] font-semibold text-[#3D4149] leading-tight">
          닉네임 회복 리포트
        </h1>
        <p className="text-[14px] text-[#4A6B8A] font-normal mt-1">
          두디와 대화가 쌓일수록 그려져요
        </p>
      </div>

      <div className="px-6 space-y-4 mt-3">
        {/* 1. 이번 주 회복 현황 */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-white/50 relative z-10">
          <h2 className="text-[13px] font-semibold text-[#6B7280] mb-3">
            이번 주 회복 현황
          </h2>
          <div className="mb-5">
            <p className="text-[16px] text-[#3D4149] font-medium">조금씩 나아지고 있어요 🌱</p>
            <p className="text-[15px] text-[#4A6B8A] mt-0.5">
              저번주보다 <span className="font-semibold text-[#8EACCD]">경제가 8%</span> 나아졌어요.
            </p>
          </div>
          
          <div className="space-y-1">
            {reportData.myStats.map((stat, idx) => (
              <ProgressBar key={idx} {...stat} />
            ))}
          </div>
        </div>

        {/* 2. ARI 맞춤 추천 */}
        <div className="bg-[#FEF9D9] rounded-[24px] p-4 shadow-sm">
          <h2 className="text-[13px] font-semibold text-[#D2B48C] mb-2">
            ARI 맞춤 추천
          </h2>
          <p className="text-[16px] text-[#3D4149] font-medium leading-snug">
            오늘 마음이 좀 무거운 것 같아요.
          </p>
          <p className="text-[14px] text-[#B89C71] mt-1 mb-5">
            오늘은 미션 대신 두디랑 얘기해볼까요?
          </p>
          <Button
            className="w-full bg-[#1e1e24] hover:bg-[#2d2d36] text-white "
            onClick={() => {}}
          >
            두디와 대화하기
          </Button>
        </div>

        {/* 3. 선배 매칭 */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-white/50">
          <h2 className="text-[13px] font-semibold text-[#6B7280] mb-3">
            선배 매칭
          </h2>
          
          <div className="bg-[#ffebee] rounded-[16px] p-3 mb-5">
             <p className="text-[#d86c74] text-[15px] font-medium leading-relaxed">
              나만 이런 게 아니야.<br/>통장 보는 것도 무서웠던 선배가 있어.
             </p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-[#D2E0FB] rounded-full flex items-center justify-center text-[#8EACCD]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[#3D4149] font-semibold text-[15px]">{reportData.seniorProfile.nickname}</p>
              <p className="text-[#A9ADB6] text-[13px]">가장 힘들었던 축: {reportData.seniorProfile.hardest}</p>
            </div>
          </div>

          <div className="bg-[#F5F6F8] rounded-[16px] p-4.5 mb-4">
            <p className="text-[#6B7280] text-[14px] leading-relaxed whitespace-pre-line">
              {reportData.seniorProfile.message}
            </p>
          </div>

          <div className="flex gap-2 mb-5">
            {reportData.seniorProfile.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#D2E0FB] text-[#2E5F8A] text-[13px] px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          <Button
            className="w-full py-3.5 text-[15px]"
            onClick={onViewSenior}
          >
            선배 이야기 더 보기
          </Button>
        </div>
      </div>
    </motion.div>
  );
}