const initialState = {
  allExp: [],
};

export const allExpReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_EXPENSES":
      return {
        allExp: payload,
      };
    case "ALL_EXPENSES_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_EXPENSE":
      const allExpList = [...state.allExp];
      const indexToUpdate = allExpList.findIndex(
        (exp) => exp.id === payload.id
      );
      state.allExp[indexToUpdate] = payload;
      return {
        allExp: [...state.allExp],
      };
    case "EXPENSE_ADDED":
      return { expenses: [...state.expenses, action.payload] };
    default:
      return {
        ...state,
      };
  }
};
