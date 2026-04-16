"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const tabs = [
  { href: "/", icon: Target, label: "미션" },
  { href: "/chat", icon: "chat_button", label: "두디" },
  { href: "/report", icon: BarChart3, label: "리포트" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50">
      <div className="bg-white/95 backdrop-blur-xl border-t border-[#ECEDF0] flex items-center justify-around h-20 px-4 rounded-t-[32px] shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
        {tabs.map((tab) => {
          const active = isActive(tab.href);

          if (tab.href === "/chat") {
            return (
              <Link key={tab.href} href={tab.href} className="flex-1 flex justify-center -mt-8 relative z-10">
                <motion.div
                  className="flex flex-col items-center"
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-[72px] h-[72px] bg-[#F5F6F8] rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white rounded-full m-[1px]"></div>
                    <Image
                      src="/chat_button.svg"
                      alt="Chat Button"
                      width={60}
                      height={60}
                      className="relative z-10 drop-shadow-md"
                    />
                  </div>
                </motion.div>
              </Link>
            );
          }

          const Icon = tab.icon as any;

          return (
            <Link key={tab.href} href={tab.href} className="flex-1">
              <motion.div
                className="flex flex-col items-center gap-[6px] py-2 mt-2"
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  size={24}
                  className={active ? "text-[#8EACCD]" : "text-[#C1C6D0]"}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span
                  className={`text-[12px] ${
                    active
                      ? "text-[#8EACCD] font-bold"
                      : "text-[#A9ADB6] font-medium"
                  }`}
                >
                  {tab.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
      {/* Safe area padding for mobile */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </nav>
  );
}
