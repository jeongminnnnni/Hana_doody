"use client";

import DoodyCharacter from "@/components/ui/DoodyCharacter";

export default function ChatHeader() {
  return (
    <div className="bg-gradient-to-b from-[#D2E0FB]/60 to-[#F5F6F8] px-5 pt-6 pb-5">
      <div className="flex items-center gap-3">
        <DoodyCharacter size={48} />
        <div>
          <h2 className="text-[18px] font-semibold text-[#3D4149] leading-tight">
            두디
          </h2>
          <p className="text-[13px] text-[#A9ADB6] font-normal mt-0.5">
            오늘도 여기 있어요
          </p>
        </div>
      </div>
    </div>
  );
}
