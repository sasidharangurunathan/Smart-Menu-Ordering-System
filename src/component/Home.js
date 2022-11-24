import React, { Component } from 'react'
import '../../src/index.css';
import '../../src/App.css'
import image from "../../src/image/home.jpg"

export class Home extends Component {
  render() {
    return (
      <div  style={{
        backgroundImage: 'url('+image+')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>Home</div>
    )
  }
}



export default Home