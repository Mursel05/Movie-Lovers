import React from "react";
import Films from "./Films";
import { data } from "./data";

const NowFilms = () => {
  const films = data.filter((item) => item.type === "released");
  return (
    <div className="films">
      {films.map((film) => (
        <Films film={film} key={film.id} />
      ))}
    </div>
  );
};

export default NowFilms;
