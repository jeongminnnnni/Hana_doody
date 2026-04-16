import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import { MissionProvider } from "@/context/MissionContext";

export const metadata: Metadata = {
  title: "두디 - 무리하지 않아도 괜찮아요",
  description:
    "심리·행동 데이터 기반 고립·은둔 청년 사회 복귀 플랫폼. 할 수 있는 것만, 나의 속도대로.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <MissionProvider>
          <AppShell>{children}</AppShell>
        </MissionProvider>
      </body>
    </html>
  );
}
