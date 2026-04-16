interface MissionLevelBadgeProps {
  level: number;
  label: string;
}

export default function MissionLevelBadge({
  level,
  label,
}: MissionLevelBadgeProps) {
  return (
    <div className="px-5 pt-4 pb-2">
      <span className="inline-block bg-[#FEF9D9] text-[#7D828C] text-[13px] font-semibold px-3.5 py-1.5 rounded-full">
        Lv.{level} — {label}
      </span>
    </div>
  );
}
