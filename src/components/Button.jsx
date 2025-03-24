import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
  //why class name khali and props spreaded 
  //classname using backticks
  
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
