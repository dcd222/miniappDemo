import { combineReducers } from 'redux';
import { marketingAdInfoReducer } from "mapp_common/marketing/reducer";
import { refundListReducer } from "pcPages/refundManagement/reducer";
// import { chooseListReducer } from "pcPages/itemChoose/reducer";

export default combineReducers({
    marketingAdInfoReducer,
    refundListReducer,
    // chooseListReducer,
});

