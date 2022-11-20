import React from "react";
import './Login.css';

import {Form, Card, Button} from 'react-bootstrap';

const Login = () => {
    return (
        <Card className="text-center border-dark mx-5 my-5">
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
export default Login;