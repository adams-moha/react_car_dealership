import React from "react";
import "./featured-item.styles.css";

const FeaturedItem = props => {
  const { carMake, carModel, onChange } = props;

  const handleClick = () => {
    // console.log(props);
    onChange();
  };
  return (
    <div
      className="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap"
      onClick={() => handleClick()}
    >
      <span className="featured-icon mr-2">
        <i className="fas fa-car" />
      </span>
      <h5 className="font-weight-bold mx-1">{carMake}</h5>
      <h5 className="mx-1">{carModel}</h5>
    </div>
  );
};

export default FeaturedItem;
