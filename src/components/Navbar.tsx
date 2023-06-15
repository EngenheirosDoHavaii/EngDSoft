import { Link } from "react-router-dom";
import "../style/Navbar.css"


export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="minde">MinD&</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
    </nav>
}