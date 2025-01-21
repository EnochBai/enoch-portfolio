import React, { ReactNode } from "react";

interface CircleButtonProps {
  icon: ReactNode;
  size?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  size = "w-12 h-12 rounded-full",
  href,
  onClick,
}) => {
  return (
    <a
      className={`flex items-center justify-center ${size} bg-slate-200 cursor-pointer`}
      href={href}
      onClick={onClick}
    >
      {icon}
    </a>
  );
};

export default CircleButton;
