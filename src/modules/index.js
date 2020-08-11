import { combineReducers } from "redux";
import addSome from "./addSome";
import addWho from "./addWho";
import addImgProfile from "./addImgProfile";

const rootReducer = combineReducers({
  addSome,
  addWho,
  addImgProfile,
});
export default rootReducer;
