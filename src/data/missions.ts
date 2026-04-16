import { Mission, MissionLevel } from "@/types";

export const missionLevels: MissionLevel[] = [
  { id: 1, label: "집 안", description: "안전한 집 안에서 시작해요" },
  { id: 2, label: "경계선", description: "집 밖, 한 발짝만" },
  { id: 3, label: "동네", description: "가까운 동네를 탐험해요" },
];

export const initialMissions: Mission[] = [
  // === Lv.1 — 집 안 ===
  {
    id: "m1",
    levelId: 1,
    title: "30자 감정 일기 쓰기",
    subtitle: "아무 감정이나 다 괜찮아",
    reward: 30,
    type: "diary",
    status: "available",
  },
  {
    id: "m2",
    levelId: 1,
    title: "방 청소하기",
    subtitle: "두디가 B&A를 판단 해줘요.",
    reward: 50,
    type: "photo",
    status: "available",
  },
  // === Lv.2 — 경계선 ===
  {
    id: "m3",
    levelId: 2,
    title: "하나은행 통장 잔액 확인",
    subtitle: "지금 얼마 있을까?",
    reward: 20,
    type: "banking",
    status: "available",
  },
  {
    id: "m4",
    levelId: 2,
    title: "10분 산책하기",
    subtitle: "위치 기반으로 인증해요",
    reward: 20,
    type: "location",
    status: "available",
  },
  // === Lv.3 — 동네 ===
  {
    id: "m5",
    levelId: 3,
    title: "편의점에서 음료 사기",
    subtitle: "작은 외출, 큰 성취",
    reward: 40,
    type: "photo",
    status: "available",
  },
];
