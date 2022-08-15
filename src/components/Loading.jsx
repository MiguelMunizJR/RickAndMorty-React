import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__img">
        <img src="/src/assets/img/Loading.png" alt="loading image" />
      </div>
      <div className="loading__circle"></div>
    </div>
  );
};

export default Loading;
