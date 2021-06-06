import { UPDATE_USER_INFO } from "./action";



const initialState = {
    email: "",
    mobileNumber: "",
    isVerified: "",
    userName: "",
    longitude: "",
    latitude: ""
};


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO: return {
            ...state,
            ...action.payload
        }
        default: return { ...state };
    }
}