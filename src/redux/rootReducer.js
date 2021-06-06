import { combineReducers } from "redux";
import { registerReducer } from "./schoolRegister/registerReducer";
import { userReducer } from "./user/userReducer";
import { schoolAdminReducer } from './schoolAdmin/schoolAdminReducer'
import { updateInquiriesReducer } from "./inquiries/inquiryReducer";

const rootReducer = combineReducers({
    schoolRegister: registerReducer,
    userDetails: userReducer,
    schoolAdminDetails: schoolAdminReducer,
    inquiriesData: updateInquiriesReducer
});
export default rootReducer;