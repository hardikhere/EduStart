import "./App.scss";
import Routes from "./Routes";

import PrimeReact from "primereact/api";
import { Provider } from "react-redux";
import store from "./redux/store";
import { _updateUserInfo } from "./redux/user/action";
import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";

PrimeReact.ripple = true;

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
