import React from "react";
import "./header.component.css";

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container-fluid">
                <div className="row height-max align-items-center">
                    <div className="col col-md-9 ml-auto text-right pr-5">
                        <h5 className="title-heading d-inline-block p-2 text-uppercase">
                            The all new
            </h5>
                        <h2 className="text-uppercase my-2 title">2018 Mercedes-Benz</h2>
                        <h3 className="text-uppercase">Model name</h3>
                        <h6 className="text-capitalize">Starts from</h6>
                        <h2>
                            $60,000
              <a href="#home" className="title-icon d-inline-block mx-2">
                                <i className="fas fa-play" />
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
