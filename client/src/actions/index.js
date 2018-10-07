export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_HAS_ERROR = 'FETCH_HAS_ERROR';
export const IS_LOADING = 'IS_LOADING';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';

export const isLoading = bool => ({
  type: IS_LOADING,
  payload: bool
});

export const fetchHasError = bool => ({
  type: FETCH_HAS_ERROR,
  payload: bool
});

export const fetchStudentsSuccess = data => ({
  type: data.students ? FETCH_STUDENTS_SUCCESS : FETCH_STUDENT_SUCCESS,
  payload: data
});

export const fetchStudents = url => dispatch => {
  dispatch(isLoading(true));

  fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(isLoading(false));
      return response.json();
    })
    .then(data => dispatch(fetchStudentsSuccess(data)))
    .catch(() => dispatch(fetchHasError(true)));
};

export const postStudentSuccess = data => ({
  type: ADD_STUDENT_SUCCESS,
  payload: data
});

export const addStudent = form => dispatch => {
  const url = '/api/students';
  dispatch(isLoading(true));
  fetch(url, {
    method: 'POST',
    body: form
  })
    .then(response => {
      console.log(response);
      // if(!response.ok) throw Error(response.statusText)
      dispatch(isLoading(false));
      return response.json();
    })
    .then(data => dispatch(postStudentSuccess(data.student)))
    .catch(() => dispatch(fetchHasError(true)));
};

export const updateStudentSuccess = data => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: data
});

export const updateStudent = (form, id) => dispatch => {
  const url = `/api/students/${id}`;
  dispatch(isLoading(true));
  fetch(url, {
    method: 'PUT',
    body: form
  })
    .then(response => {
      dispatch(isLoading(false));
      return response.json();
    })
    .then(data => dispatch(updateStudentSuccess(data.student)));
};

export const deleteStudent = url => dispatch => {
  dispatch(isLoading(true));
  fetch(url, {
    method: 'DELETE'
  })
    .then(response => {
      dispatch(isLoading(false));
      return response.json();
    })
    .catch(() => dispatch(fetchHasError(true)));
};
