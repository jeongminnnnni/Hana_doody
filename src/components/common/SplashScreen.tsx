"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isSmiling, setIsSmiling] = useState(false);

  useEffect(() => {
    // 0.6초 후 스마일 표정으로 변경 (기존 1.2초에서 단축)
    const smileTimer = setTimeout(() => {
      setIsSmiling(true);
    }, 600);

    // 1.8초 후 스플래시 종료 (기존 2.8초에서 단축)
    const finishTimer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(smileTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[100] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* 중앙 DOODY 텍스트 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-bold text-[60px] tracking-normal text-[#8EACCD] mb-40"
      >
        DOODY
      </motion.h1>

      {/* 우측 하단 두디 캐릭터 (크기 더 크게 확대) */}
      <div className="absolute right-[-80px] bottom-[-40px] w-[500px] h-[500px]">
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          {/* 기본 두디 */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isSmiling ? "opacity-0" : "opacity-100"}`}>
            <Image
              src="/default_doddy.svg"
              alt="DOODY"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          {/* 스마일 두디 */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isSmiling ? "opacity-100" : "opacity-0"}`}>
            <Image
              src="/smile_doddy.svg"
              alt="DOODY Smiling"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
