"use client";

import { motion } from "framer-motion";
import DoodyCharacter from "@/components/ui/DoodyCharacter";
import Badge from "@/components/ui/Badge";
import { APP_TAGLINE, HANA_MONEY_INFO } from "@/lib/constants";

export default function MissionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-start gap-4 px-5 pt-6 pb-4"
    >
      {/* 두디 캐릭터 */}
      <DoodyCharacter size={56} />

      {/* 텍스트 영역 */}
      <div className="flex flex-col gap-1.5 pt-0.5">
        <h1 className="text-[20px] font-semibold text-[#3D4149] leading-tight">
          오늘의 미션
        </h1>
        <p className="text-[14px] text-[#7D828C] font-normal leading-snug">
          {APP_TAGLINE}
        </p>
        <Badge variant="reward" className="mt-0.5 w-fit">
          {HANA_MONEY_INFO}
        </Badge>
      </div>
    </motion.div>
  );
}
