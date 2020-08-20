import { combineReducers } from "redux";
import addSome from "./addSome";
import addWho from "./addWho";
import addImgProfile from "./addImgProfile";
import addImgBackground from "./addImgBackground";

const rootReducer = combineReducers({
  addSome,
  addWho,
  addImgProfile,
  addImgBackground,
});
export default rootReducer;
