import { FormattedMessage } from "react-intl";

function Footer() {
    return (
    <div>
        <div style={{marginTop: "80px"}}></div>
        <p><FormattedMessage id="footer" /></p>
    </div>
    );
}

export default Footer;