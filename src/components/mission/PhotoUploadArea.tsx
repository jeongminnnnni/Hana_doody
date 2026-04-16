"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

interface PhotoUploadAreaProps {
  label: string; // "청소 전" or "청소 후"
  photo: string | undefined;
  onPhotoChange: (dataUrl: string) => void;
}

export default function PhotoUploadArea({
  label,
  photo,
  onPhotoChange,
}: PhotoUploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        onPhotoChange(ev.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 사진 미리보기 영역 */}
      <div
        className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-dashed transition-colors duration-200 ${
          isDragging
            ? "border-[#8EACCD] bg-[#D2E0FB]/30"
            : "border-[#ECEDF0] bg-[#F5F6F8]"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (ev) => {
            if (ev.target?.result) {
              onPhotoChange(ev.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        }}
        onClick={handleClick}
      >
        <AnimatePresence mode="wait">
          {photo ? (
            <motion.img
              key="photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={photo}
              alt={label}
              className="w-full h-full object-cover cursor-pointer"
            />
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex items-center justify-center cursor-pointer"
            >
              {/* 체크무늬 패턴 배경 */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #D1D3D8 25%, transparent 25%),
                    linear-gradient(-45deg, #D1D3D8 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #D1D3D8 75%),
                    linear-gradient(-45deg, transparent 75%, #D1D3D8 75%)
                  `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
              <span className="relative text-[15px] text-[#A9ADB6] font-normal">
                {label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 사진 추가 버튼 */}
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-between w-full bg-white rounded-2xl px-5 py-4 border border-[#ECEDF0] cursor-pointer hover:bg-[#FAFBFC] transition-colors"
      >
        <span className="text-[15px] text-[#A9ADB6] font-normal">
          {label} 사진 추가
        </span>
        <Camera size={22} className="text-[#D2E0FB]" />
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
