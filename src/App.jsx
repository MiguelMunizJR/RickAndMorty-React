import { useEffect, useState } from "react";
import Location from "./components/Location";
import "./App.css";
import CardResident from "./components/CardResident";
import axios from "axios";
import Loading from "./components/Loading";

const randomID = () => Math.floor(Math.random() * 126 - 1) + 1;
let ID;

function App() {
  const [location, setLocation] = useState();
  const [search, setSearch] = useState("");
  const [shuffle, setShuffle] = useState(true);
  const [loading, setLoading] = useState();
  
  useEffect(() => {

    if (search === "") {
      ID = randomID();
    } else {
      if (search > 0 && search <= 126) {
        ID = search;
      } else {
        alert("Ingresa un numero del 1 al 126")
      }
    }

    const API = `https://rickandmortyapi.com/api/location/${ID}`;
    axios
      .get(API)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [search, shuffle]);

  useEffect(() => {
    loadingTimeout();
  }, []);

  let intervalLoading;

  const loadingTimeout = () => {
    setLoading(true);
    intervalLoading = window.setTimeout(changeLoading, 1500);
  };

  const changeLoading = () => {
    setLoading(false);
    intervalLoading = window.clearTimeout();
  };

  const handleSubmit = (e) => {
    const value = e.target.search.value;
    e.preventDefault();
      setSearch(value);
      e.target.reset();
  };

  const shuffleBtn = () => {
    setShuffle(!shuffle);
    setSearch("");
  };

  // console.log(location);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="App">
        <div className="App__header"></div>
        <article className="search">
          <h1 className="search__title">Rick and Morty</h1>
          <form onSubmit={handleSubmit}>
            <h5>Search with number ID:</h5>
            <input id="search" type="text" />
            <button>Search</button>
            <div className="shuffle" onClick={shuffleBtn}>
              <i className="fa-solid fa-shuffle"></i>
            </div>
          </form>
        </article>
        <Location location={location} />
        <section className="App__container">
          <h2 className="population">No hay residentes aquí.</h2>
          {location?.residents.map((URL) => (
            <CardResident key={URL} URL={URL} />
          ))}
        </section>
        <footer>Miguel Muñiz | Academlo ©</footer>
      </section>
    );
  }
}

export default App;
