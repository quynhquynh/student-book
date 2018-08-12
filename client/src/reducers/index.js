import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  isLoading,
  hasError,
  students,
  student,
  addStudent,
  updateStudent
} from "./students";

const rootReducer = combineReducers({
  isLoading,
  hasError,
  students,
  student,
  addStudent,
  updateStudent,
  form: formReducer
});

export default rootReducer;
