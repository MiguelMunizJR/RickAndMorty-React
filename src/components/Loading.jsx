import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <img
        src="https://i.postimg.cc/RFg6kr73/title.png"
        alt="Title"
        className="loading__title"
      />
      <div className="loading__circle">
        <img
          src="https://i.postimg.cc/MG8QRmZG/LoadIcon.png"
          alt="Loading-icon"
        />
      </div>
    </div>
  );
};

export default Loading;
