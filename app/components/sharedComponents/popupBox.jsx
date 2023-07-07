import React from "react";

const PopupBox = ({ isPopupBoxOpen, togglePopupBox, content, darkMode }) => {
  return (
    <div>
      {/* Impressums Popup */}
      {isPopupBoxOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={togglePopupBox} //  close menu if click outside of it
        >
          <div
            className="border-4 border-solid border-black dark:border-white text-center bg-white text-black
              font-bold dark:text-white dark:bg-gray-800 w-auto p-4 rounded-lg shadow
             bg-gradient-to-b from-yellow-100 to-gray-300"
            // Prevent the menu from closing, stop the click event from propagating to the parent element
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: darkMode ? 'url("/dotgrid.svg")' : "",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <span className="leading-loose">{content}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupBox;
