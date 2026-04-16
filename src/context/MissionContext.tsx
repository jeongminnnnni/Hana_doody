"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Mission, MissionSubmission } from "@/types";
import { initialMissions } from "@/data/missions";

type MissionContextType = {
  missions: Mission[];
  submissions: MissionSubmission[];
  acceptMission: (id: string) => void;
  deferMission: (id: string) => void;
  submitMission: (submission: MissionSubmission) => void;
  getMissionById: (id: string) => Mission | undefined;
  getSubmissionByMissionId: (id: string) => MissionSubmission | undefined;
};

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export function MissionProvider({ children }: { children: React.ReactNode }) {
  const [missions, setMissions] = useState<Mission[]>(initialMissions);
  const [submissions, setSubmissions] = useState<MissionSubmission[]>([]);

  const acceptMission = useCallback((id: string) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "accepted" as const } : m))
    );
  }, []);

  const deferMission = useCallback((id: string) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "deferred" as const } : m))
    );
  }, []);

  const submitMission = useCallback((submission: MissionSubmission) => {
    setSubmissions((prev) => {
      const filtered = prev.filter((s) => s.missionId !== submission.missionId);
      return [...filtered, submission];
    });
    setMissions((prev) =>
      prev.map((m) =>
        m.id === submission.missionId
          ? { ...m, status: "completed" as const }
          : m
      )
    );
  }, []);

  const getMissionById = useCallback(
    (id: string) => missions.find((m) => m.id === id),
    [missions]
  );

  const getSubmissionByMissionId = useCallback(
    (id: string) => submissions.find((s) => s.missionId === id),
    [submissions]
  );

  return (
    <MissionContext.Provider
      value={{
        missions,
        submissions,
        acceptMission,
        deferMission,
        submitMission,
        getMissionById,
        getSubmissionByMissionId,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error("useMission must be used within a MissionProvider");
  }
  return context;
}
