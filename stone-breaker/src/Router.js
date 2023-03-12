import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { redirect as Redirect } from 'react-router-dom';
// import { history } from './history'
import HardHddTool from './views/HardHddTool'
import LandingPage from './views/landingPage'
import Login from './views/Login'
import MediumHddTool from './views/MediumHddTool'
import NormalHddToolList from './views/NormalHddToolList'
import { Navigate } from "react-router-dom";
import Register from './views/Register';
import Cart from './views/Cart';

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setIsAuthenticated(loggedInUser);
    }
  }, []);
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ?
        <Navigate replace to="/login" /> :
        <Navigate replace to="/landing-page" />

    }
  />
}

const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}
const AppRoute = connect(mapStateToProps)(RouteConfig)
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/normal-tool' element={<NormalHddToolList type="normal"/>} />
          <Route path='/medium-tool' element={<NormalHddToolList type="medium"/>} />
          <Route path='/hard-tool' element={<NormalHddToolList type='hard' />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRouter