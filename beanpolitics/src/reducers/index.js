import { combineReducers } from 'redux';
import covfefeReducer from "./covfefeReducer";
import voterInfoReducer from "./voterInfoReducer";

export default combineReducers({
    covfefe: covfefeReducer,
    voterInfo: voterInfoReducer
});