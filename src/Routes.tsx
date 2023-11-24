import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./Component/School/Registration/index";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SchoolProfile from "./Pages/SchoolProfile";
import About from "./Pages/AboutUs/About";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Component/School/AdminDashboard/AdminDashboard";
import Search from "./Component/SearchPage/Search";
import AdminRoute from "./Component/Auth/AdminRoute";
import { useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";
import { APIS } from "./utils/endpoints";
import { _updateUserInfo } from "./redux/user/action";
import { isAuthenticated } from "./Component/Auth/dataHelpers";
import { useDispatch, useSelector } from "react-redux";
import SchoolAdminLogin from "./Component/School/AdminDashboard/Auth/SchoolAdminLogin";
import SchoolAdminSignup from "./Component/School/AdminDashboard/Auth/SchoolAdminSignup";
import FredmatForSchools from "./Pages/FredmatForSchools";
import ShortList from "./Pages/Shortlist";
import { getUserLongLat } from "./utils/common";
import FeedsPage from "./Component/Home/LatestFeeds/FeedsPage";

function onError(positionError) {
  switch (positionError.code) {
    case positionError.TIMEOUT:
      console.log(
        "The request to get user location has aborted as it has taken too long."
      );
      break;
    case positionError.POSITION_UNAVAILABLE:
      console.log("Location information is not available.");
      break;
    case positionError.PERMISSION_DENIED:
      console.log("Permission to share location information has been denied!");
      break;
    default:
      console.log("An unknown error occurred.");
  }
}

const onProgress = (pro) => console.log(pro);

const Routes = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);

  const onSuccess = (position) => {
    console.log("got position ", position);
    userDetails.longitude = position.coords?.longitude;
    userDetails.latitude = position.coords?.latitude;
    window.localStorage.setItem("longitude", position.coords?.longitude);
    window.localStorage.setItem("latitude", position.coords?.latitude);
    dispatch(_updateUserInfo(userDetails));
  };
  useEffect(() => {
    const longInLS = window.localStorage.getItem("longitude");
    const latInLS = window.localStorage.getItem("latitude");
    if (!latInLS && !longInLS) {
      getUserLongLat(onSuccess, onError, onProgress);
    } else {
      userDetails.longitude = parseFloat(longInLS);
      userDetails.latitude = parseFloat(latInLS);
      dispatch(_updateUserInfo(userDetails));
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated()) {
      axiosInstance
        .get(APIS._getUserByToken)
        .then((res) => {
          dispatch(_updateUserInfo(res.data.data));
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          window.localStorage.clear();
        });
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <AdminRoute path="/school/register" exact component={Registration} />
        <Route path="/" exact component={Home} />
        <Route path="/school/:sid" exact component={SchoolProfile} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute
          path="/school-admin/dashboard"
          exact
          component={AdminDashboard}
        />
        <Route path="/school-admin/login" exact component={SchoolAdminLogin} />
        <Route
          path="/school-admin/signup"
          exact
          component={SchoolAdminSignup}
        />
        <Route path="/search" exact component={Search} />
        <Route path="/fredmat-schools" exact component={FredmatForSchools} />
        <Route path="/shortlist" exact component={ShortList} />
        <Route path="/feeds" exact component={FeedsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
