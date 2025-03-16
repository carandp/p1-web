import { FormattedMessage } from "react-intl";

function Header() {
    return (
        <div style={{marginTop: "20px"}}>
            <h1><strong><FormattedMessage id="header"/></strong></h1>
            <div className="container" style={{maxWidth: 1080}}>
                <hr></hr>
                <img src="https://i.ibb.co/hJPB0mNq/Captura-de-Pantalla-2025-03-14-a-la-s-8-05-48-a-m.png" alt="Imagen Robots..." height={250}/>
                <hr></hr>
            </div>
        </div>
    );
}

export default Header;