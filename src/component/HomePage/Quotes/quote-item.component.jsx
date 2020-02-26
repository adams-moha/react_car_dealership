import React from "react";
import "./quote-item.styles.css";

const QuoteItem = props => {
  const {
    imgSrc,
    customerImg,
    customerName,
    customerJob,
    customerQuote
  } = props;
  return (
    <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
      <div className="card">
        <img src={`img/${imgSrc}`} alt="car" className="card-img-top" />

        <div className="card-body text-center customer-card-body">
          <img
            src={`img/${customerImg}`}
            className="rounded-circle customer-img"
            alt="customer img"
          />
          <div className="card-title">
            <h5 className="customer-name text-capitalize">{customerName}</h5>
          </div>
          <h6 className="customer-job text-capitalize">{customerJob}</h6>
          <p className="customer-quote text-left mx-auto">{customerQuote}</p>
          <span className="customer-icon">
            <i className="fas fa-quote-left" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
