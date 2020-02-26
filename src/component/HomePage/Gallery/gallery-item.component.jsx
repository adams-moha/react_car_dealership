import React from "react";
import "./gallery-item.styles.css";

const GalleryItem = props => {
  const { imgSrc } = props;
  return (
    <div className="col-sm-6">
      <div className="gallery-item">
        <img
          src={`img/${imgSrc}`}
          alt="car"
          className="img-fluid gallery-img"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
