import React, { Component } from "react";
import "../../src/index.css";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import Login from "./Login";
import Logout from "./Logout";
import MenuList from "./MenuList";
import Item from "./redux/cart/Item";
import Table from "./redux/table/Table";
import ProductContainer from "./redux/cart/ProductContainer";
import TableContainerData from "./redux/table/TableContainerData";
import Update from "./redux/menu/Update";
import OrderContainer from "./redux/order/OrderContainer";





class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar className="color-nav" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">DashBoard Restaurant</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                
                <Dropdown className="m-1">
      <Dropdown.Toggle>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/menu">Add Menu</Dropdown.Item>
        <Dropdown.Item href="/menulist">MenuList</Dropdown.Item>
 
        
      </Dropdown.Menu>
    </Dropdown>
                
                
                <Dropdown className="m-1">
      <Dropdown.Toggle>
        Table
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/tablelist">View Table</Dropdown.Item>
        <Dropdown.Item href="/table">Add Table</Dropdown.Item>
        <Dropdown.Item href="/view">Delete Table</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/report">Report</Nav.Link>
                
                {
                  localStorage.getItem('login') ? 
                <Nav.Link href="/logout">logout</Nav.Link>
                :
                <Nav.Link href="/login">login</Nav.Link>

                }
                
                
              </Nav>
            </Container>
          </Navbar>
          <div>
            <Switch>
            

              
              
              <Route path="/orders">
                <OrderContainer />
              </Route>
              <Route path="/update/:id">
                <Update />
              </Route>
              <Route path="/table2">
                <Item />
              </Route>
              
              <Route path="/tablelist">
                <ProductContainer />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/view">
                <TableContainerData />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/menulist">
                <MenuList />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
