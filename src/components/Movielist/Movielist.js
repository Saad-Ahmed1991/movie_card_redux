import React from "react";
import Moviecard from "../Moviecard/Moviecard";

const Movielist = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <Moviecard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Movielist;
