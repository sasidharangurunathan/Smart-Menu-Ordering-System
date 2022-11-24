import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    ADD_ITEM,
    RETURN_ITEMS,
    CHANGE_USER,
    CHANGE_USER_ERROR,
  } from "./menuType";
  
  const initialState = {
    loading: false,
    users: [],
    update: [],
    error: "",
    userItems: [],
    datas: [],
    user: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
     
      case CHANGE_USER_ERROR:
        console.log("quantityERROR", state.users);
        return {
          ...state,
          user: state.users.filter((item) => {
            if (action.payload.uid == item.id) {
              item.menu_quantity = "";
            }
          }),
  
          // users.menu_quantity: action.payload
        };
  
      case FETCH_USERS_SUCCESS:
        console.log("reducers1111", action.payload);
        return {
          ...state,
          loading: false,
          users: action.payload,
  
          error: "",
        };
      case FETCH_USERS_FAILURE:
        console.log("reducers", action.payload);
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
        };
     
      
      default:
        return {
          ...state,
        };
    }
  };
  
  export default reducer;
