import React from "react";

const Tooltip = ({ tooltipKey, tooltipContent }) => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  const handleMouseMove = (event) => {
    setPosition({ top: event.clientY, left: event.clientX });
  };

  return (
    <div
      key={tooltipKey}
      className={`fixed z-50 w-auto bg-gray-700 dark:bg-blue-600 text-white px-4 py-2 rounded-md
        ${position.top + 55} top-${position.top + 55} ${
        position.left + 100
      } left-${position.left + 100} 
   
      
    `}
      onMouseMove={handleMouseMove}
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;
