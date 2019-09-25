import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import axios from 'axios';

export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      pword: ''
    }
  }

  handleClick(event) {
    var Url = "http://localhost:3000/api/";
    var info={
    "Email":this.state.Email,
    "pword":this.state.pword
    }
    axios.post(Url+'person', info)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");}
    else if(response.data.code == 204){
      alert("Username does not match password")}
    else{
     alert("Username and password  does not exist");}
    })
    .catch(function (error) {
    console.log(error);
    });
    }


  render() {
    return (
      <div className="text-light">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form className="justify-content-center">
                <p className="h5 text-center mb-4 c">Login</p>
                <div className="text-light">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                </div>
                <div className="text-center text-light">
                <button type="submit" class="btn btn-success " onClick={(event) => this.handleClick(event)}>Login</button>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}






export default login;
