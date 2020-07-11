import { combineReducers } from "redux";
import pockemonReducer from "./pockemon.reducer";

const rootReducer = combineReducers({
  pockemon: pockemonReducer,
});

export default rootReducer;
