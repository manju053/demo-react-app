import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Route path="/register">
              <div className={Styles.register_section}>
                <Register />
              </div>
            </Route>
            <Route path="/login">
              <div className="login_section">
                <Login />
              </div>
            </Route>
            <GuardProvider guards={[requireLogin]}>
              <GuardedRoute path="/home" >
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
