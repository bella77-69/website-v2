import React from "react";
import "./title.scss";

const Title = ({ title }) => {
  return (
    <div className="section">
      <h2 className="title">{title}</h2>
      <div className="section-div" />
    </div>
  );
};

export default Title;
