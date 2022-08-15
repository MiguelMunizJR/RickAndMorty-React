import React from "react";

const Location = ({ location }) => {
  return (
    <article className="location">
      <h2 className="location__title">{location?.name}</h2>
      <div className="location__container">
        <ul>
          <li>
            ID: <span>{location?.id}</span>
          </li>
          <li>
            Type: <span>{location?.type}</span>
          </li>
          <li>
            Dimension: <span>{location?.dimension}</span>
          </li>
          <li>
            Population: <span>{location?.residents.length}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Location;
