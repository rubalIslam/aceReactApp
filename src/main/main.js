import React, { Component } from "react";
import bg from '../assets/img/gallery/bg1.jpg';

class Main extends Component {
  render() {
    return (
      <div className="">
        <div className="slider-area p-5 mainSec">
          <div className="slider-active dot-style mainSec">
            <div className="single-slider slider-height hero-overly d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero__caption firstHeadText">
                      <span data-animation="fadeInLeft" data-delay=".4s">
                        Welcome to Ace Consultant & Construction
                      </span>
                      <h1 className="banner" data-animation="fadeInLeft" data-delay=".6s">
                        Hailakandi's First Interior Design, Construction &  
                        Consultant.
                      </h1>
                      <h2 className="banner2" data-animation="fadeInLeft" data-delay=".8s">
                        Modern Interior & Design Solutions
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="single-slider slider-height hero-overly d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".4s">
                        Welcome to Ace Consultant & Construction
                      </span>
                      <h1 data-animation="fadeInLeft" data-delay=".6s">
                        We Make Your Home For You
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
    </div>*/}
          </div>

          <div className="video-icon">
            <a
              className="popup-video btn-icon"
              href={"https://www.youtube.com/watch?v=aceconstruction"}
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>

        <div
          className="our-info-area pt-170 pb-100 section-bg bg-darkk"
          data-background={"../assets/img/gallery/section_bg02.jpg"}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>Estimate With Quantity Survey</h4>
                    <p>
                      For each project we design the best you could get in the{" "}
                      <span>entire Barak Valley.</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>Structural Design</h4>
                    <p>
                      From <span>Solid works</span> to <span>Etabs</span>, We
                      have all the professionals. The best in <span>India</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>
                      <span>2D & 3D</span> drawings
                    </h4>
                    <p>
                      Professional softwares used for your Home:{" "}
                      <span>Sketch up, Autocad, etc</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="professional-services section-bg d-none d-md-block blueBack"
          
        >{/*dataBackground={"../assets/img/gallery/bg1.jpg"} */}</div>
        <div className="profession-caption blueBack" styles={{ background:`url(${bg})`}}>
          <div className="container blueBack">
            <div className="row align-items-end blueBack">
              <div className="col-lg-12 detailsSec section-tittle profession-details">
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
        <div className="col-lg-12 col-md-6 discover">
          <a href="about.html" className="btn btn3">
            Discover More About Ace Construction
          </a>
        </div>

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
                    <p className="pera1">Ultra Modern Living Rooms For you.</p>
                    <p className="pera2">
                      Sophas to tables to Tv wardroves everything is included in
                      package.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="single-services mb-200">
                  <div className="services-img">
                    <img src={"../assets/img/gallery/restaurant1.jpg"} alt="" />
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
                    <img src={"../assets/img/gallery/staircase1.jpg"} alt="" />
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
                    <p className="pera1">Aesthetic kitchen Designs for you. </p>
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

        <div className="gallery-area">
          <div className="container-fluid p-0 fix">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery11.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href={"gallery.html"}>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery12.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href="gallery.html">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery13.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href="gallery.html">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery14.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href="gallery.html">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery15.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href="gallery.html">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div
                    className="gallery-img"
                    style={{
                      backgroundImage:
                        "url(../assets/img/gallery/gallery16.jpg)",
                    }}
                  ></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3>
                        <span>Interior</span>Gallery
                      </h3>
                      <a href="gallery.html">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-area section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle text-center mb-70">
                  <span>Professionals</span>
                  <h2>Our Engineers and Designers</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={"../assets/img/gallery/jewel.jpg"} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Jewel Ahmed Choudhury</a>
                    </h3>
                    <span>B.Tech (HVAC)</span>
                    <span>2 Years experience in Interior Designs</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={"../assets/img/gallery/imdad.jpg"} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Imdadur Rahman Laskar</a>
                    </h3>
                    <span>B.Tech (Civil)</span>
                    <span>2.5 years experience in Lighting Designs</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={"../assets/img/gallery/kamrul.jpg"} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Kamrul Islam Mazarbhuiya</a>
                    </h3>
                    <span>B.Tech (Civil)</span>
                    <span>2 years experience in Autocad(3D Design Expert)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src={"../assets/img/gallery/comma1.png"} alt="" />
                        <p>
                          Thanks to Ace Construction, I have gained a lot of
                          customers because of the awesome interiors of my
                          restaurant.I am very satisfied with the co-operation
                          and support they provide during the construction.
                        </p>
                      </div>

                      <div className="testimonial-founder  ">
                        <div className="founder-img">
                          <span>
                            <strong>Syed Khurshid, </strong> Owner of Khazana
                            Foods, Bangalore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src={"../assets/img/gallery/comma1.png"} alt="" />
                        <p>
                          Ace Construction have done a great job in renovating
                          my old house.My house looks like a mansion or villa, I
                          also liked the extreme hospitability of Ace
                          Construction workers. I would like to recomend then to
                          everyone.{" "}
                        </p>
                      </div>

                      <div className="testimonial-founder  ">
                        <div className="founder-img">
                          <span>
                            <strong>Laxmi Reddy, </strong> Residence of -
                            Kormangla, Bangalore{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="brand-area pt-120 pb-120">
          <div className="container">
            <div className="brand-active brand-border pt-50 pb-40">
              <div className="single-brand">
                <img src={"../assets/img/gallery/autocad2.png"} alt="" />
              </div>
              <div className="single-brand">
                <img src={"../assets/img/gallery/etabs1.png"} alt="" />
              </div>
              <div className="single-brand">
                <img src={"../assets/img/gallery/brand.png"} alt="" />
              </div>
              <div className="single-brand">
                <img src={"../assets/img/gallery/solidworks1.png"} alt="" />
              </div>
            </div>
          </div>
                  </div>*/}

        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Are you Searching For a Top Consultant in Hailakandi?</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="#" className="btn btn-black f-right">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="home-blog-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-70">
                  <span>Our latest Designs</span>
                  <h2>Our recent Designs</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={"../assets/img/gallery/design1.png"} alt="" />
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href={"blog_details.html"}>
                          Home Designs, At you will.
                        </a>
                      </h3>
                      <a href="blog_details.html" className="more-btn">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={"../assets/img/gallery/design2.jpg"} alt="" />
                    </div>
                    <div className="blog-cap">
                      <h3>
                        <a href="blog_details.html">
                          Floor Designs, At your will.
                        </a>
                      </h3>
                      <a href="blog_details.html" className="more-btn">
                        Read more
                      </a>
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

export default Main;
