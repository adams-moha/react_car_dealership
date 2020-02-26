import React from "react";
import "./skill-item.styles.css";

const SkillItem = props => {
  // console.log(props);
  const { skillTitle, skillBody } = props;
  return (
    <div className="col-sm-6 col-lg-3 text-center my-3">
      <a href="#home" className="skills-icon p-2 rounded-circle">
        <i className="fas fa-car fa-fw" />
      </a>
      <h6 className="text-uppercase font-weight-bold my-3">{skillTitle}</h6>
      <div className="skills-underline" />
      <p className="w-75 mx-auto text-muted">{skillBody}</p>
    </div>
  );
};

export default SkillItem;
