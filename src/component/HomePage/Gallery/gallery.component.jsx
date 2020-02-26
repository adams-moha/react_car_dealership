import React from "react";
import "./gallery.styles.css";
import SectionTitle from "../section-title/section-title.component";
import GalleryItem from "./gallery-item.component";

const Gallery = () => {
  return (
    <section className="gallery py-5" id="gallery">
      <div className="container">
        <SectionTitle title1="Our" title2="Gallery" />

        <div className="row">
          <GalleryItem imgSrc="car-american-1.jpeg" />

          <div className="col-sm-6 d-flex flex-column justify-content-between">
            <div className="row">
              <GalleryItem imgSrc="car-american-2.jpeg" />
              <GalleryItem imgSrc="car-american-3.jpeg" />
            </div>

            <div className="row">
              <GalleryItem imgSrc="car-american-4.jpeg" />
              <GalleryItem imgSrc="car-american-5.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
