import React from 'react';
import react from "../assets/react.svg";  // Renaming for clarity

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={react} alt="logo" style={{ width }} />
    </div>
  );
}

export default Logo;
