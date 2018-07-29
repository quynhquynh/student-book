import {
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENT_SUCCESS,
  ADD_STUDENT_SUCCESS,
  FETCH_HAS_ERROR,
  IS_LOADING,
  UPDATE_STUDENT_SUCCESS
} from "../actions/index";

export const hasError = (state = false, action) => {
  switch (action.type) {
    case FETCH_HAS_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const students = (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return [...action.payload.students];
    default:
      return state;
  }
};

export const student = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return { ...state, ...action.payload.student };
    default:
      return state;
  }
};

export const addStudent = (state = {}, action) => {
  switch (action.type) {
    case ADD_STUDENT_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateStudent = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
