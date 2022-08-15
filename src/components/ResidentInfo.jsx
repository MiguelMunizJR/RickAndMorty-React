import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const styleStatus = [
  {
    backgroundColor: "#37c24a",
    borderColor: "#37c24a",
  },
  {
    backgroundColor: "#e71a1a",
    borderColor: "#e71a1a",
  },
  {
    backgroundColor: "#838383",
    borderColor: "#838383",
  },
];

const CardResident = ({ URL }) => {
  const resident = useFetch(URL);
  const [colorStatus, setColorStatus] = useState();

  useEffect(() => {
    if (resident?.status === "Alive") {
      setColorStatus(styleStatus[0]);
    } else if (resident?.status === "Dead") {
      setColorStatus(styleStatus[1]);
    } else if (resident?.status === "unknown") {
      setColorStatus(styleStatus[2]);
    }
  }, [resident]);

  return (
    <article className="Card" style={colorStatus}>
      <header>
        <div className="Card__status">
          <div className="circle" style={colorStatus}></div>
          <h3 className="status__title">{resident?.status}</h3>
        </div>
        <div className="Card__img">
          <img src={resident?.image} alt={`image of ${resident?.name}`} />
        </div>
      </header>
      <h2 className="Card__title">{resident?.name}</h2>
      <ul>
        <li>
          Species: <br />
          <span>{resident?.species}</span>
        </li>
        <li>
          Origin: <br />
          <span>{resident?.origin.name}</span>
        </li>
        <li>
          Appearance in episodes: <br />
          <span>{resident?.episode.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default CardResident;
