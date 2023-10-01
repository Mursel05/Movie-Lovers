import React from "react";
import Films from "./Films";
import { data } from "./data";

const SoonFilms = () => {
  const films = data.filter((item) => item.type === "soon");
  return (
    <div className="films">
      {films.map((film) => (
        <Films film={film} key={film.id} />
      ))}
    </div>
  );
};

export default SoonFilms;
