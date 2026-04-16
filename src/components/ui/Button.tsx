"use client";

import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base =
    "font-semibold rounded-full px-6 py-3 transition-colors duration-200 text-[15px] leading-tight";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#8EACCD] text-white hover:bg-[#7A9BBF]",
    secondary:
      "bg-[#F5F6F8] text-[#7D828C] border border-[#ECEDF0] hover:bg-[#ECEDF0]",
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
