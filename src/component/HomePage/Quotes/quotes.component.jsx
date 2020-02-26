import React from "react";
import "./quotes.styles.css";
import SectionTitle from "../section-title/section-title.component";
import QuoteItem from "./quote-item.component";

const Quotes = () => {
  return (
    <section className="quotes py-5 my-5" id="quotes">
      <div className="container">
        <SectionTitle title1="WHAT THEY" title2="SAY" />

        <div className="row">
          <QuoteItem
            imgSrc="car-american-1.jpeg"
            customerImg="customer-1.jpg"
            customerName="customer name"
            customerJob="customer job"
            customerQuote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, praesentium?"
          />

          <QuoteItem
            imgSrc="car-german-1.jpeg"
            customerImg="customer-2.jpg"
            customerName="customer name"
            customerJob="customer job"
            customerQuote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, praesentium?"
          />

          <QuoteItem
            imgSrc="car-american-2.jpeg"
            customerImg="customer-3.jpg"
            customerName="customer name"
            customerJob="customer job"
            customerQuote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, praesentium?"
          />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
