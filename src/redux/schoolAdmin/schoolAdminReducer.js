import { UPDATE_SCHOOLADMIN_INFO } from "./actions";

const initialState = {

};


export const schoolAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCHOOLADMIN_INFO: return {
            ...state,
            ...action.payload
        }
        default: return { ...state };
    }
}