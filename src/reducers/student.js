export const studentReducer = (
  state = {
    singleStudent: [],
    students: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "GET_STUDENTS":
      return { ...state, students: action.payload };
    case "GET_STUDENT_BY_ID":
      return { ...state, singleStudent: [action.payload] };
    case "DELETE_STUDENT":
      const copyStudents = [...state.students];
      const indexToDelete = copyStudents.findIndex(
        (stu) => stu.id === action.payload
      );
      return {
        ...state,
        students: [
          ...copyStudents.slice(0, indexToDelete),
          ...copyStudents.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
