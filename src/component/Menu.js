import React, { Component } from "react";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'orange',
  fontFamily: 'Times New Roman'
}

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_name: null,
      menu_image: null,
      description: null,
      menu_price: null,
      Discount: null
    };
  }
  create() {
    //console.warn(this.state)
    fetch('http://localhost:8081/saveMenudata', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Added food")
      })
    })
  
  }
  render() {
    return (
      <div  style={{
        
        
        width: '100%',
        height: '100vh'
      }} >
      <br />
        <br />
        <br/>
        <div>
          <div className="card w-50 mx-auto">
            <div className="card-header">
            <h1 style={heading}>Create Menu Food Item</h1>
            </div>
            <div className="card-body">
            <div>
          <input
            onChange={(e) => {
              this.setState({ menu_name: e.target.value });
            }}
            placeholder="Food Name"
          />
        </div>
        <br />
        <br />
        <div>
          <input 
            onChange={(e) => {
              this.setState({ menu_image: e.target.value });
            }}
            placeholder="Food Image"
          />
        </div>
        <br />
        <br />
        <div>
          <input 
            onChange={(e) => {
              this.setState({ description: e.target.value });
            }}
            placeholder="Food Type"
          />
        </div>
        <br />
        <br />

        <div>
          <input
            onChange={(e) => {
              this.setState({ menu_price: e.target.value });
            }}
            placeholder="Food Price"
          />
        </div>
        <br />
        <br />
        <div>
          <input
            onChange={(e) => {
              this.setState({ Discount: e.target.value });
            }}
            placeholder="Discount"
          />
        </div>
        <br />
        <br />

        <button
          onClick={() => {
            this.create();
          }}
        >
          Add Food
        </button>

            </div>
            </div>
            </div>
        <br />
        <br />
        
       
      </div>
    );
  }
}

export default Menu;
