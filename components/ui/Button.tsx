import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    "rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",

    secondary:
      "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100 disabled:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}