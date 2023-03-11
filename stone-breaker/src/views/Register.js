import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, CardBody, FormGroup, Input } from 'reactstrap';
import {users} from './Login'
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
                <FormGroup>
                    <Input
                        type="password"
                        name="ConfirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}

                    />
                </FormGroup>
                <Button type='submit'>SignUp</Button>
            </form>
        </CardBody>
        </div>
    )
}

export default Register