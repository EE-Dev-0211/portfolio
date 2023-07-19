import React, { useState } from "react";

const Tooltip = ({ tooltipKey, tooltipContent }) => {
  const [position, setPosition] = useState({ top: 1, left: 1 });

  const handleMouseMove = (event) => {
    setPosition({ top: event.clientY, left: event.clientX });
  };

  return (
    <div
      key={tooltipKey}
      className={`fixed z-50 w-auto bg-gray-700 dark:bg-blue-600 text-white px-4 py-2 rounded-md
        top-${position.top}
      } left-${position.left} `}
      onMouseMove={handleMouseMove}
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;
