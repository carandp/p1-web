import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

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
        </div>
    );
}

export default Robots;