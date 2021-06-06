import { UPDATE_INQUIRY } from "./actions";

const initialState = [];


export const updateInquiriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INQUIRY: return action.payload;
        default: return state;
    }
}