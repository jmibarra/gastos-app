import React, {useState, useEffect, useContext} from 'react';
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
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../contexts/Session';

const SignupComponent = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
    const { login } = useContext(SessionContext);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              login(user);
              navigateTo("")
            } else {
              console.log("user is logged out") 
            }
          });
         
    }, [])

    const navigateTo = (path) => {
        navigate("/"+path)
    } 

    const onSignup = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    login(userCredential.user);
                    setSuccessMessage("Account created successfully!");
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(true);
                    setErrorMessage(errorMessage);
                });
        } else {
            setError(true);
            setErrorMessage("Passwords do not match!");
        }
    }

    return(
        <Container style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            {successMessage && 
                                <Toast className="mb-4">
                                    <ToastHeader>
                                        Success
                                    </ToastHeader>
                                    <ToastBody>
                                        {successMessage}
                                    </ToastBody>
                                </Toast>
                            }
                            <Form onSubmit={onSignup}>
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
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="exampleConfirmPassword" className="mr-sm-2">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        type="password"
                                        name="confirmPassword"
                                        id="exampleConfirmPassword"
                                        placeholder="confirm password"
                                        onChange={(ev) => setConfirmPassword(ev.currentTarget.value)}
                                    />
                                </FormGroup>
                                <Button type="submit" color="primary">
                                    Signup
                                </Button>
                                <Button color="link" onClick={ () => navigateTo("login")}>Ya tengo cuenta!</Button>
                            </Form>
                            {error && 
                                <Alert color="danger" className="mt-3">
                                    {errorMessage}
                                </Alert>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignupComponent
