import React, { Component } from "react";
import "../../src/index.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
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
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
            <NavDropdown.Item href="/menu">Add Menu</NavDropdown.Item>
              
              <NavDropdown.Item href="/menulist">MenuList</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
                <NavDropdown
              id="nav-dropdown-dark-example"
              title="Table"
              menuVariant="dark"
            >
            <NavDropdown.Item href="/tablelist">View Table</NavDropdown.Item>
              
              <NavDropdown.Item href="/table">Add Table</NavDropdown.Item>
              <NavDropdown.Item href="/view">Delete Table</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          
                
                
                
                
               
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
