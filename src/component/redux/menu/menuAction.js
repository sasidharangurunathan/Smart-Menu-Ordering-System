import axios from "axios";
import {CHANGE_MENU,
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,} from './menuType';

export function changeMenu1(payload) {
    return {
      type: CHANGE_MENU,
      payload
    };
  }
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

  export const changeMenu = (payload) => {
    console.log("payload", payload);
    return (dispatch) => {
      dispatch(fetchUsersRequest);
      console.log("saga12");
      axios
        .get("http://localhost:8081/deleteMenu", payload)
        .then((response) => {
          console.log("saga12", response);
          // const users = response.data
          // dispatch(fetchCartSuccess(users))
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchUsersFailure(errorMsg));
        });
    };
  };
    

export const changeMenu2 = (payload) => {
    console.log("payloadsaga", payload);
    let req = JSON.stringify({
      id: payload,
      
    });
    let formData = new FormData();
    formData.append("id", payload);
    
    console.log(formData);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    return (dispatch) => {
      dispatch(changeMenu);
      console.log("saga12");
      
      axios
        .post("http://localhost:8081/deleteMenu", req, config)
        .then((res) => {
          console.log("saga12", res);
          const users = res.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchUsersFailure(errorMsg));
        });
    };
  };
  