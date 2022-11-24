import React from 'react';
import {
    BrowserRouter as Router,
    
    Redirect
  } from "react-router-dom";

const Logout = () => {
    localStorage.clear();
    window.location.reload(false)
  return <Redirect to="/login"/>
};
export default Logout;
