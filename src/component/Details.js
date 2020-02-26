import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { id, country, img, price, inCart,info, gas, model, make, trans, type } =value.detailProduct 
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{make}</h1>
                                 </div>
                                 </div> 
                        {/* end title */}
                        {/* product info */}
                            <div className="row"> 
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model:{make}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by:<span className="text-uppercase">{model}</span>
                                </h4>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        country:<span className="text-uppercase">{country}</span>
                                    </h4>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        gas:<span className="text-uppercase">{gas}</span>
                                    </h4>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        transition:<span className="text-uppercase">{trans}</span>
                                    </h4>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        type:<span className="text-uppercase">{type}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price:<span>$</span>{price}</strong>
                                        
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mn-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                {/* button */}
                                <div>
                                    <Link to="/">
                                    <ButtonContainer>back to products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? "incart":"add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
               }}
           </ProductConsumer>
        )
    }
}
