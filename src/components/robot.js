import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Robot() {
    const { id } = useParams();
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
                <Col>
                    {robots.find(robot => robot.id === parseInt(id)) ? (
                        <div>
                            <div className="card">
                                <img className="card-img-top" src={robots.find(robot => robot.id === parseInt(id)).imagen} width={80} alt="..."/> 
                                <div className="card-body">
                                    <h4 className="card-title">{robots.find(robot => robot.id === parseInt(id)).nombre}</h4>
                                    <p className="card-text">Año Fabricacion: {robots.find(robot => robot.id === parseInt(id)).añoFabricacion}</p>
                                    <p className="card-text">Capacidad de Procesamiento: {robots.find(robot => robot.id === parseInt(id)).capacidadProcesamiento}</p>
                                    <p className="card-text">Humor: {robots.find(robot => robot.id === parseInt(id)).humor}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h2>Robot no encontrado</h2>
                    )}
                </Col>
            </div>
        </div>
    );
}

export default Robot;