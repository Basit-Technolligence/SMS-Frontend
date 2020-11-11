import React, { useEffect } from "react";
import MaterialTableComponent from "./material-table";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getTeachers, getTeacherbyId, deleteTeacher } from '../actions/teacherActions';

const TeacherTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Father Name",
      field: "fatherName",
    },
    {
      title: "Designation",
      field: "designation",
    },
    { title: "Date of Joining", field: "doj" },
    {
      title: "Qualification",
      field: "qualification",
    },
    {
        title: "Xcr",
        field: "xcr",
      },
  ];

  const data = props.teachers.map((teacher) => {
    return {
      id: teacher.id,   
      name: teacher.name,
      fatherName: teacher.fatherName,
      designation: teacher.designation,
      qualification: teacher.qualification,
      doj: teacher.doj,
      xcr: teacher.xcr,
    };
  });

  let profileData = [];
  if (props.teacher[0]) {
    profileData = [
      ["Name", props.teacher[0].name],
      ["Father Name", props.teacher[0].fatherName],
      ["Cast", props.teacher[0].cast],
      ["Designation", props.teacher[0].designation],
      ["Qualification", props.teacher[0].qualification],
      ["Date of Joining", props.teacher[0].doj],
      ["Experience", props.teacher[0].experience],
      ["Comment", props.teacher[0].comment],
      ["Current Class", props.teacher[0].currentClass],
      ["Salary", props.teacher[0].salary]
    ];
  }
  return (
    <MaterialTableComponent
      title="Teachers"
      data={data}
      allowExtraAction={true}
      columns={columns}
      getByIdAction={(id) => dispatch(getTeacherbyId(id))}
      editableAction={(id) => dispatch(deleteTeacher(id))}
      editable="delete"
      profileData={profileData}
    />
  );
};

const mapStateToProps = (state) => {
    console.log(state.teacherReducer);
  return {
    teachers: state.teacherReducer.allTeachers,
    teacher: state.teacherReducer.oneTeacher,
  };
};
export default connect(mapStateToProps)(TeacherTable);
