import './App.scss';
import Routes from './Routes';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { _updateUserInfo } from './redux/user/action';
import { useEffect } from 'react';



PrimeReact.ripple = true;

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
