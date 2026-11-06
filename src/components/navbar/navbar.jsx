import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <a href="#">Saisie de frais</a>
            <Link to="/listes-frais">Consulter mes fiches</Link>
        </nav>
    )
}
