"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubmissionPopupProps {
  isOpen: boolean;
  missionReward: number;
  onComplete: () => void;
}

type PopupStep = "checking" | "reward" | "closed";

export default function SubmissionPopup({
  isOpen,
  missionReward,
  onComplete,
}: SubmissionPopupProps) {
  const [step, setStep] = useState<PopupStep>("closed");

  useEffect(() => {
    if (isOpen) {
      setStep("checking");
      // 1.5초 후 보상 팝업으로 전환
      const timer = setTimeout(() => {
        setStep("reward");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleRewardButtonClick = () => {
    setStep("closed");
    onComplete();
  };

  return (
    <AnimatePresence>
      {(step === "checking" || step === "reward") && (
        <>
          {/* 어두운 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => {
              if (step === "reward") handleRewardButtonClick();
            }}
          />

          {/* 팝업 컨테이너 */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] 
                       bg-white rounded-t-[24px] px-5 py-8 z-50"
          >
            {/* 드래그 핸들 */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-[#D1D3D8] rounded-full" />
            </div>

            {/* 검사 중 팝업 */}
            {step === "checking" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center py-12"
              >
                {/* 전구 아이콘 */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[60px] mb-4"
                >
                  💡
                </motion.div>
                <h2 className="text-[18px] font-semibold text-[#7A9DBF] text-center mb-1">
                  두디가 제출을 검사하고 있어요
                </h2>
                <p className="text-[14px] text-[#A9ADB6] text-center">
                  하느라 수고 많았어!
                </p>

                {/* 로딩 인디케이터 */}
                <div className="flex gap-1 mt-6">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 bg-[#8EACCD] rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 보상 팝업 */}
            {step === "reward" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center py-6"
              >
                {/* 돈 주머니 아이콘 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="text-[60px] mb-6"
                >
                  💰
                </motion.div>

                {/* 보상 텍스트 */}
                <h2 className="text-[20px] font-semibold text-[#8EACCD] mb-1">
                  +{missionReward} 하나머니
                </h2>
                <p className="text-[14px] text-[#A9ADB6] text-center mb-8">
                  청소 미션 하느라 수고 많았어!
                </p>

                {/* 버튼 */}
                <button
                  onClick={handleRewardButtonClick}
                  className="w-full bg-[#8EACCD] text-white font-semibold text-[15px] 
                           py-3.5 rounded-full transition-colors duration-200
                           hover:bg-[#7A9BBF] active:scale-95"
                >
                  고마워, 두디
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}