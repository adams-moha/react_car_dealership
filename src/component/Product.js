import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        const {id,country,img,price,inCart,gas,model,make,trans,type}=this.props.product;
        return (
        
            <ProductWrapper className={`col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${country}`}
>
                <div className="card car-card " >
                    <ProductConsumer>
                    {value => (
                            <div className=".img-container" onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} className="card-img-top car-img" alt={img} />
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id)
                                }}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        inCart
                                </p>) : (<i className="fas fa-cart-plus" />)}

                                </button>
                            </div>
                    )}
                   
                 
                    
                    
                    </ProductConsumer>

                    
                    <div className="card-body">
                        <div className="car-info d-flex justify-content-between">
                            <div className="car-text text-uppercase">
                                <h6 className="font-weight-bold">{make}</h6>
                                <h6 className="font-weight-bold">{model}</h6>
                            </div>
                            <h5 className="car-value aligh-self-center py-2 px-3">
                                $<span className="car-price">{price}</span>
                            </h5>
                        </div>
                    </div>
                    <div className="card-footer text-capitalize d-flex justify-content-between">
                        <p>
                            <span>
                                <i className="fas fa-car" />
                            </span>{" "}
                            {type}
                        </p>
                        <p>
                            <span>
                                <i className="fas fa-cogs" />
                            </span>{" "}
                            {trans}
                        </p>
                        <p>
                            <span>
                                <i className="fas fa-gas-pump" />
                            </span>{" "}
                            {gas}
                        </p>
                    </div>





                  
                       
                       

                     
                




                </div>
            </ProductWrapper>
        )
    }
}
Product.propTypes={
product:PropTypes.shape({
    id:PropTypes.number,
    country:PropTypes.string,
    gas: PropTypes.number,
    img: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    trans: PropTypes.string,
    type: PropTypes.string,
    inCart: PropTypes.bool,
     
}).isRequired
}


const ProductWrapper=styled.div`
.card{
    border-color:transparent;
    
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,.2);
        cursor:pointer;
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    // transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    
    padding: 0.2rem 0.4rem;
    backgroud:var(--mainOrange);
    border:none;
    color:var(--mainOrange);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(-95%,-7%);
}

.cart-btn:hover{
    background:var(--mainOrange);
    color:var(--mainWhite)
    cursor:pointer;
}
.car-card {
  border-radius: 0 !important;
}
.car-img {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.car-value {
  background: var(--mainOrange);
  color: var(--mainWhite);
  clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
  transition: all 1s linear;
}
.car-value:hover {
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 0 100%);
}

`