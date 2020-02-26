import React, { Component } from 'react'
import styled from 'styled-components'
export default class preloader extends Component {
    componentDidMount() {
        window.addEventListener("load", () =>
            document.querySelector(".preloader").classList.add("hidePreloader")
        );
    }
    render() {
        return (
            <Preloader className="preloader d-flex justify-content-center align-items-center">
                <img src="../img/preloader.gif" alt="preloader" />
            </Preloader>
        )
    }
}

const Preloader = styled.div`

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--mainWhite);
  z-index: 999;

.hidePreloader {
  display: none !important;
}

`