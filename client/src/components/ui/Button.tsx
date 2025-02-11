import React from "react";
import clsx from "clsx"; // For dynamic class merging
 interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Define styles for variants
const buttonVariants: Record<string, string> = {
  primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
  secondary: "bg-indigo-200 hover:bg-indigo-300 text-indigo-600",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-200",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

// Define styles for sizes
const buttonSizes: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-2 text-lg",
};

// Button Component
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  text,
  startIcon,
  endIcon,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 rounded-md font-medium transition duration-200",
        buttonVariants[variant],
        buttonSizes[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {text}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

