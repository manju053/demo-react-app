import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import UserProvider from './Context/UserProvider';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './Guards/AuthGuard'
import Register from './Components/Register';
import Styles from './Styles/Styles.module.css'
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />

          <Switch>


            <Route exact path="/register">
              <div className={Styles.register_section}>
                <Register />
              </div>
            </Route>
            <Route exact path="/login">
              <div className="login_section">
                <Login />
              </div>
            </Route>
            <Route exact path="/">
              <div className="login_section">
                <Redirect to="/login" />
              </div>
            </Route>

            <GuardProvider guards={[requireLogin]}>
              <GuardedRoute exact path="/home" >
                <div className="home_section">
                  <Home />
                </div>
              </GuardedRoute>
            </GuardProvider>


          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
