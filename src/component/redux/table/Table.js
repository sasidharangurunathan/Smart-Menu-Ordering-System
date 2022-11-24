import React, { Component } from "react";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import Item from "../cart/Item";
import { Button } from "react-bootstrap";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'orange',
  fontFamily: 'Times New Roman'
}

export class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table_name: null,
      table_sheet: null,

     
    };
  }
  
  create() {
    //console.warn(this.state)
    fetch('http://localhost:8081/addTable', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Your Data Inserted!")
       
        window.location.reload(false);
        
        
      })
    })
  
  }
  render() {
    return (
      <div style={{
        
        
        width: '100%',
        height: '100vh'
      }}  className="App">
      <br />
        <br />
        <br/>
        <div>
          <div className="card w-50 mx-auto">
            <div className="card-header">
            <h1 style={heading}>Create Table Sheet</h1>
            </div>
            <div className="card-body">
            <div>
          <input
            onChange={(e) => {
              this.setState({ table_name: e.target.value });
            }}
            placeholder="Table Name"
          />
        </div>
        <br />
        
        <div>
          <input 
            onChange={(e) => {
              this.setState({ table_sheet: e.target.value });
            }}
            placeholder="table Sheet"
          />
        </div>
        <br />
       

       
       

        <Button
          onClick={() => {
            this.create();
          }}
          to="/view"
        >
          Add Food
        </Button>

            </div>
            </div>
            </div>
        <br />
        <br />
        
       
      </div>
    );
  }
}

export default Table;
