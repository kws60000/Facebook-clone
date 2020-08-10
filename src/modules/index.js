import { combineReducers } from "redux";
import addSome from "./addSome";
import addWho from "./addWho";
const rootReducer = combineReducers({
  addSome,
  addWho,
});
export default rootReducer;
