import React, { useEffect } from "react";
import MaterialTableComponent from "./material-table";
import { fetchExpenses, updateExpense } from "../actions/expensesActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const ExpenseTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  const columns = [
    { title: "Title", field: "title" },
    {
      title: "Amount in Rs.",
      field: "amount",
    },
    { title: "Date", field: "date" },
    {
      title: "Comment",
      field: "comment",
    },
  ];

  const data = props.expenses.map((expense) => {
    return {
      id: expense.id,
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
      comment: expense.comment,
    };
  });
  return (
    <MaterialTableComponent
      title="Expenses"
      data={data}
      columns={columns}
      editableAction={(id, expense) => dispatch(updateExpense(id, expense))}
      editable="edit"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.allExpReducer.allExp,
  };
};

export default connect(mapStateToProps)(ExpenseTable);
