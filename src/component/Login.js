import React, { Component } from "react";

// import { TextField } from "@mui/material";
import image from "../image/loginbg.jpg";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  
  Redirect
} from "react-router-dom";
import Home from "./Home";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'red',
  fontFamily: 'Times New Roman'
}
//import useNavigate from 'react-router-dom';
export class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  

  login() {
    //const navigate = useNavigate
    console.warn(this.state);
    let array = JSON.stringify(this.state);

    fetch("http://localhost:8081/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: array,
    }).then((result) => {
      //var res=JSON.stringify(result)
      // if(res.error){
      //   alert(res.error);
      //   return
      // }else{
      //   console.log(res)
      // }
      result.json().then((res) => {
        if (res.error) {
          alert(res.error);
          return;
        } else {
          console.log(res.FirstName);
          // if (res != "") {
          //   //navigate('/menu')
          // }
          localStorage.setItem('login',JSON.stringify(this.state))
          alert('Welcome '+res.FirstName);
          window.location.reload(false)
          
          console.log("check",this.props);
          return  Nav="/table"
         
        }
      });
    });
  }
  render() {
    return (
      <div style={{
        
        
        width: '100%',
        height: '100vh'
      }} className="App">
      
        <br />
        <br />
        <br/>
        <h1 className="text-color-primary" >Login Page</h1>
        <input
          type="text"
          placeholder="enter name"
          name="user"
         
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.login();
          }}
        >
        
        
          Login
        </button>

        {/* <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          type="email"
          onChange={(value) => {
            this.setState({
              props: "email",
              email: value.target.value,
            });
          }}
        /> */}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Log;
