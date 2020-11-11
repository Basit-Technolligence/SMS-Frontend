import axios from "axios";
import { convertDate } from "./convert-date";

export const addStudent = (student) => {
  student["currentClass"] = student["admissionClass"];
  student.doa = convertDate(student.doa);
  student.dob = convertDate(student.dob);
  return async (dispatch) => {
    try {
      const response = await axios.post("//127.0.0.1:5000/students", student);
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
      const response = await axios.get("//127.0.0.1:5000/students");
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
      const response = await axios.get("//127.0.0.1:5000/students/" + id);
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
        "//127.0.0.1:5000/students/" + id,
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
      const response = await axios.delete("//127.0.0.1:5000/students/" + id);
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
      console.log('row',data)
      const response = await axios.post('//127.0.0.1:5000/getChallan',data);
      if(response.data === 'DONE')
        alert('Challan downloaded in desktop')
      dispatch({type:"CHALLAN_DONE"})
    }catch(e){
      console.log(e);
      alert('Sorry! try again');
    }
  }
}
