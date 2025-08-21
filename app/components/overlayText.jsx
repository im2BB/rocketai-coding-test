"use client";
import React from "react";

export default function OverlayText({
  top,
  left = "50%",
  translateX = "-1/2",
  className = "",
  texts,
}) {
  return (
    <div
      className={`
        absolute 
        text-center 
        text-black 
        text-[min(3.5vw,1rem)] 
        max-w-[80%] 
        pointer-events-auto 
        ${className}
      `}
      style={{ top, left }}
    >
      <div className={`-translate-x-[${translateX}]`}>
        {texts.map((line, i) => (
          <p key={i} className="whitespace-nowrap">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
