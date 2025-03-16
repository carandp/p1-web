import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Robot() {
    const { id } = useParams();
    const [robots, setRobots] = useState([]);
    const [robot, setRobot] = useState([]);
    
    const navigate = useNavigate();

    const handleRowClick = (robot) => {
        navigate(`/adopt/${robot.id}`);
    }

    useEffect(() => {
    fetch('http://localhost:3001/robots')
        .then(response => response.json())
        .then(data => {
            setRobots(data);
            const selectedRobot = data.find(robot => robot.id === parseInt(id));
            setRobot(selectedRobot);
        });
    }, [id]);

    return (
        <div className="container" style={{ display: "flex", gap: 15, alignItems: "center", justifyContent: "center", width: "1080px"}}>
            <table className="table" width={"100%"}>
                <thead>
                    <tr>
                        <th scope="col" style={{backgroundColor: "black", color: "white"}}>ID</th>
                        <th scope="col" style={{backgroundColor: "black", color: "white"}}><FormattedMessage id="list-name"/></th>
                        <th scope="col" style={{backgroundColor: "black", color: "white"}}><FormattedMessage id="list-model"/></th>
                        <th scope="col" style={{backgroundColor: "black", color: "white"}}><FormattedMessage id="list-company"/></th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => (
                        <tr key={`${robot.id}`} onClick={() => handleRowClick(robot)}>
                            <th scope="row">{robot.id}</th>
                            <td>{robot.nombre}</td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {robots.find(robot => robot.id === parseInt(id)) ? (
                    <div className="container d-flex justify-content-center">
                    <div className="card" style={{ height: "400px", width: "400px", borderWidth: "2px", borderColor:"black", borderRadius: "0px"}}>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{robot.nombre}</strong></h5>
                            <img 
                                className="card-img-top" 
                                src={robots.find(robot => robot.id === parseInt(id)).imagen.replace(
                                    "github.com",
                                    "raw.githubusercontent.com"
                                ).replace("/blob/", "/")} 
                                alt="..."
                                style={{maxWidth: 200, borderRadius: "0px", border: "2px solid black"}}
                            />
                            <div style={{marginTop: "4px"}}></div>
                            <p className="card-text" style={{textAlign: "left", marginLeft: "20px", marginBottom: "4px"}}>→ <strong><FormattedMessage id="detail-builddate"/>:</strong> {robot.añoFabricacion}</p>
                            <p className="card-text" style={{textAlign: "left", marginLeft: "20px", marginBottom: "4px"}}>→ <strong><FormattedMessage id="detail-processing"/>:</strong> {robot.capacidadProcesamiento}</p>
                            <p className="card-text" style={{textAlign: "left", marginLeft: "20px", marginBottom: "4px"}}>→ <strong><FormattedMessage id="detail-humour"/>:</strong> {robot.humor}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Robot no encontrado</h2>
            )}
        </div>
    );
}

export default Robot;