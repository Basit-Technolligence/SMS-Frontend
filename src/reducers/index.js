import { combineReducers } from "redux";
import { studentReducer } from "./student";
import { allExpReducer } from "./expenses";
import { teacherReducer } from "./teachers";
import {adminReducer} from './admin'

export const allReducers = combineReducers({
  studentReducer,
  allExpReducer,
  teacherReducer,
  adminReducer,
});
