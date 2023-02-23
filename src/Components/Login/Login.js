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
    Alert
  } from "reactstrap";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom'

import { SessionContext } from '../../contexts/Session';

const LoginComponent = () => {

    const auth = getAuth();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigateTo = (path) => {
        navigate("/"+path)
    } 

    const { login} = useContext(SessionContext)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              login(user);
              navigateTo("")
            } else {
              console.log("user is logged out")
              
            }
          });
         
    }, [])
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            login(userCredential.user);
            //localStorage.setItem('user', JSON.stringify(userCredential.user))
            navigate("/")
        })
        .catch((error) => {
            setError(true);
            setErrorMessage(error.message);
            setErrorCode(error.code)
        });
       
    }
 
    return(
        <Container style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
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
                    {error && (
                        <Card className="mt-5">
                            <CardBody>
                                <Alert color="danger">
                                    { errorCode === "auth/user-not-found" ? 
                                        (<p>El usuario ingresado no existe, puede registrarte <Button color="link" onClick={ () => navigateTo("signup")}>aquí</Button></p>) : 
                                        errorMessage}
                                </Alert>
                            </CardBody>
                        </Card>
                    )}

                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent

