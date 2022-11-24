import React, { Component } from "react";
import ItemCart from './Item';
import { Table } from "react-bootstrap";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
//import {Routes, Route, useNavigate} from 'react-router-dom';

export class TableContainerData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    let arr = JSON.parse(localStorage.getItem("login"));
    //console.log(JSON.stringify({ userDetails: arr }));
    fetch("http://localhost:8081/selectAllTable").then((response) => {
        response.json().then((result) => {
          // console.warn(result)
          this.setState({ list: result });
        });
      });
      
  }

  render() {
    console.log("dser", localStorage.getItem("login"));
    console.log("state", this.state);
    return (
      <div style={{
        
        
        width: '100%',
        height: '100vh'
      }}  className="App">
      <br/><br/>
      <Nav.Link href="/table"><Button>AddTable</Button></Nav.Link>
        
        {this.state.list ? (
          <div>
          <section className='py-4 container'>
                <div className='row justify-content-center'>
          {
                this.state.list.map((item, index) => 
          <ItemCart 
                            img={item.img}
                            title={item.table_name}
                            table_id={item.table_id}
                            desc={item.desc} 
                            price={item.price} 
                            status={item.table_status}
                            item={item} 
                            key={index}
                           

                            

                        />
        )}
        </div>
          </section>
        
          </div>
          
        ) : (
          <p>Please Wait</p>
        )}
        
      </div>
      
    );
  }
}

export default TableContainerData;
