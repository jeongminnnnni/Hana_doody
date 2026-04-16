import { ChatMessage } from "@/types";

export const chatScenario: ChatMessage[] = [
  {
    id: "c1",
    sender: "doody",
    content: "안녕! 나는 두디야 🐾 오늘 기분이 어때?",
    timestamp: "2026-04-16T10:00:00",
    options: [
      { label: "그냥 그래", nextMessageId: "c2" },
      { label: "좀 힘들어", nextMessageId: "c3" },
      { label: "괜찮아!", nextMessageId: "c4" },
    ],
  },
  {
    id: "c2",
    sender: "doody",
    content:
      "그냥 그런 날도 있지. 아무것도 안 해도 괜찮아.\n혹시 간단한 미션 하나 해볼래?",
    timestamp: "2026-04-16T10:00:05",
    options: [
      { label: "해볼게", nextMessageId: "c5" },
      { label: "오늘은 쉴래", nextMessageId: "c6" },
    ],
  },
  {
    id: "c3",
    sender: "doody",
    content: "힘든 날이구나.\n그래도 여기 와줘서 고마워. 잠깐 쉬어가도 돼 🍃",
    timestamp: "2026-04-16T10:00:05",
    options: [{ label: "고마워 두디", nextMessageId: "c6" }],
  },
  {
    id: "c4",
    sender: "doody",
    content:
      "오, 다행이다! 기분 좋은 날 하나 해볼까?\n오늘의 미션 보여줄게 ✨",
    timestamp: "2026-04-16T10:00:05",
    options: [{ label: "좋아!", nextMessageId: "c5" }],
  },
  {
    id: "c5",
    sender: "doody",
    content:
      "좋아! 오늘의 미션 리스트에서 마음에 드는 걸 골라봐.\n네 속도가 가장 좋은 속도야 😊",
    timestamp: "2026-04-16T10:00:10",
  },
  {
    id: "c6",
    sender: "doody",
    content:
      "알겠어. 쉬는 것도 중요한 일이야.\n내가 여기 있을게, 언제든 돌아와 🌙",
    timestamp: "2026-04-16T10:00:10",
  },
];
