import React, { useState } from "react";
// import LoginPage from '../components/LoginPage'
import { redirect, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { Button, CardBody, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
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
      localStorage.setItem("user-data",JSON.stringify(account))
      navigate("/landing-page");
    }
  };

  
return (
  <div>
    <CardBody>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
           type="password"
           name="Password"
           onChange={(e) => setpassword(e.target.value)}
           
          />
        </FormGroup>
        <Link to='/register'>Create New Account</Link>
        <Button type='submit'>Login</Button>
      </form>
    </CardBody>
  </div>


);
  
}
export default Login