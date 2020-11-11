import React, { useEffect } from "react";
import MaterialTableComponent from "./material-table";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getStudents,
  deleteStudent,
  getStudentById,
} from "../actions/students";

const StudentTable = (props) => {
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
    { title: "Date of Birth", field: "dob" },
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
      currentClass: student.currentClass,
      dob: student.dob,
    };
  });
  let profileData = [];
  if (props.student[0]) {
    profileData = [
      ["Name", props.student[0].name],
      ["Father Name", props.student[0].fatherName],
      ["Cast", props.student[0].cast],
      ["Date of Birth", props.student[0].dob],
      ["Gr No.", props.student[0].grNo],
      ["Date of Admision", props.student[0].doa],
      ["Admision Class", props.student[0].admissionClass],
      ["Current Class", props.student[0].currentClass],
      ["Current Fee", "Rs. " + props.student[0].fee],
    ];
  }
  return (
    <MaterialTableComponent
      title="Students"
      data={data}
      allowExtraAction={true}
      columns={columns}
      getByIdAction={(id) => dispatch(getStudentById(id))}
      editableAction={(id) => dispatch(deleteStudent(id))}
      editable="delete"
      profileData={profileData}
    />
  );
};

const mapStateToProps = (state) => {
  console.log('stud red', state.studentReducer)
  return {
    students: state.studentReducer.students,
    student: state.studentReducer.singleStudent,
  };
};
export default connect(mapStateToProps)(StudentTable);
