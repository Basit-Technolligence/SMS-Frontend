import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import {  getStudents, getChallan} from "../actions/students";
import { connect } from "react-redux";

const StudentChallan = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getStudents());
    }, []);
  
    const columns = [
      { title: "Name", field: "name" },
      {
        title: "Father Name",
        field: "fatherName",
      },
      {
        title: "Gr No.",
        field: "gr",
      },
      { title: "Fees", field: "fee" },
      {
        title: "Current Class",
        field: "currentClass",
      },
    ];
  
    const data = props.students.map((student) => {
      return {
        id: student.id,
        name: student.name,
        fatherName: student.fatherName,
        gr: student.grNo,
        fee: "Rs. "+ student.fee,
        currentClass: student.currentClass,
      };
    });
  let actions = [
      {
        icon: "PlayForWork",
        tooltip: "Download Challan",
        onClick: async (event, rowData) => {
            await dispatch(getChallan(rowData));
        },
      },
    ];
  return (
    <>
      <MaterialTable
        title={"Print Students' Challan"}
        columns={columns}
        actions={actions}
        data={data}
      />
    </>
  );
};
const mapStateToProps = (state) => {
    return {
      students: state.studentReducer.students,
    };
  };
export default connect(mapStateToProps)(StudentChallan);
