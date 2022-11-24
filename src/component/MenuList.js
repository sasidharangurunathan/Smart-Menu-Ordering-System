import React, { Component } from "react";
import { Button, Table, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import image from "../image/order1.jpeg";

import {
  BrowserRouter as Router,
  
  Link,
  
  
  Redirect
} from "react-router-dom";
import { changeMenu } from "./redux/menu/menuAction";
//import {Routes, Route, useNavigate} from 'react-router-dom';

export class MenuList extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }
  
  componentDidMount() {
    fetch("http://localhost:8081/selectAllMenu").then((response) => {
      response.json().then((result) => {
        // console.warn(result)
        this.setState({ list: result });
      });
    });
  }
  addfood() {
    
    window.parent.location = window.parent.location.href;
  }
   change(props){ 
    console.log("propswsss",props) 
   
    fetch('http://localhost:8081/deleteMenu', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(props)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Deleted Success")
        window.location.reload(false)
      })
    })
  

  }
   change1(props){ 
    localStorage.setItem('update',JSON.stringify(props))

  }
  
  
  render() {
    
    console.log("state", this.state);
    return (
      <div style={{
        
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>
      <div className="container">
      
        <br />
        <br />
        <h1>List Of Food</h1>
        {/* <Button onClick={()=>this.addfood()}>AddFood<Link  variant="black" to="/menu" refresh="true">A</Link></Button> */}
        
        {this.state.list ? (  
          <div>
          <Table striped bordered hover>
          <thead>
        <tr>
          <th>#</th>
          <th>MenuName</th>
          <th>MenuImage</th>
          <th>MenuPrice</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      
        <tbody>
            {
                this.state.list.map((item, i) => 
              //<div className="list-wrapper">
              //<span>{item.menu_name}</span>
              //<span>{item.menu_image}</span>
              //<span>{item.description}</span>
              //<span>{item.menu_quantity}</span>
              //</div> 
              item.menu_status==1  && (
         
              
              <tr>
                <td>{i}</td>
                <td>{item.menu_name}</td>
                <td>{item.menu_image}</td>
                <td>{item.menu_price}</td>
                <td><Nav.Link onClick={() => this.change1({data:item.id})} href={"/update/"+item.id}>Update</Nav.Link></td>
                {/* <td><Button className="" onClick={() => this.change1({data:item.id})}
                >Update</Button></td> */}
                <td><Button className="" variant="danger"
                onClick={() => this.change({data:item.id})}
                >Delete</Button></td>
                {/* <td><Button className="" variant="danger"
                onClick={() => changeMenu(item.id)}
                >Delete</Button></td> */}
               
                
                
              </tr>
                )
           
            )}
            </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait</p>
        )}
        </div>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  const {
    first,
    items,
    itemsError,
    users,
    cart,
    cartPage,
    error,
    
    
  } = state.cartReducers;

  return {
    first,
    items,
    itemsError,
    users,
    cart,
    cartPage,
    error,
    
    
  };
};


const mapDispatchToProps = {
  
  changeMenu: changeMenu,
};

  

export default  connect(mapToStateProps, mapDispatchToProps)(MenuList);;
