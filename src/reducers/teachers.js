const initialState = {
    allTeachers: [],
    oneTeacher: []
}


export const teacherReducer = (state=initialState, action) =>{
    const {type,payload} = action;
    switch(type){
        case "ADD_TEACHER":
            return {...state, allTeachers: [...state.allTeachers, action.payload]
            };
        case "GET_TEACHERS":
            return { ...state, allTeachers: action.payload };
        case "GET_TEACHER_BY_ID":
            return { ...state, oneTeacher: [action.payload] };
        case "DELETE_TEACHER":
            const copyTeachers = [...state.allTeachers];
            const indexToDelete = copyTeachers.findIndex(
                (stu) => stu.id === action.payload
                );
            return {
                ...state,
                allTeachers: [
                    ...copyTeachers.slice(0, indexToDelete),
                    ...copyTeachers.slice(indexToDelete + 1),
                ],
            };
        default:
            return state;
    }
}