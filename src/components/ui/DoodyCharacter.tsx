import Image from "next/image";

interface DoodyCharacterProps {
  size?: number;
  className?: string;
}

export default function DoodyCharacter({
  size = 64,
  className = "",
}: DoodyCharacterProps) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/doody.png"
        alt="두디 캐릭터"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
    </div>
  );
}
