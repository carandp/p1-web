import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function Login() {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [validationStates, setValidationStates] = useState({ loginState: true });
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setFormValues({ ...formValues, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
    };

    const clickSubmit = async () => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: formValues.username, password: formValues.password}),
        }).then( response => {
            if (response.status !== 200) {
                setValidationStates({ loginState: false });
            } else {
                navigate(`/adopt`);
            }
        });    
    }

    const clickCancel = () => {
        setFormValues({ username: "", password: "" });
    }

    return (
        <div className="container">
            <div className="container d-flex justify-content-center">
                <div className="card" style={{ width: '100%', maxWidth: 500, height: 350, border:"0px white"}}>
                    <div className="card-body">
                        <Form>
                            <h2> <strong> <FormattedMessage id="login-title"/> </strong> </h2>
                            <div style={{marginTop: "20px"}}></div>
                            <Form.Group controlId="formBasicEmail">
                                <p style={{textAlign: "left", marginBottom: 4, marginTop: 4}}><strong><FormattedMessage id="login-user"/></strong></p>
                                <Form.Control type="username" style={{ width: '100%', borderRadius: 0, borderColor: validationStates.loginState ? "" : "red", backgroundColor: "lightgrey" }} onChange={handleUsernameChange} value={formValues.username} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <p style={{textAlign: "left", marginBottom: 4, marginTop: 4}}><strong><FormattedMessage id="login-password"/></strong></p>
                                <Form.Control type="password" style={{ width: '100%', borderRadius: 0, borderColor: validationStates.loginState ? "" : "red", backgroundColor: "lightgrey" }} onChange={handlePasswordChange} value={formValues.password} />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={clickSubmit} className="w-100" style={{ borderRadius: 0 }}>
                                        <strong><FormattedMessage id="login-button-login"/></strong>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="danger" onClick={clickCancel} className="w-100" style={{ borderRadius: 0 }}>
                                        <span style={{ color: "black" }}><strong><FormattedMessage id="login-button-cancel"/></strong></span>
                                    </Button>
                                </Col>
                            </Row>
                            {!validationStates.loginState && <p style={{ color: "red", fontWeight: "bold", fontSize: 15, textAlign: "left", marginBottom: 4, marginTop: 4}}><FormattedMessage id="login-error"/></p>}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Login;