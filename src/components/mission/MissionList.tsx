"use client";

import { useMission } from "@/context/MissionContext";
import { missionLevels } from "@/data/missions";
import MissionLevelBadge from "./MissionLevelBadge";
import MissionCard from "./MissionCard";

export default function MissionList() {
  const { missions } = useMission();

  // 레벨별로 미션을 그룹핑
  const groupedMissions = missionLevels.map((level) => ({
    level,
    missions: missions.filter((m) => m.levelId === level.id),
  }));

  let globalIndex = 0;

  return (
    <div className="pb-4">
      {groupedMissions.map(({ level, missions: levelMissions }) => (
        <div key={level.id}>
          <MissionLevelBadge level={level.id} label={level.label} />
          {levelMissions.map((mission) => {
            const idx = globalIndex++;
            return <MissionCard key={mission.id} mission={mission} index={idx} />;
          })}
        </div>
      ))}
    </div>
  );
}
