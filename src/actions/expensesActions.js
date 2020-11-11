import axios from "axios";
import { convertDate } from "./convert-date";

export const fetchExpenses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://schoolsystembackend.herokuapp.com/allExpenses");
      dispatch({
        type: "ALL_EXPENSES",
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: "ALL_EXPENSES_REJECTED",
      });
      alert("Sorry! try again.");
    }
  };
};

export const addExpense = (body) => {
  console.log("sdlkfjj: ", body);
  body.date = convertDate(body.date);

  console.log("aftter covert: ", body);
  return async (dispatch) => {
    try {
      const response = await axios.post("https://schoolsystembackend.herokuapp.com/addExpense", body);
      if (response) {
        dispatch({
          type: "ADD_STUDENT",
          payload: body,
        });
        alert("Expense Added Successfully");
      } else {
        alert("Some error occur, try again");
      }
    } catch (e) {
      console.log("action error occur", e);
      alert("Sorry! try again.");
    }
  };
};
export const updateExpense = (id, expense) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "https://schoolsystembackend.herokuapp.com/updateExpenses/" + id,
        expense
      );
      if (response.data === "Updated Successfully") {
        dispatch({
          type: "UPDATE_EXPENSE",
          payload: expense,
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
