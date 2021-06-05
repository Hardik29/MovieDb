import React, { Component } from "react";
import LoginComponent from './LoginComponent';

export default class LoginForm extends Component {
  state = {
    account:{name:"", password:""},
    errors:{name:"", password:""}
  }

  handleChange = (e) => {
       const errors = {...this.state.errors}
       const errorsMessage = this.validateProperty(e.currentTarget);
       if(errorsMessage) errors[e.currentTarget.name] = errorsMessage;
       else delete errors[e.currentTarget.name]
       
       const account = {...this.state.account}
       account[e.currentTarget.name] = e.currentTarget.value
       this.setState({account, errors})
  }

  validateProperty = (input) => {
    if(input.name === 'name'){
      if(input.value.trim() === '') {return "username is required";}
    }
    if(input.name === 'password'){
      if(input.value.trim() === '') {return "password is required";}
    }
  }

  validate= () =>{
    const errors ={}
    if(this.state.account.name.trim() === "")
    errors.name = "username is required";
    if(this.state.account.password.trim() === "")
    errors.password = "paswword is required";

    return (Object.keys(errors).length === 0 ? null : errors )
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors:errors || {}})
  }
  render() {
    return (
      <div className="flex justify-center items-center mt-32">
        <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
         <LoginComponent type={"text"} id={"Input"} focus={true} name={"name"} errors={this.state.errors.name} value={this.state.account.name}  handleChange={this.handleChange}>Full Name</LoginComponent>
         <LoginComponent type={"password"}  id={"Pwd"}   focus={false}  name={"password"} errors={this.state.errors.password}  value={this.state.account.password}  handleChange={this.handleChange}>Password{" "}</LoginComponent>
         <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400  text-white font-bold py-2 px-4 rounded"
                type="submit"
                >
               Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
