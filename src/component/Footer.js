import React from "react";
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterWrapper>
            <div className="footer-center">
                <div className="contact">
                    <h3 class="white">contact info</h3>
                    <p>Don't hesitate to contact us now!</p>
                    <p><i class="fas fa-map-marker-alt"></i> 39/10 Freetown Avenue,Okponglo</p>
                    <p><i class="fas fa-phone-alt"></i> +233 541 647 986</p>
                    <p><i class="far fa-envelope"></i> info@hotmail.com</p>
                </div>
                <div className="tweets">
                    <h3 class="white">latest tweets</h3>
                    <div class="social">
                        <i class="fab fa-twitter"></i>
                        <p> A new car isn't just a set of new wheels, it's full of new memories, new lifestyle and beginning of new
            dreams.</p>
                    </div>
                    <div className="social">
                        <i class="fab fa-twitter"></i>
                        <p>Want to Buy a new car, Sell your Car or both? I'm your plug! Check Media for Available Cars.</p>
                    </div>
                </div>
                <div class="opening-hours">
                    <h3 class="white">open hours</h3>
                    <p>Mon-Wed : 8:00am - 5:00pm</p>
                    <p>Thur : 10:00am - 4:00pm</p>
                    <p>Fri : 2:00pm - 6:00pm</p>
                    <p>Sat : 8:00am - 5:00pm</p>
                    <p>Sunday is closed</p>
                </div>
                <div className="white newsletter">
                    <h3>newsletter</h3>
                    <p>subscribe to our newletter</p>
                    <form action="#" method="POST">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email"
                                aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="far fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <a href="http://facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="http://twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="http://instagram.com"><i class="fab fa-instagram"></i></a>
                        <a href="http://skpe.com"><i class="fab fa-skype"></i></a>
                        <a href="http://linkedin.com"><i class="fab fa-linkedin"></i></a>
                        <a href="http://whatsapp.com"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>



            <div className="copyright">
                <div id="copyright">
                    <p>copyright &copy; 2020 all right reserved Adams' Motors designed by <span id="by">adams mohammed</span></p>

                </div>

            </div>
        </FooterWrapper>

    );
};

export default Footer;

const FooterWrapper = styled.div`

    background:#1C1C1E ;
    color:#6F7177;
    text-transform: capitalize; 
    margin-top:2rem; 

h3{
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    letter-spacing: var(--mainSpacing);
}

 p{
    margin-bottom: 1rem;
}

.footer-center{
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
}

.white{
    color: white;
}

.fa-twitter,.fa-check-square,.fa-instagram,.fa-skype,.fa-facebook-f,.fa-linkedin,.fa-whatsapp{
    color: orangered;
    margin-right: 1rem;
}

.fa-phone-alt,.fa-envelope,.fa-map-marker-alt{
    margin-right: 1rem;
}

.social{
    display: flex;
}
.form-control {
    display: block;
    width: 80%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-group-append {
    margin-left: -1px;
}

.input-group{
	position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: white;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: orangered;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-outline-secondary {
    color: white;
    border-color:white;
}
.mb-3 {
    margin-bottom: 1rem !important;
}

.copyright{
display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    border-top:1px dashed #fff ;
}

#copyright{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
    color: aliceblue;
}
#copyright p{
    padding-right: .6rem;
}
#by{
    color:var(--mainOrange);
}

    `;
