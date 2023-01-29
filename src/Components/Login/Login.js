import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Toast,
    ToastBody,
    ToastHeader,
    Alert
  } from "reactstrap";

import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';

const LoginComponent = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setLoggedin] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setLoggedin(true);
            //navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(true);
            setErrorMessage(error.message);
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Form onSubmit={onLogin}>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="something@idk.cool"
                                    onChange={(ev) => setEmail(ev.currentTarget.value)}
                                />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="don't tell!"
                                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                                />
                                </FormGroup>
                                <Button type="submit" color="primary">
                                Login
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                    <Card className="mt-5">
                        <CardBody>
                        {isLoggedin && (
                            <>
                            <div>User is logged in on the system.</div>
                            <div className="p-3 bg-success my-2 rounded">
                                <Toast>
                                <ToastHeader>Reactstrap</ToastHeader>
                                <ToastBody>
                                    This is a toast on a success background — check it out!
                                </ToastBody>
                                </Toast>
                            </div>
                            </>
                        )}

                        {error && (
                            <Alert color="danger">
                                {errorMessage}  
                            </Alert>
                        )}

                        {!isLoggedin && (
                            <div>
                            Please login with your credentials. <br /> Look at
                            https://reqres.in/ for api help.
                            </div>
                        )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent

