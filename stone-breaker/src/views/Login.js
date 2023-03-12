import React, { useState } from "react";
// import LoginPage from '../components/LoginPage'
import { redirect, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { Button, CardBody, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/Login/login.css'

export const users = [{ username: "Jane", password: "testpassword" }];
const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("user-data", JSON.stringify(account))
      navigate("/landing-page");
    }
  };


  return (
    <div className="login_form">
      <CardBody className="login_form__card">
        <form onSubmit={handleSubmit} className="login_form__form">
          {/* import the logo here */}
          <FormGroup>
            <label>
              Username
              <Input
              type="text"
              name="Username"
              value={username}
              placeholder="Username"
              className="login_form__input"
              onChange={(e) => setusername(e.target.value)}
            />
            </label>
            
          </FormGroup>
          <FormGroup>
            <label>
              Password
            <Input
              type="password"
              name="Password"
              placeholder="password"
              className="login_form__input"
              onChange={(e) => setpassword(e.target.value)}

            />
            </label>
           
          </FormGroup>
          <div className="login_form__links">
            <Link to='/register'>Create New Account</Link>
            <Button type='submit'>Login</Button>
          </div>

        </form>
      </CardBody>
    </div>


  );

}
export default Login