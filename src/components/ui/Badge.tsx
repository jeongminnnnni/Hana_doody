// src/components/ui/Badge.tsx
import { ReactNode } from "react";

type BadgeVariant = "reward" | "level";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "reward",
  className = "",
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    // 모든 배지의 배경색과 텍스트색을 동일하게 설정
    reward:
      "inline-flex items-center gap-1 bg-[#D2E0FB] text-[#5A5E67] text-[13px] font-semibold px-3 py-1 rounded-full",
    level:
      "inline-flex items-center gap-1 bg-[#FEF9D9] text-[#5A5E67] text-[13px] font-semibold px-3 py-1.5 rounded-full",
  };

  return (
    <span className={`${variants[variant]} ${className}`}>
      {/* 아이콘 제거 */}
      {children}
    </span>
  );
}