import '../styles/navbar.css'
import logo from '../assets/img/logo-xbox.svg'

export function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className="logo"><img src={logo} alt="Xbox logo" /></li>
                <li className="hover">Visão Geral</li>
                <li>Jogos</li>
                <li>Galeria</li>
                <li>Unbox</li>

                <button type="button">Ver Disponibilidade</button>
            </ul>
        </div>
    );
}

export default Navbar;