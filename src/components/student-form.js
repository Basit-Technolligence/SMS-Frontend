import React, { useState } from "react";
import RegistrationForm from "./registration-form";
import { Input, Select, DatePicker, InputNumber } from "antd";
import FormItem from "./form-item";
import { addStudent, updateStudent } from "../actions/students";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import moment from "moment";

const StudentForm = (props) => {
  const dispatch = useDispatch();
  let initialValues = {};
  let classLabel = "Admission Class";
  let className = "admissionClass";
  let action = (s) => dispatch(addStudent(s));
  let buttonText = "ADD STUDENT RECORD";

  if (props.location.pathname === "/home/EditStudents") {
    buttonText = "UPDATE STUDENT RECORD";
    action = (s) => dispatch(updateStudent(props.student[0].id, s));
    classLabel = "Current Class";
    className = "currentClass";
    initialValues = {
      ["name"]: props.student[0].name,
      ["fatherName"]: props.student[0].fatherName,
      ["cast"]: props.student[0].cast,
      ["currentClass"]: props.student[0].currentClass,
      ["grNo"]: props.student[0].grNo,
      ["fee"]: props.student[0].fee,
      ["doa"]: moment(props.student[0].doa),
      ["dob"]: moment(props.student[0].dob),
    };
  }
  console.log("initial", initialValues);
  return (
    <>
      <RegistrationForm
        buttonText={buttonText}
        action={action}
        initialValues={initialValues}
      >
        <FormItem label="Name" name="name">
          <Input />
        </FormItem>
        <FormItem label="Father Name" name="fatherName">
          <Input />
        </FormItem>
        <FormItem label="Cast" name="cast">
          <Input />
        </FormItem>

        <FormItem label={classLabel} name={className}>
          <Select>
            <Select.Option value="class 1">Class 1</Select.Option>
            <Select.Option value="class 2">Class 2</Select.Option>
            <Select.Option value="class 3">Class 3</Select.Option>
            <Select.Option value="class 4">Class 4</Select.Option>
            <Select.Option value="class 5">Class 5</Select.Option>
          </Select>
        </FormItem>
        <FormItem label="Gr No." name="grNo">
          <Input />
        </FormItem>
        <FormItem label="Admisison Date" name="doa">
          <DatePicker />
        </FormItem>
        <FormItem label="Date of Birth " name="dob">
          <DatePicker />
        </FormItem>
        <FormItem label="Fee in Rs." name="fee">
          <InputNumber />
        </FormItem>
      </RegistrationForm>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state.studentReducer.singleStudent);
  return {
    student: state.studentReducer.singleStudent,
  };
};
export default connect(mapStateToProps)(StudentForm);
