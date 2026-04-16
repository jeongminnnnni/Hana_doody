"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MyReportView from "@/components/report/MyReportView";
import SeniorReportView from "@/components/report/SeniorReportView";

export default function ReportPage() {
  const [view, setView] = useState<"my" | "senior">("my");

  const handleViewSenior = () => setView("senior");
  const handleBackToMy = () => setView("my");

  return (
    <div className="relative min-h-dvh bg-[#F5F6F8]">
      <AnimatePresence mode="wait">
        {view === "my" && (
          <MyReportView key="my" onViewSenior={handleViewSenior} />
        )}
        {view === "senior" && (
          <SeniorReportView key="senior" onBack={handleBackToMy} />
        )}
      </AnimatePresence>
    </div>
  );
}
