// src/components/chat/ChatHeader.tsx
"use client";

import DoodyCharacter from "@/components/ui/DoodyCharacter";

export default function ChatHeader() {
  return (
    <div className="bg-[#D2E0FB] px-5 pt-6 pb-5">
      <div className="flex items-center gap-3">
        {/* src 속성을 통해 챗봇 전용 이미지 전달 */}
        <DoodyCharacter size={48} src="/chatDoody.svg" />
        <div>
          <h2 className="text-[18px] font-semibold text-[#3D4149] leading-tight">
            두디
          </h2>
          <p className="text-[13px] text-[#4A6B8A] font-normal mt-0.5">
            오늘도 여기 있어요
          </p>
        </div>
      </div>
    </div>
  );
}