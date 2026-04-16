"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useMission } from "@/context/MissionContext";
import { missionLevels } from "@/data/missions";
import PhotoUploadArea from "@/components/mission/PhotoUploadArea";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SubmissionPopup from "@/components/mission/Submissionpopup";
import { BUTTON_SUBMIT, BUTTON_DEFER, HANA_MONEY_LABEL } from "@/lib/constants";

export default function MissionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { getMissionById, submitMission, deferMission } = useMission();

  const missionId = params.id as string;
  const mission = getMissionById(missionId);

  const [beforePhoto, setBeforePhoto] = useState<string | undefined>();
  const [afterPhoto, setAfterPhoto] = useState<string | undefined>();
  const [showPopup, setShowPopup] = useState(false);

  if (!mission) {
    return (
      <div className="flex items-center justify-center h-full p-10">
        <p className="text-[#A9ADB6] text-[15px]">미션을 찾을 수 없어요</p>
      </div>
    );
  }

  const level = missionLevels.find((l) => l.id === mission.levelId);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handlePopupComplete = () => {
    submitMission({
      missionId: mission.id,
      beforePhoto,
      afterPhoto,
      submittedAt: new Date().toISOString(),
    });
    setShowPopup(false);
    router.push("/");
  };

  const handleDefer = () => {
    deferMission(mission.id);
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white h-dvh flex flex-col overflow-hidden"
    >
      <div className="px-4 pt-2 flex-shrink-0">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F5F6F8] transition-colors cursor-pointer"
        >
          <ArrowLeft size={22} className="text-[#3D4149]" />
        </motion.button>
      </div>

      <div className="px-5 pb-3 flex-shrink-0">
        <h1 className="text-[20px] font-semibold text-[#3D4149] leading-tight">
          {mission.title}
        </h1>
        <p className="text-[14px] text-[#A9ADB6] mt-1 font-normal">
          {mission.subtitle}
        </p>
        <div className="flex items-center gap-2 mt-2">
          {level && (
            <Badge variant="level">
              Lv.{level.id} — {level.label}
            </Badge>
          )}
          <Badge variant="reward">
            {mission.reward} {HANA_MONEY_LABEL}
          </Badge>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-2 space-y-4">
        <PhotoUploadArea
          label="청소 전"
          photo={beforePhoto}
          onPhotoChange={setBeforePhoto}
        />
        <PhotoUploadArea
          label="청소 후"
          photo={afterPhoto}
          onPhotoChange={setAfterPhoto}
        />
      </div>

      <div className="px-5 py-4 border-t border-[#ECEDF0] flex-shrink-0">
        <div className="flex gap-2.5">
          <Button variant="primary" onClick={handleSubmit} className="flex-1 py-3.5">
            {BUTTON_SUBMIT}
          </Button>
          <Button variant="secondary" onClick={handleDefer} className="flex-1 py-3.5">
            {BUTTON_DEFER}
          </Button>
        </div>
      </div>

      <SubmissionPopup
        isOpen={showPopup}
        missionReward={mission.reward}
        onComplete={handlePopupComplete}
      />
    </motion.div>
  );
}