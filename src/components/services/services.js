import React, { Component } from "react";
import bg from "../../assets/img/gallery/bg1.jpg";

class services extends Component {
  render() {
    return (
      <div
        className="pt-200"
        style={{
          backgroundImage: `url(require("../../assets/img/gallery/bg1.jpg"))`,
        }}
      >
        <div className="pt-200" style={{ width: "100" }}></div>
        <div
          className="profession-caption pt-200"
          styles={{ background: `url(${bg})` }}
        >
          <div className="container blueBack">
            <div className="row align-items-end">
              <div className="col-lg-12 style={{color:rgba(255,0,0,0.3)}} detailsSec section-tittle profession-details">
                <span className="text-light">Our Professional Services</span>
                <h2 className="text-black">
                  We will create Awesome and Modern interior: unique in Assam.
                </h2>
                <p className="textPink">
                  - Rate Analysis as per Govt. Approved rate.
                </p>

                <p className="textPink">- Adjustment as per Market rate.</p>

                <p className="textPink">- Interior Design (Complete work).</p>
                <p className="textPink">
                  - Building Construction: Lumpsum basis/Running
                  Meter/SubContract.
                </p>

                <p className="textPink">- Supplying Material at Lowest Cost.</p>
                <p className="textPink">
                  - Lighting Design along with electification.
                </p>
                <p className="textPink">- Plumbing Work with high Solutions.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="services-area section-padding3">
            <div className="container">
              <div className="row justify-content-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                  <div className="section-tittle text-center mb-70">
                    <span>Our Professional Services</span>
                    <h2>Best Interior Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img src={"../assets/img/gallery/services.jpg"} alt="" />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href="services.html">Lighting</a>
                      </h3>
                      <p className="pera1">Provide Awesome Lighting Designs </p>
                      <p className="pera2">
                        For each project we establish Lighting is the most
                        important aspect for us.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img src={"../assets/img/gallery/interior1.jpg"} alt="" />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href="services.html">Living Rooms</a>
                      </h3>
                      <p className="pera1">
                        Ultra Modern Living Rooms For you.
                      </p>
                      <p className="pera2">
                        Sophas to tables to Tv wardroves everything is included
                        in package.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img
                        src={"../assets/img/gallery/restaurant1.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href={"services.html"}>Restaurants Design</a>
                      </h3>
                      <p className="pera1">Breathtaking Restaurant Designs </p>
                      <p className="pera2">
                        We have build some of our amazing Restaurants in
                        Bangalore.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img
                        src={"../assets/img/gallery/staircase1.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href="services.html">Staircases</a>
                      </h3>
                      <p className="pera1">We do all sorts of starcases </p>
                      <p className="pera2">
                        From spiral to Zee shaped we are at your service.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img src={"../assets/img/gallery/kitchen2.jpg"} alt="" />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href="services.html">Kitchens</a>
                      </h3>
                      <p className="pera1">
                        Aesthetic kitchen Designs for you.{" "}
                      </p>
                      <p className="pera2">
                        We disign simple yet amazing kitchen with full space.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="single-services mb-200">
                    <div className="services-img">
                      <img src={"../assets/img/gallery/bathroom1.jpg"} alt="" />
                    </div>
                    <div className="services-caption">
                      <h3>
                        <a href={"services.html"}>Bathrooms</a>
                      </h3>
                      <p className="pera1">Stunning Bathroom Designs </p>
                      <p className="pera2">
                        We have some of the jawdropping Bathroom Designs to look
                        for.{" "}
                      </p>
                    </div>
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

export default services;
