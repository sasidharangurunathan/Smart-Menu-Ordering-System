import { combineReducers } from "redux";

import cartReducer from './menu/menuReducer';
import table from './table/tableReducer';


const rootReducer = combineReducers({
    
    cartReducers: cartReducer,
    table: table

    
})

export default rootReducer