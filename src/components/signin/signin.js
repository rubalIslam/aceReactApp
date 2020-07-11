import React, { Component } from 'react';
import { firebase } from '../../firebase';

import FormField from '../ui/formField';
import { validate } from '../ui/misc';

class SignIn extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:''
            }
        }

    }

    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm(event){
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid){          
            firebase.auth()
            .signInWithEmailAndPassword(
                dataToSubmit.email,
                dataToSubmit.password
            ).then(()=>{
                this.props.history.push('/dashboard')
            }).catch(error =>{
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

    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{marginTop:100,paddingTop:200, padding: 50}}>

                    <form onSubmit={(event)=> this.submitForm(event)}>

                        <h2>Please Log in to go to Dashboard</h2>

                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element)=> this.updateForm(element)}
                        />
                            { this.state.formError ? 
                                <div className="error_label bg-danger">Email or Password is incorrect, try again.</div>
                                :null
                            }
                            <div className="header-btns f-right">

                            </div>
                        <button onClick={(event)=> this.submitForm(event)}
                        style={{marginTop:20}}
                             className="btn header-btn w-100"
                        >LOG IN</button>
                    </form>

                </div>     
            </div>
        );
    }
}

export default SignIn;