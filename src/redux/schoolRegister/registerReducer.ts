import { ERROR, UPDATE_SCHOOL_REGISTER_FORM } from "./actions";

const initialState = {
  Error: {
    status: false,
    message: "",
  },
  classification: "COED",
  phoneNumber: "+91",
  otherInfo: {},
  infraDetails: {},
  fees: {},
  pillars: [
    {
      title: "",
      description: "",
      number: 1,
    },
  ],
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCHOOL_REGISTER_FORM:
      return {
        ...action.payload,
        ...state.schoolRegister,
      };
    case ERROR:
      return {
        ...state.schoolRegister,
        Error: action.payload,
      };
    default:
      return { ...state };
  }
};
