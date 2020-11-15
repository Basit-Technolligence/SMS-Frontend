import axios from "axios";
import { convertDate } from "./convert-date";
import download from 'js-file-download';

export const addStudent = (student) => {
  student["currentClass"] = student["admissionClass"];
  student.doa = convertDate(student.doa);
  student.dob = convertDate(student.dob);
  return async (dispatch) => {
    try {
      const response = await axios.post("https://schoolsystembackend.herokuapp.com/students", student);
      if (response.data === "Data Added") {
        dispatch({
          type: "ADD_STUDENT",
          payload: student,
        });
        alert("Student Added Successfully");
      } else {
        alert("Some error occur, try again");
      }
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry! try again.");
    }
  };
};
export const getStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://schoolsystembackend.herokuapp.com/students");
      dispatch({
        type: "GET_STUDENTS",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry! try again.");
    }
  };
};


export const getStudentById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://schoolsystembackend.herokuapp.com/students/" + id);
      dispatch({
        type: "GET_STUDENT_BY_ID",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry! try again.");
    }
  };
};

export const updateStudent = (id, student) => {
  student.doa = convertDate(student.doa);
  student.dob = convertDate(student.dob);
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://schoolsystembackend.herokuapp.com/students/" + id,
        student
      );
      if (response.data === "Updated Data") {
        dispatch({
          type: "UPDATE_STUDENT",
          payload: response.data,
        });
        alert("Record Updated Successfully");
      } else {
        alert("Sorry, Try again!");
      }
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry, Try again!");
    }
  };
};


export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("https://schoolsystembackend.herokuapp.com/students/" + id);
      if (response.data === "Deleted Data") {
        alert("Student Deleted Successfully");
        dispatch({ type: "DELETE_STUDENT", payload: id });
      } else {
        alert("Some error occur, try again");
      }
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry! try again.");
    }
  };
};
export const getChallan=(data)=>{
  return async (dispatch) => {
    try{
      const response1 = await axios.post('https://schoolsystembackend.herokuapp.com/getChallan/',data);
      const response2 = await axios.get('https://schoolsystembackend.herokuapp.com/getChallan/'+response1.data, {
        Accept: 'application/pdf',
        'Content-Type': 'application/pdf',
        mode: 'no-cors'
      });
      // download('//127.0.0.1:5000/getChallan/'+response1.data);
      window.open('//127.0.0.1:5000/getChallan/'+response1.data)
      dispatch({type:"CHALLAN_DONE"})
    }catch(e){
      console.log(e);
      alert('Sorry! try again');
    }
  }
}
