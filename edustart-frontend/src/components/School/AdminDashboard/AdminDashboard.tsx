// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import Base from "./Base/Base";
// import "./sb-admin.scss";
// import qs from "query-string";
// import Settings from "./views/Settings/Settings";
// import MainDash from "./views/Home/MainDash";
// import Inquiries from "./views/Inquiries/Inquiries";
// import Feeds from "./views/Feeds/Feeds";
// import { getSchoolAdminDetailsByToken } from "./Auth/getAdminDetailsByToken";
// import { useDispatch, useSelector } from "react-redux";
// import { _updateSchoolAdminInfo } from "../../../redux/schoolAdmin/actions";
// import axiosSchoolAdminInstance from "../../../utils/axiosSchoolAdminInstance";
// import { APIS } from "../../../utils/endpoints";
// import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const schoolAdminDetails = useSelector((state) => state.schoolAdminDetails);
//   const history = useHistory();
//   const parsed = qs.parse(window.location.search);
//   const [currentHaeding, setCurrentHeading] = useState("General Info");
//   const getCurrentView = (viewName) => {
//     switch (viewName) {
//       case "settings": {
//         setCurrentHeading("Settings");
//         return <Settings />;
//       }
//       case "inquiries": {
//         setCurrentHeading("Inquiries");
//         return <Inquiries />;
//       }
//       case "feeds": {
//         setCurrentHeading("feeds");
//         return <Feeds />;
//       }
//       default: {
//         setCurrentHeading("General Info");
//         return <MainDash />;
//       }
//     }
//   };
//   const [currentView, setCurrentView] = useState(<MainDash />);
//   useEffect(() => {
//     console.log(parsed);
//     setCurrentView(getCurrentView(parsed.view));
//     async function init() {
//       getSchoolAdminDetailsByToken().then((res) => {
//         if (!!res) {
//           dispatch(_updateSchoolAdminInfo(res));
//           if (res.schoolDetails && !res.schoolDetails?.fees) {
//             res.schoolDetails.fees = {};
//           }
//           dispatch(_updateSchoolRegForm(res.schoolDetails));
//         } else {
//           window.localStorage.clear();
//           history.push("/school-admin/login");
//         }
//       });
//     }
//     init();
//   }, [parsed.view, window.localStorage.getItem("afmt")]);

//   return <Base heading={currentHaeding}>{currentView}</Base>;
// };

// export default AdminDashboard;

import React from "react";

const AdminDashboard = () => {
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
