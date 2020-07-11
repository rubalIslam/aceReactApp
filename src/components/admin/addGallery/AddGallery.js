import React, { Component } from "react";

import Fileuploader from "../../ui/fileUploader";
import { validate } from "../../ui/misc";
import { firebaseGallery, firebaseDB, firebase } from "../../../firebase";

class AddGallery extends Component {
  state = {
    designId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formdata: {
      heading: {
        element: "input",
        value: "",
        config: {
          name: "heading_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      bhk: {
        element: "input",
        value: "",
        config: {
          name: "bhk_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      cost: {
        element: "input",
        value: "",
        config: {
          name: "cost_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      details: {
        element: "input",
        value: "",
        config: {
          name: "details_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: false,
      },
      image: {
        element: "image",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
  };
  /*
      componentDidMount(){
        const galleryId = this.props.gallery.params.id;

        if(!playerId){
            this.setState({
                formType:'Add Gallery'
            })
        } else {
           firebaseDB.ref(`gallery/${galleryId}`).once('value')
           .then(snapshot => {
               const playerData = snapshot.val();

                firebase.storage().ref('players')
                .child(playerData.image).getDownloadURL()
                .then( url => {
                    this.updateFields(playerData,playerId,'Edit player',url)
                }).catch( e => {
                    this.updateFields({
                        ...playerData,
                        image:''
                    },playerId,'Edit player','')
                })
           })
        }

    }
*/
  successForm = (message) => {
    this.setState({
      formSuccess: message,
    });
    setTimeout(() => {
      this.setState({
        formSuccess: "",
      });
    }, 2000);
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      //console.log(dataToSubmit[key]);
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    //console.log(firebaseContacts);
    if (formIsValid) {
      //console.log(dataToSubmit);
      firebaseGallery
        .push(dataToSubmit)
        .then(() => {
          this.props.history.push("/");
          //console.log(dataToSubmit);
        })
        .catch((e) => {
          this.setState({
            formError: true,
          });
        });
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  updateForm(element, content = "") {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    //console.log(newElement);

    if (content === "") {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  }
  resetImage = () => {
    const newFormdata = { ...this.state.formdata };
    newFormdata["image"].value = "";
    newFormdata["image"].valid = false;

    this.setState({
      defaultImg: "",
      formdata: newFormdata,
    });
  };

  storeFilename = (filename) => {
    this.updateForm({ id: "image" }, filename);
  };

  render() {
    return (
      <div className="pt-120">
        <h1 className="pl-100">Add Gallery</h1>
        <div className="row text-light pl-100">
          <div className="col-lg-8">
            <form className="form-contact contact_form" id="contactForm">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <Fileuploader
                      dir="gallery"
                      tag={"Gallery image"}
                      defaultImg={this.state.defaultImg}
                      defaultImgName={this.state.formdata.image.value}
                      resetImage={() => this.resetImage()}
                      filename={(filename) => this.storeFilename(filename)}
                    />
                    <input
                      className="form-control valid bg-dark text-light"
                      name="heading"
                      id="heading"
                      type="text"
                      value={this.state.formdata.heading.value}
                      onChange={(event) =>
                        this.updateForm({ event, id: "heading" })
                      }
                      placeholder="Enter heading"
                    />
                    {/*<FormField
                          id={'name'}
                          formdata = {this.state.formdata.name}
                          change = {(element) => this.updateForm(element)}
                       />*/}
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <p className="text-white">Enter 1BHK 2BHK or 3BHK</p>
                    <input
                      className="form-control valid bg-dark text-light"
                      name="bhk"
                      id="bhk"
                      type="text"
                      onChange={(event) =>
                        this.updateForm({ event, id: "bhk" })
                      }
                      placeholder="Enter bhk"
                    />
                    {/*<select name="bhk" id="bhk" style={{backgroundColor:"steelblue", height:"45px", border:"none",borderRadius:"3px", width:"100%"}}>
                      <option value="1BHK">1BHK Design</option>
                      <option value="2BHK">2BHK Design</option>
                      <option value="3BHK">3BHK Design</option>
                      <option value="Assamtypecorridoor">AssamType with Corridoor</option>
                    </select>/*}
                    {/* <FormField
                          id={'phone'}
                          formdata = {this.state.formdata.phone}
                          change = {(element) => this.updateForm(element)}
                       />*/}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control bg-dark text-light"
                      name="cost"
                      id="cost"
                      type="text"
                      onChange={(event) =>
                        this.updateForm({ event, id: "cost" })
                      }
                      placeholder="Enter cost"
                    />
                    {/*<FormField
                          id={'email'}
                          formdata = {this.state.formdata.email}
                          change = {(element) => this.updateForm(element)}
                      />*/}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100 bg-dark text-light"
                      name="details"
                      id="details"
                      cols="30"
                      rows="9"
                      onChange={(event) =>
                        this.updateForm({ event, id: "details" })
                      }
                      placeholder="Enter Details"
                    ></textarea>
                    {/*<FormField
                          id={'question'}
                          formdata = {this.state.formdata.question}
                          change = {(element) => this.updateForm(element)}
                        />*/}
                  </div>
                </div>
              </div>
              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something is wrong</div>
              ) : (
                ""
              )}
              <div className="form-group mt-3">
                <button
                  type="submit"
                  onClick={(event) => this.submitForm(event)}
                  className="button button-contactForm text-light boxed-btn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGallery;
