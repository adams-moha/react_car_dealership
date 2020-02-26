import React, { Component } from 'react'
import ProductList from '../ProductList';
import Header from './Header/header.component';
import Skills from "./Skills/skills.component";
import Quotes from "./Quotes/quotes.component";
import Gallery from "./Gallery/gallery.component";
import Question from "./question/question.component";
import Featured from "./featured/featured.component";

import { storeProducts } from "../../data";
export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            cars: storeProducts
        };
        this.getFeaturedCars = this.getFeaturedCars.bind(this);
        // this.getInventoryCars = this.getInventoryCars.bind(this);
    }

    getFeaturedCars = () => {
        const featuredCars = this.state.cars.filter(car => car.special === true);
        return featuredCars;
    };
    render() {
        return (
            <div>
                <Header/>
                <Skills/>
                <ProductList/>
                <Question/>
                <Featured featuredCars={this.getFeaturedCars()}/>
                <Gallery/>
                <Quotes/>
            </div>
        )
    }
}





