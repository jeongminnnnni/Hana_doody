"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import BottomNav from "./BottomNav";
import SplashScreen from "@/components/common/SplashScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);

  // 미션 상세 페이지에서는 바텀 네비를 숨김
  const isMissionDetail = pathname.startsWith("/mission/");

  return (
    <div className="relative min-h-dvh flex flex-col bg-[#F5F6F8]">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto pb-20">{children}</main>

      {/* 하단 네비게이션 */}
      {!isMissionDetail && <BottomNav />}
    </div>
  );
}
