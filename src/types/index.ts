// 미션 레벨 정의
export type MissionLevel = {
  id: number;
  label: string; // "집 안", "경계선", "동네"
  description: string;
};

// 개별 미션
export type Mission = {
  id: string;
  levelId: number;
  title: string; // "방 청소하기"
  subtitle: string; // "두디가 B&A를 판단 해줘요."
  reward: number; // 하나머니 보상량
  type: "diary" | "photo" | "location" | "banking";
  status: "available" | "accepted" | "completed" | "deferred";
};

// 미션 인증 데이터
export type MissionSubmission = {
  missionId: string;
  beforePhoto?: string; // base64 data URL
  afterPhoto?: string;
  submittedAt?: string;
};

// 챗봇 메시지
export type ChatMessage = {
  id: string;
  sender: "doody" | "user";
  content: string;
  timestamp: string;
  options?: ChatOption[];
};

export type ChatOption = {
  label: string;
  nextMessageId: string;
};
