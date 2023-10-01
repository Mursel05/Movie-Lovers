import React from "react";

const Films = ({ film }) => {
  return (
    <div className="film">
      <span className="name">{film.name}</span>
      <img src={film.image} alt="sekil" />
      <span>Released: {film.released}</span>
      <span className="plot">{film.plot}</span>
      <button>Get Ticket</button>
    </div>
  );
};

export default Films;