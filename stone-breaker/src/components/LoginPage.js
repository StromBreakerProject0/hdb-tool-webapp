import React, { useState } from 'react'
import { Form } from 'formik'
import { Button, CardBody, FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'
class LoginPage extends React.Component {

    state={
        username:"username",
        password:"password"
    }
    render() {

        return (
            <React.Fragment>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Input
                            type="text"
                            name="userName"
                            value={this.state.username.trim()}
                            placeholder={"Username"}
                            onChange={e=>this.setState({username:e.target.value})}
                            isRequired
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            type="text"
                            name="password"
                            value={this.state.password.trim()}
                            placeholder={"password"}
                            onChange={e=>this.setState({password:e.target.value})}
                            isRequired
                            />
                        </FormGroup>
                        <Button type='submit'>Login</Button>
                    </Form>
                </CardBody>
            </React.Fragment>
        )
    }
}
LoginPage.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginPage