import React, { useEffect, useState } from "react";

const LoadingScreen = ({ t, darkMode }) => {
  const words = String(t("loadingScreen.text"));
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 9);

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-black">
      <div
        className={` h-20 w-20 bg-green-300 ${darkMode ? "bg-amber-300" : ""} `}
      ></div>

      <div className="pb-28 ">
        {words.split(" ").map((word, index) => (
          <span
            key={index}
            className="ml-4 items-center justify-center
            animate-flyInLeft md:text-4xl text-lg font-extrabold py-2 text-teal-500 select-none "
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="w-32 h-4 bg-gray-800 rounded-full border-2 border-solid border-teal-700">
        <div
          className="h-full bg-teal-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
