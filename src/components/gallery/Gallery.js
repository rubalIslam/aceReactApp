import React, { Component } from "react";
//import {bg} from "../../assets/img/gallery/bg.jpg";
import { firebaseGallery, firebase } from "../../firebase";
import { firebaseLooper } from "../ui/misc";
import { Promise } from "core-js";

class Gallery extends Component {
  state = {
    loading: true,
    gallerys: [],
    bedrooms: 2,
  };

  componentDidMount() {
    firebaseGallery.once("value").then((snapshot) => {
      const gallerys = firebaseLooper(snapshot);
      let promises = [];
      console.log(gallerys);

      for (let key in gallerys) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref("gallery")
              .child(gallerys[key].image)
              .getDownloadURL()
              .then((image) => {
                gallerys[key].image = image;
                resolve();
              });
          })
        );
      }

      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          gallerys,
        });
      });
    });
  }

  render() {
    const bg = "./assets/img/gallery/bg.jpg";
    return (
      <div className="gallery container pt-200">
        <div className="row">
          {this.state.gallerys.map((gallery, i) => (
            <div className="col-lg-4 col-md-4 col-md-6 pt-20 pb-10 cardGalleryMain">
              <div className="room-items cardGallery">
                <div
                  className="room-img imageclass set-bg"
                  style={{ width: 200, height: 200 }}
                >
                  {/* <img
                    style={{ width: 400, height: 300 }}
                    className="imageclass"
                    src="./assets/img/gallery/bg.jpg"
                 />*/}
                  <img className="imageGal" src={gallery.image} />
                </div>
                <div className="room-text" style={{ width: 200, height: 200 }}>
                  <div
                    className="room-details"
                    style={{ width: 200, height: 120 }}
                  >
                    <div className="roomTitle pl-2">
                      <h5 style={{ color: "black", fontWeight: "bold" }}>
                        {gallery.heading}
                      </h5>
                      <div className="row">
                        <div className="col-lg-6 text-white">
                          <i className="flaticon-placeholder"></i>{" "}
                          <span>Size</span>
                        </div>
                        <div className="large-width col-lg-6">
                          <i className="flaticon-cursor"></i>{" "}
                          <span
                            className="text-white"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            {gallery.bhk}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="roomFeature">
                    <div className="room-info row">
                      <div className="beds col-lg-4 text-white">
                        <p style={{ fontSize: 10 }} className="text-white">
                          <span>{gallery.bhk.charAt(0)}</span> Bedroom
                        </p>
                        <img src="./assets/img/rooms/bed.png" alt="" />
                      </div>
                      <div className="baths  col-lg-4">
                        <p style={{ fontSize: 10 }} className="text-white">
                          1 Bathroom
                        </p>
                        <img src="./assets/img/rooms/bath.png" alt="" />
                      </div>
                      <div className="garage  col-lg-4">
                        <p style={{ fontSize: 10 }} className="text-white">
                          1 Kitchen
                        </p>
                        <img src="./assets/img/rooms/garage.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="room-price pl-10">
                    <p className="text-white">Construction Cost</p>
                    <span className="text-white">₹{gallery.cost}</span>
                  </div>
                  <a href="#" className="site-btn btn-line pl-10">
                    View Property
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
