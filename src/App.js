import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DrawerLeft from "./components/drawer";
import LoginForm from "./components/login-form";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector} from 'react-redux'

function App() {
  const isLogged = useSelector(state => state.adminReducer);
  return (
    <div className="App">
      <Switch>
          <Route exact path = '/' component={LoginForm} />
          <Route path = '/home' component={DrawerLeft} />
        {/* <DrawerLeft /> */}
      {/* <ProfileDrawer /> */}
      {/* <LoginForm /> */}
      </Switch>
     
    </div>
  );
}

export default App;
