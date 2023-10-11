import { Component, ReactNode } from "react";
import { LogoImg } from "../img";
import "../styles/footer.css";

class Footer extends Component {
    render(): ReactNode {
        return (
            <footer>
                <LogoImg/>
                <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </footer>
        )
    }
}

export default Footer;