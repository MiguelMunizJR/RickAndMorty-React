import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [API, setAPI] = useState();

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setAPI(res.data))
      .catch((err) => console.log(err.data));
  }, [URL]);

  return API;
};

export default useFetch;
