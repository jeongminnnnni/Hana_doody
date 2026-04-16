import { Info } from "lucide-react";

type BadgeVariant = "reward" | "level";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "reward",
  className = "",
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    reward:
      "inline-flex items-center gap-1 bg-[#D2E0FB] text-[#5A5E67] text-[13px] font-semibold px-3 py-1 rounded-full",
    level:
      "inline-flex items-center gap-1 bg-[#FEF9D9] text-[#7D828C] text-[13px] font-semibold px-3 py-1.5 rounded-full",
  };

  return (
    <span className={`${variants[variant]} ${className}`}>
      {variant === "reward" && <Info size={14} className="text-[#8EACCD]" />}
      {children}
    </span>
  );
}
