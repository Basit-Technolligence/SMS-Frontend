import axios from 'axios';
import { convertDate } from './convert-date';

export const addTeacher = (body) => {
    console.log("teacherrbody: ", body);

    body.doe = convertDate(body.doj);
  
    console.log("aftter covert: ", body);
    return async (dispatch) => {
      try {
        const response = await axios.post("//127.0.0.1:5000/addTeacher", body);
        if (response) {
          dispatch({
            type: "ADD_TEACHER",
            payload: body,
          });
          alert("Teacher Added Successfully");
        } else {
          alert("Some error occur, try again");
        }
      } catch (e) {
        console.log("Action error occur", e);
        alert("Sorry! try again.");
      }
    };
  };


  export const getTeacherbyId = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get("//127.0.0.1:5000/teachers/" + id);
        dispatch({
          type: "GET_TEACHER_BY_ID",
          payload: response.data,
        });
      } catch (e) {
        console.log("action error occur", e);
        alert("Sorry! try again.");
      }
    };
  };

  export const getTeachers = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("//127.0.0.1:5000/getTeacher");
        dispatch({
          type: "GET_TEACHERS",
          payload: response.data,
        });
      } catch (e) {
        console.log("action error occur", e);
        alert("Sorry! try again.");
      }
    };
  };

  export const deleteTeacher = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.delete("//127.0.0.1:5000/teachers/" + id);
        if (response.data === "Deleted Data") {
          alert("Teacher Deleted Successfully");
          dispatch({ type: "DELETE_TEACHER", payload: id });
        } else {
          alert("Some error occur, try again");
        }
      } catch (e) {
        console.log("action error occur", e);
        alert("Sorry! try again.");
      }
    };
  };

  export const updateTeacher = (id, teacher) => {
    teacher.doj = convertDate(teacher.doj);
    return async (dispatch) => {
      try {
        const response = await axios.patch(
          "//127.0.0.1:5000/teachers/" + id,
          teacher
        );
        if (response.data === "Updated Data") {
          dispatch({
            type: "UPDATE_TEACHER",
            payload: response.data,
          });
          alert("Record Updated Successfully");
        } else {
          alert("Sorry, update Failed!");
        }
      } catch (e) {
        console.log("action error occur", e);
        alert("Sorry, Try again!");
      }
    };
  };