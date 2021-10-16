import React from "react";
import "./styles.scss";

const Cat = ({ imgLink }) => {
  return (
    <div className="img-container">
      <img className="cat-img" src={imgLink} alt="cat" />
    </div>
  );
};

export default Cat;
