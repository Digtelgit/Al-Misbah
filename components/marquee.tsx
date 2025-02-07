import React, { FC, ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface CustomMarqueeProps {
  className?: string;
  reverse?: boolean;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  children: ReactNode;
  speed?: number;
  gradient?: boolean;
  gradientWidth?: number | string;
}

const CustomMarquee: FC<CustomMarqueeProps> = ({
  className = "",
  reverse = false,
  pauseOnHover = true,
  children,
  speed = 50,
  gradient = true,
  gradientWidth = "10%",
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-4 shadow-md rounded-lg ${className}`}
    >
      <Marquee
        direction={reverse ? "right" : "left"}
        pauseOnHover={pauseOnHover}
        speed={speed}
        gradient={gradient}
        gradientWidth={gradientWidth}
        className="flex items-center"
      >
        <div className="flex space-x-6">{children}</div>
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
