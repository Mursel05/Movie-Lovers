import React from "react";

const Films = ({ data }) => {
  return (
    <div className="film">
      <span className="name">{data.Title}</span>
      <img src={data.Poster} alt="sekil" />
      <span>Released: {data.Released}</span>
      <span className="plot">{data.Plot}</span>
      <button>Get Ticket</button>
    </div>
  );
};

export default Films;
