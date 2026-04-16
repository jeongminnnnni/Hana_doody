"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mission } from "@/types";
import { useMission } from "@/context/MissionContext";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { BUTTON_ACCEPT, BUTTON_DECLINE, HANA_MONEY_LABEL } from "@/lib/constants";

interface MissionCardProps {
  mission: Mission;
  index: number;
}

export default function MissionCard({ mission, index }: MissionCardProps) {
  const router = useRouter();
  const { acceptMission, deferMission } = useMission();

  const handleAccept = () => {
    acceptMission(mission.id);
    // photo 타입 미션이면 상세 페이지로 이동
    if (mission.type === "photo") {
      router.push(`/mission/${mission.id}`);
    }
  };

  const handleDecline = () => {
    deferMission(mission.id);
  };

  const isCompleted = mission.status === "completed";
  const isDeferred = mission.status === "deferred";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className={`mx-5 mb-3 bg-white rounded-2xl p-5 shadow-sm ${
        isCompleted ? "opacity-60" : ""
      }`}
    >
      {/* 미션 제목 */}
      <h3 className="text-[17px] font-semibold text-[#3D4149] leading-snug">
        {mission.title}
      </h3>

      {/* 미션 설명 */}
      <p className="text-[14px] text-[#A9ADB6] mt-1 font-normal">
        {mission.subtitle}
      </p>

      {/* 보상 배지 */}
      <Badge variant="reward" className="mt-2.5">
        +{mission.reward} {HANA_MONEY_LABEL}
      </Badge>

      {/* 버튼 영역 */}
      {!isCompleted && (
        <div className="flex gap-2.5 mt-4">
          <Button
            variant="primary"
            onClick={handleAccept}
            className="flex-1 text-[14px] py-2.5"
          >
            {BUTTON_ACCEPT}
          </Button>
          <Button
            variant="secondary"
            onClick={handleDecline}
            className={`flex-1 text-[14px] py-2.5 ${
              isDeferred ? "bg-[#FFFFFF]" : ""
            }`}
          >
            {BUTTON_DECLINE}
          </Button>
        </div>
      )}

      {/* 완료 상태 */}
      {isCompleted && (
        <div className="mt-4 text-center">
          <span className="text-[14px] text-[#8EACCD] font-semibold">
            ✓ 완료했어요
          </span>
        </div>
      )}
    </motion.div>
  );
}
