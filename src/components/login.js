import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
        <div>
            <h1> Adopta un Robot con Robot Lovers! </h1>
            <div className="container">
                <hr></hr>
                <img src="https://i.ibb.co/hJPB0mNq/Captura-de-Pantalla-2025-03-14-a-la-s-8-05-48-a-m.png" alt="Imagen Robots..." />
                <hr></hr>
            </div>
            <div className="container d-flex justify-content-center">
                <Form style={{ width: 600 }} >
                    <h2> Inicio de sesión </h2>
                    <Form.Group controlId="formBasicEmail">
                        <h5>Nombre de usuario</h5>
                        <Form.Control type="username" placeholder="Ingrese su usuario" style={{ width: 300, borderColor: validationStates.loginState ? "" : "red" }} onChange={handleUsernameChange} value={formValues.username} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <h5>Contraseña</h5>
                        <Form.Control type="password" placeholder="Contraseña" style={{ width: 300, borderColor: validationStates.loginState ? "" : "red" }} onChange={handlePasswordChange} value={formValues.password} />
                    </Form.Group>

                    <Row>
                        <Button variant="primary" onClick={clickSubmit}>
                                Submit
                        </Button>
                        <Button variant="danger" onClick={clickCancel}>
                                Cancelar
                        </Button>
                    </Row>
                    {!validationStates.loginState && <p style={{ color: "red", fontWeight: "bold", fontSize:20}}>Error de autenticación. Revise sus credenciales</p>}
                </Form>
            </div>
        </div>
    );
}

export default Login;