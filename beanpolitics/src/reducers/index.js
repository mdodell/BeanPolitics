import { combineReducers } from 'redux';
import covfefeReducer from "./covfefeReducer";

export default combineReducers({
    covfefe: covfefeReducer
});