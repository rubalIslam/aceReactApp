import React, { Component } from "react";
import { firebaseEngineers, firebase } from "../../firebase";
import { firebaseLooper } from "../ui/misc";
import { Promise } from "core-js";

class Aboutus extends Component {

    state = {
        loading: true,
        engineers: []
      };
    
      componentDidMount() {
        firebaseEngineers.once("value").then((snapshot) => {
          const engineers = firebaseLooper(snapshot);
          let promises = [];
          console.log(engineers);
    
          for (let key in engineers) {
            promises.push(
              new Promise((resolve, reject) => {
                firebase
                  .storage()
                  .ref("engineers")
                  .child(engineers[key].image)
                  .getDownloadURL()
                  .then((image) => {
                    engineers[key].image = image;
                    resolve();
                  });
              })
            );
          }
    
          Promise.all(promises).then(() => {
            this.setState({
              loading: false,
              engineers,
            });
          });
        });
      }

  render() {
    return (
      <div>
        <div className="container pt-200">
          <div className="row justify-content-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-70">
                <span>Professionals</span>
                <h2>Our Engineers and Designers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.engineers.map((engineer, i) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={engineer.image} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">
                        {engineer.name} {engineer.lastname}
                      </a>
                    </h3>
                    <span>
                      {engineer.designation} ({engineer.degree})
                    </span>
                    <span>{engineer.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutus;
