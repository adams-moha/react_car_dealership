import React from "react";
import "./section-title.styles.css";

const SectionTitle = props => {
  const { title1, title2 } = props;
  return (
    <div className="row mb-5">
      <div className="col d-flex flex-wrap text-uppercase justify-content-center">
        <h1 className="font-weight-bold align-self-center mx-1">{title1}</h1>
        <h1 className="section-title--special mx-1">{title2}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
