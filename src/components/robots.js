import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Robots() {
    const [robots, setRobots] = useState([]);
    
    const navigate = useNavigate();

    const handleRowClick = (robot) => {
        navigate(`/adopt/${robot.id}`);
    }

    useEffect(() => {
    fetch('http://localhost:3001/robots')
        .then(response => response.json())
        .then(data => {
        setRobots(data);
        });
    }, []);

    return (
        <div>
            <h1> Adopta un Robot con Robot Lovers! </h1>
            <div className="container">
                <hr></hr>
                <img src="https://i.ibb.co/hJPB0mNq/Captura-de-Pantalla-2025-03-14-a-la-s-8-05-48-a-m.png" alt="Imagen Robots..." />
                <hr></hr>
            </div>
            <div className="container" style={{ display: "flex", gap: 15, alignItems: "center", justifyContent: "center"}}>
                <Col>
                    <Table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Empresa Fabricante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map((robot) => (
                                <tr key={`${robot.id}`} onClick={() => handleRowClick(robot)}>
                                    <td>{robot.id}</td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresaFabricante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </div>
        </div>
    );
}

export default Robots;