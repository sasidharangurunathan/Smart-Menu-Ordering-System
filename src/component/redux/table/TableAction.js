import axios from "axios";
import {
  
   
    FETCH_CUSTOMER_FAILURE,
    USER_INPUT_CHANGE,

    FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
   
  } from "./TableType";
  export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  };
  
  const fetchUsersSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  
  const fetchUsersFailure = (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error,
    };
  };
  

const fetchCustomerFailure = (error) => {
    return {
      type: FETCH_CUSTOMER_FAILURE,
      payload: error,
    };
  };
  export const userInputChange = ({ props, value }) => {
    return {
      type: USER_INPUT_CHANGE,
      payload: { props, value },
    };
  };

export const Register = (first, last, email, mobile) => {
    console.log("payloadsaga", first, last, email, mobile);
    // let req = JSON.stringify({
    //   menu_name: payload.menu_name,
    //   menu_price: payload.menu_price,
    //   menu_quantity: payload.menu_quantity,
    // });
    let formData = new FormData();
    formData.append("FirstName", first);
    formData.append("LastName", last);
    formData.append("Email", email);
    formData.append("Mobile", mobile);
    console.log((formData));
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    return (dispatch) => {
      dispatch(Register);
      console.log("saga12");
  
      axios
        .post("http://localhost:8081/register", formData, config)
        .then((res) => {
          console.log("saga12", res);
          //const customer = res.data;
          //dispatch(fetchCustomerSuccess(customer));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchCustomerFailure(errorMsg));
        });
    };
  };

  export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest);
      axios
        .get("http://localhost:8081/selectAllTable")
        .then((response) => {
          console.log("saga", response);
          const users = response.data;
          // const menuList = JSON.stringify(response.data)
          console.log('api data',users)
          // localStorage.setItem('apiMenuList',menuList)
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchUsersFailure(errorMsg));
        });
    };
  };