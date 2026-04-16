// src/app/chat/page.tsx
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatBubble from "@/components/chat/ChatBubble";
import ChatInput from "@/components/chat/ChatInput";

type Message = {
  id: string;
  sender: "doody" | "user";
  content: string;
};

// 두디 고정 응답 배열
const DOODY_RESPONSES = [
  "진짜? 어땠어?",
  "오늘 진짜 잘했다 🌱 이번 주 경제 숫자가 올라가고 있어!",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "doody",
      content: "오늘 뭐 했어?",
    },
  ]);
  const [responseIndex, setResponseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 내부 영역만 부드럽게 스크롤
  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSend = (text: string) => {
    // 유저 메시지 추가
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);

    // 두디 응답이 남아 있으면 1초 딜레이 후 자동 응답
    if (responseIndex < DOODY_RESPONSES.length) {
      setIsTyping(true);
      const currentResponse = DOODY_RESPONSES[responseIndex];

      setTimeout(() => {
        const doodyMsg: Message = {
          id: `doody-${Date.now()}`,
          sender: "doody",
          content: currentResponse,
        };
        setMessages((prev) => [...prev, doodyMsg]);
        setResponseIndex((prev) => prev + 1);
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    // 전체 레이아웃을 상단 끝부터 하단 네비게이션 높이까지 완벽하게 고정(fixed)
    <div className="fixed top-0 bottom-[calc(64px+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 w-full max-w-[430px] flex flex-col bg-[#F5F6F8] z-10">
      
      {/* 채팅 헤더 - 고정 영역 */}
      <div className="flex-shrink-0 shadow-sm z-10 relative">
        <ChatHeader />
      </div>

      {/* 채팅 메시지 영역 - 오직 이 영역만 스크롤됨 */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender} content={msg.content} />
        ))}

        {/* 두디 타이핑 인디케이터 */}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-8 h-8" />
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#A9ADB6] rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-[#A9ADB6] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[#A9ADB6] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {/* 스크롤 포커스 타겟 */}
        <div ref={chatEndRef} className="h-1" />
      </div>

      {/* 입력창 - 하단 네비게이션 바로 위에 완벽 밀착 */}
      <div className="flex-shrink-0 z-10 relative border-t border-[#ECEDF0]">
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}