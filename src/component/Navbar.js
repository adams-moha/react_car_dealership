import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../mak.png';
import styled from 'styled-components'
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
    render() {
        return (
          <NavWrapper className="navbar navbar-expand-lg px-3" id="navBar">
            <Link to="/">
              <img src={logo} alt="car" className="navbar-brand" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myNav"
            >
              <span className="navbar-icon">
                <i className="fas fa-bars" />
              </span>
            </button>


            <div className="collapse navbar-collapse" id="myNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a href="#navBar" className="nav-link">
                    Home
            </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link">
                    Skills
            </a>
                </li>
                <li className="nav-item">
                  <a href="#inventory" className="nav-link">
                    Inventory
            </a>
                </li>
                <li className="nav-item">
                  <a href="#featured" className="nav-link">
                    Featured
            </a>
                </li>
              </ul>

             
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                  </span>
                  my cart
              </ButtonContainer>
              </Link>
            </div>
            
            
          </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:fff;
    transition: all 2s ease-in-out;

    .nav-link{
        color:#000 !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
.navbar-change {
  position: fixed;
  width: 100%;
  padding: 1rem;
  background:#40ACF1;
  z-index: 100;
}
.navbar-icon {
  font-size: 2rem;
  color:#40ACF1;
}
.navbar-toggler {
  outline-color: #40ACF1 !important;
}
.nav-link {
  color:#000;
  text-transform: capitalize;
}
&:hover{
.nav-link {
  color: var(--lightOrange);
}
.nav-icon {
  color: var(--mainBlack);
}
}

.nav-icon {
  font-size: 1.5rem;
  color:var(--mainOrange);
  text-decoration: none !important;
  transition-property: color;
  transition-duration: 2s;
  transition-timing-function: linear;
}


    `;
