import styles from './styles.module.scss';
import logo from '../../assets/img/logo-xbox.svg'

export function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <ul>
                <li className="logo"><img src={logo} alt="Xbox logo" /></li>
                <li className="hover">Visão Geral</li>
                <li>Jogos</li>
                <li>Galeria</li>
                <li>Unbox</li>

                <button type="button">Ver Disponibilidade</button>
            </ul>
        </div>

        <div className={styles.mobile_nav}>
            <ul>
                <li>Visão Geral</li>
                <li>Jogos</li>
                <li>Galeria</li>
                <li>Unbox</li>
            </ul>
        </div>
        <div className={styles.mobile_button}>
            <button type='button'>Ver Disponibilidade</button>
        </div>
        </>
    );
}

export default Navbar;