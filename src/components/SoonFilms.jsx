import React, { useEffect, useState } from "react";
import Films from "./Films";

const SoonFilms = () => {
  const [data, setData] = useState("");
  const movie = () => {
    const film = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?i=tt3856118&apikey=13394ed9"
      );
      const data = await response.json();
      return data;
    };
    (async function () {
      setData(await film());
    })();
  };
  useEffect(() => {
    movie();
  }, []);

  return (
    <div>
      {" "}
      <Films data={data} />
    </div>
  );
};

export default SoonFilms;