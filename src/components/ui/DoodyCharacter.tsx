// src/components/ui/DoodyCharacter.tsx
import Image from "next/image";

interface DoodyCharacterProps {
  size?: number;
  className?: string;
  src?: string; // 이미지 경로를 받을 수 있도록 src 추가
}

export default function DoodyCharacter({
  size = 64,
  className = "",
  src = "/doody.svg", // 기본값은 기존 이미지로 유지
}: DoodyCharacterProps) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="두디 캐릭터"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
    </div>
  );
}