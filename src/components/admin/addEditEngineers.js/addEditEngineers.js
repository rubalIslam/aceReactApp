import React, { Component } from "react";
import AdminLayout from "../../../Hoc/adminLayout";

import FormField from "../../ui/formField";
import { validate } from "../../ui/misc";

import Fileuploader from "../../ui/fileUploader";
import { firebaseEngineers, firebaseDB, firebase } from "../../../firebase";

class AddEditEngineers extends Component {
  state = {
    engineerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Engineer Name",
          name: "name_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Engineer Last name",
          name: "lastname_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      designation: {
        element: "input",
        value: "",
        config: {
          label: "Engineer Designation",
          name: "details_input",
          type: "text",
        },
        validation: {
          required: false,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      degree: {
        element: "input",
        value: "",
        config: {
          label: "degree",
          name: "degree",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
      },
      details: {
        element: "input",
        value: "",
        config: {
          label: "details",
          name: "details",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
        showlabel: true,
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

  updateFields = (engineer, engineerId, formType, defaultImg) => {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = engineer[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      engineerId,
      defaultImg,
      formType,
      formdata: newFormdata,
    });
  };

  componentDidMount() {
    const engineerId = this.props.match.params.id;

    if (!engineerId) {
      this.setState({
        formType: "Add engineer",
      });
    } else {
      firebaseDB
        .ref(`engineers/${engineerId}`)
        .once("value")
        .then((snapshot) => {
          const engineerData = snapshot.val();
          console.log(engineerData);

          firebase
            .storage()
            .ref("engineers")
            .child(engineerData.image)
            .getDownloadURL()
            .then((url) => {
              this.updateFields(engineerData, engineerId, "Edit Engineer", url);
            })
            .catch((e) => {
              this.updateFields(
                {
                  ...engineerData,
                  image: "",
                },
                engineerId,
                "Edit Engineer",
                ""
              );
            });
        });
    }
  }

  updateForm(element, content = "") {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

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
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      if (this.state.formType === "Edit Engineer") {
        firebaseDB
          .ref(`engineers/${this.state.engineerId}`)
          .update(dataToSubmit)
          .then(() => {
            this.successForm("Engineers added");
          })
          .catch((e) => {
            this.setState({ formError: true });
          });
      } else {
        firebaseEngineers
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push("/dashboard");
          })
          .catch((e) => {
            this.setState({
              formError: true,
            });
          });
      }
    } else {
      this.setState({
        formError: true,
      });
    }
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
      <div className="container pt-200">
        {
          <div className="editEngineers">
            <h2>{this.state.formType}</h2>
            <form className="form-contact contact_form" id="contactForm">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                  <p className="text-white">Upload your Pic</p>
                    <Fileuploader
                      dir="engineers"
                      tag={"Engineers image"}
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
                      value={this.state.formdata.name.value}
                      onChange={(event) =>
                        this.updateForm({ event, id: "name" })
                      }
                      placeholder="Engineers Name"
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
                    <input
                      className="form-control valid bg-dark text-light"
                      name="lastname"
                      id="lastname"
                      type="text"
                      value={this.state.formdata.lastname.value}
                      onChange={(event) =>
                        this.updateForm({ event, id: "lastname" })
                      }
                      placeholder="Engineer Lastname"
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
                  <p className="text-white">Enter B.Tech or M.Tech, etc</p>
                    <input
                      className="form-control bg-dark text-light"
                      name="designation"
                      id="designation"
                      type="text"
                      value={this.state.formdata.designation.value}
                      onChange={(event) =>
                        this.updateForm({ event, id: "designation" })
                      }
                      placeholder="Enter Designation"
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
                  <p className="text-white">Enter HVAC or AutoCad, etc</p>
                    <input
                      className="form-control bg-dark text-light"
                      name="degree"
                      id="degree"
                      type="text"
                      value={this.state.formdata.degree.value}
                      onChange={(event) =>
                        this.updateForm({ event, id: "degree" })
                      }
                      placeholder="Enter Specialization"
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
                  <p className="text-white">Enter Details about Engineer</p>
                    <textarea
                      className="form-control w-100 bg-dark text-light"
                      name="details"
                      id="details"
                      cols="30"
                      rows="9"
                      value={this.state.formdata.details.value}
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
                  Save
                </button>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default AddEditEngineers;
