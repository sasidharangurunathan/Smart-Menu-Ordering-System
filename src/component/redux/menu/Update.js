import React, { Component } from "react";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'orange',
  fontFamily: 'Times New Roman'
}

export class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_name: null,
      menu_image: null,
      

      menu_price: null,
      list: null
    };
  }
  componentDidMount(){
    let data=JSON.parse(localStorage.getItem("update"));
    fetch('http://localhost:8081/menuUpdate', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      result.json().then((res)=>{
        this.setState({ menu_name: res[0].menu_name,menu_price: res[0].menu_price, menu_image: res[0].menu_image});
        console.log("daaa",res[0].menu_name)
      })
    })
    
  }
  create() {
    //console.warn(this.state)
    // console.log("ghjk",this.props.match.params.id);
    fetch('http://localhost:8081/editMenu', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Updated food")
      })
    })
  
  }
  render() {
    console.log("as",this.state.menu_price)
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
            <h1 style={heading}>Update Menu Food Item</h1>
            </div>
            <div className="card-body">
            <div>
          <input value={this.state.menu_name}           onChange={(e) => {
              this.setState({ menu_name: e.target.value });
            }}
            placeholder="Food Name"
          />
        </div>
        <br />
        <br />
        <div>
          <input value={this.state.menu_image}
            onChange={(e) => {
              this.setState({ menu_image: e.target.value });
            }}
            placeholder="Food Image"
          />
        </div>
        <br />
        <br />

        <div>
          <input value={this.state.menu_price}
            onChange={(e) => {
              this.setState({ menu_price: e.target.value });
            }}
            placeholder="Food Price"
          />
        </div>
        <br />
        <br />

        <button
          onClick={() => {
            this.create();
          }}
        >
          Update Menu
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

export default Update;
