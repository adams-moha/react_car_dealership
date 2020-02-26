import React, { Component } from "react";
import "./featured.styles.css";
import FeaturedItem from "./featured-item.component";
import SectionTitle from "../section-title/section-title.component";

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: this.props.featuredCars,
      displayImg: ""
    };
  }

  componentDidMount() {
    this.setState({
      displayImg: this.state.featuredCars[0].img
    });
  }

  handleChange = img => {
    this.setState({
      displayImg: img
    });
  };

  render() {
    // console.log(this.state.displayImg);
    const { displayImg } = this.state;
    return (
      <section className="featured py-5" id="featured">
        <div className="container">
          <SectionTitle title1="Featured" title2="Cars" />

          <div className="row">
            <div className="col-10 col-lg-6 mx-auto my-3 featured-info">
              {this.state.featuredCars.map((car, index) => (
                <FeaturedItem
                  key={index}
                  carMake={car.make}
                  carModel={car.model}
                  onChange={() => this.handleChange(car.img)}
                />
              ))}
            </div>

            <div className="col-10 col-lg-6 mx-auto my-3 align-self-center featured-img">
              <div className="img-container">
                <img
                  src={displayImg}
                  alt="featured"
                  className="img-fluid featured-photo"
                />
                <a href="#home" className="featured-link">
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
