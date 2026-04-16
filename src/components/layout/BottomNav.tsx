"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Target, MessageCircle, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { href: "/", icon: Target, label: "미션" },
  { href: "/chat", icon: MessageCircle, label: "두디" },
  { href: "/report", icon: BarChart3, label: "리포트" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 backdrop-blur-xl border-t border-[#ECEDF0] z-50">
      <div className="flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;

          return (
            <Link key={tab.href} href={tab.href} className="flex-1">
              <motion.div
                className="flex flex-col items-center gap-1 py-1"
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  size={22}
                  className={
                    active ? "text-[#8EACCD]" : "text-[#A9ADB6]"
                  }
                  strokeWidth={active ? 2.5 : 1.8}
                />
                <span
                  className={`text-[11px] ${
                    active
                      ? "text-[#8EACCD] font-semibold"
                      : "text-[#A9ADB6] font-normal"
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
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
