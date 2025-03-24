import React, { forwardRef, useId } from "react";
//forward ref
//dekho tum component yaha bana rahe ho but tumhe reference kisi aur file mein
//milenga so for refernce purpose it is used
//login form meim input wali hai bakchdi bcoz it is used multiple with different status
// that why forwardRef is used

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", id, ...props },
  ref
) {
  const generatedId = useId(); // Generate an ID if not provided
  const inputId = id || generatedId; // Use provided ID or fallback

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
