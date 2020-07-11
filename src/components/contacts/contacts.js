import React, { Component } from "react";
import FormField from '../ui/formField';
import { validate } from '../ui/misc.js';
import { firebaseContacts, firebaseDB, firebase } from '../../firebase';

class Contacts extends Component {

  state = {
    customerId:'',
    formType: '',
    formError: false,
    formSuccess: '',
    formdata:{
      name:{
          element:'input',
          value:'',
          config:{
              name:'name_input',
              type: 'text'
          },
          validation:{
              required: true
          },
          valid: false,
          validationMessage:'',
          showlabel: true
      },
      phone:{
          element:'input',
          value:'',
          config:{
              name:'phone_input',
              type: 'text'
          },
          validation:{
              required: true
          },
          valid: false,
          validationMessage:'',
          showlabel: false
      },
      email:{
          element:'input',
          value:'',
          config:{
              name:'email_input',
              type: 'text'
          },
          validation:{
              required: true
          },
          valid: false,
          validationMessage:'',
          showlabel: false
      },
      question:{
          element:'input',
          value:'',
          config:{
              name:'question_input',
              type: 'text'
          },
          validation:{
              required: true
          },
          valid: false,
          validationMessage:'',
          showlabel: true
      }
    }
  }

  successForm = (message) => {
    this.setState({
        formSuccess: message
    });
    setTimeout(()=>{
        this.setState({
            formSuccess:''
        });
    },2000)
  }

  submitForm(event){
    event.preventDefault();
    
    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formdata){
        dataToSubmit[key] = this.state.formdata[key].value;
        //console.log(dataToSubmit[key]);
        formIsValid = 
            this.state.formdata[key].valid && formIsValid;
    }
    //console.log(firebaseContacts);
    if(formIsValid){
        //console.log(dataToSubmit);
          firebaseContacts.push(dataToSubmit).then(()=>{
                this.props.history.push('/')
                //console.log(dataToSubmit);
            }).catch(e=>{
                this.setState({
                    formError: true
                })
            })
       
    } else {
        this.setState({
            formError: true
        })
    }
}
updateForm(element, content = ''){
  const newFormdata = {...this.state.formdata}
  const newElement = { ...newFormdata[element.id]}

  //console.log(newElement);

  if(content === ''){
      newElement.value = element.event.target.value;
  } else {
      newElement.value = content
  }
  
  let validData = validate(newElement)
  newElement.valid = validData[0];
  newElement.validationMessage = validData[1]

  newFormdata[element.id] = newElement;

  this.setState({
      formError: false,
      formdata: newFormdata
  })
}

  render() {
    return (
      <div>
        <div className="contact-section">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <h2 className="text-light"> Contact Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1491.834706404438!2d92.5655708056215!3d24.684953396033137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e258ee0c114b1%3A0xe1fed59433e5362d!2sMazarbhiuiya%20Rd%2C%20Model%20Township%2C%20Gangpar%20Dhumkar%2C%20Hailakandi%2C%20Assam%20788155!5e1!3m2!1sen!2sin!4v1592637898564!5m2!1sen!2sin"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-3 offset-lg-0">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home"></i>
                  </span>
                  <div className="media-body">
                    <h3 className="text-primary">Rangauti Road, Hailakandi.</h3>
                    <p className="text-light">Hailakandi, 788151</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet"></i>
                  </span>
                  <div className="media-body">
                    <h3 className="text-primary">+91 84029 86734</h3>
                    <p className="text-light">Mon to Fri 10am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email"></i>
                  </span>
                  <div className="media-body">
                    <h3 className="text-primary">aceconstruction@gmail.com</h3>
                    <p className="text-light">
                      Send us your feedback and query anytime!
                    </p>
                    <p className="text-light">We are here to help you out!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form
                  className="form-contact contact_form"
                  id="contactForm"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                       <input
                          className="form-control valid bg-dark text-light"
                          name="name"
                          id="name"
                          type="text"
                          value = {this.state.formdata.name.value}
                          onChange = {(event) => this.updateForm({event,id:"name"})}
                          placeholder="Enter your name"
                       />
                       {/*<FormField
                          id={'name'}
                          formdata = {this.state.formdata.name}
                          change = {(element) => this.updateForm(element)}
                       />*/}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                       <input
                          className="form-control valid bg-dark text-light"
                          name="number"
                          id="number"
                          type="text"
                          onChange = {(event) => this.updateForm({event,id:"phone"})}
                          placeholder="Enter your Phone Number"
                       />
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
                          name="email"
                          id="email"
                          type="text"
                          onChange = {(event) => this.updateForm({event,id:"email"})}
                          placeholder="Enter Your Email"
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
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          onChange = {(event) => this.updateForm({event,id:"question"})}
                          placeholder="Enter Message"
                        ></textarea>
                        {/*<FormField
                          id={'question'}
                          formdata = {this.state.formdata.question}
                          change = {(element) => this.updateForm(element)}
                        />*/}
                    </div>
                    </div>
                  </div>
                  <div className="success_label">
                            {this.state.formSuccess}
                        </div>
                            {this.state.formError ? 
                                <div className="error_label">
                                    Something is wrong
                                </div>
                                : ''
                            }
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      onClick={(event)=>this.submitForm(event)}
                      className="button button-contactForm text-light boxed-btn"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
