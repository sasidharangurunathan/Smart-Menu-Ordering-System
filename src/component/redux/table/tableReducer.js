import {
  
    ADD_CUSTOMER,
    FETCH_CUSTOMER_FAILURE,
    USER_INPUT_CHANGE,
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
  } from "./TableType";
  
  const initialState = {
    loading: false,
    items: "",
    itemsError: "",
    error: "",
    first: "",
    last: "",
    email: "",
    mobile: "",
    customer: [],
    users: [],
    user: [],
  };
  
  const tableReducers = (state = initialState, action) => {
    switch (action.type) {
      case USER_INPUT_CHANGE:
        return {
          ...state,
          [action.payload.props]: action.payload.value,
        };
      
      case ADD_CUSTOMER:
        console.log("cartPacereducer1111", action.payload);
  
        return {
          ...state,
          loading: false,
          customer: action.payload,
          error: "",
        };
      case FETCH_CUSTOMER_FAILURE:
        console.log("reducers", action.payload);
        return {
          ...state,
          loading: false,
          customer: [],
  
          error: action.payload,
        };
  
        case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
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
        return state;
    }
  };
  
  export default tableReducers;
  