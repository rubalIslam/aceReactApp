import React, { Component } from 'react';
import { firebaseLooper } from '../components/ui/misc';
import { firebaseFooters } from "../firebase";

class Footer extends Component {

    state = {
        loading: true,
        footers: [],
    }

    componentDidMount() {
        firebaseFooters.once("value").then((snapshot) => {
            const footers = firebaseLooper(snapshot);
            let promises = [];
            //console.log(footers[0]);
            this.setState({
                footers:footers[0]
            })
        })
    }

    render() {
        return (
            <div>
    <div className="footer-area footer-bg">
        <div className="footerSec container">
            <div className="footer-top footer-padding">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-logo">
                                <a href="index.html"><img src="assets/img/logo/aceLogo.png" alt=""/></a>
                            </div>
                            {console.log(this.state.footers)}
                            {console.log(this.state.footers.email1)}
                            <div className="footer-tittle">
                                <div className="footer-pera">
                                    <p className="info1">
                                        Customer Satisfaction is our main motto.
                                    </p>
                                </div>
                            </div>
                            <div className="footer-number">
                                <h4><span>+91 </span>{this.state.footers.number1}</h4>
                                <h4><span>+91 </span>{this.state.footers.number2}</h4>
                                <h4><span>+91 </span>{this.state.footers.number3}</h4>
                                <h4><span>+91 </span>{this.state.footers.number4}</h4>
                                <p>{this.state.footers.email1}</p>
                                <p>{this.state.footers.email2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-5 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Where you can get us!</h4>
                            </div>
                            <div className="footer-cap">
                                <span>Hailakandi</span>
                                <p>Ace Construction, near Old Hospital, Ranguati Road, Hailakandi -4, Hailakandi-788151</p>
                            </div>
                            <div className="footer-cap">
                                <span>Bangalore</span>
                                <p>Ace Construction, Goraguntapalya, Yesvantpur, Bangalore-560022</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Gallery View</h4>
                            </div>
                            <div className="instagram-gellay">
                                <ul className="insta-feed">
                                    <li><a href="#"><img src="assets/img/gallery/insta1.jpg" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/gallery/insta2.jpg" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/gallery/instagram3.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/gallery/instagram4.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/gallery/insta5.jpg" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/gallery/insta6.jpg" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-xl-9 col-lg-8">
                        <div className="footer-copy-right">
                            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Developed by Bedarul Islam Laskar.
  </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        
                        <div className="footer-social f-right">
                            <span>Follow Us</span>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/aceconsultancyc/"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fas fa-globe"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default Footer;