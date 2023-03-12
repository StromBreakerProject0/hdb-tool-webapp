import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, CardBody, FormGroup, Input } from 'reactstrap';
import {users} from './Login'
import '../styles/Login/login.css'
const Register = () => {
    const [username, setusername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit=()=>{
        if(password===confirmPassword){
            const newUser = {
                username:username,
                password:password
            }
            users.push(newUser);
            navigate("/login")
        }
       
    }
        return (
        <div className="login_form">
            <CardBody  className="login_form__card">
            <form onSubmit={handleSubmit} className="login_form__form" >
                <FormGroup>
                    <label>Username
                    <Input
                        type="text"
                        name="Username"
                        placeholder='username'
                        className='login_form__input'
                        value={username}
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
                        placeholder='password'
                        className='login_form__input'
                        onChange={(e) => setpassword(e.target.value)}

                    />
                    </label>
                   
                </FormGroup>
                <FormGroup>
                    <label>
                        Confirm Password
                        <Input
                        type="password"
                        name="ConfirmPassword"
                        placeholder='confirm password'
                        className='login_form__input'
                        onChange={(e) => setConfirmPassword(e.target.value)}

                    />
                    </label>
                   
                </FormGroup>
                <div className="login_form__links">
                <Link to='/login'>Login</Link>
                <Button type='submit'>SignUp</Button>
                </div>
               
            </form>
        </CardBody>
        </div>
    )
}

export default Register