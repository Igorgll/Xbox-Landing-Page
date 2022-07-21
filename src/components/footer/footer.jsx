import styles from './styles.module.scss';
import logo from '../../assets/img/logo-xbox.svg'

export function Footer() {
    return(
        <footer className={styles.footer}>
              <div className={styles.content}>
                <img src={logo} alt="Logo Xbox" />
                <p>© Microsoft 2022</p>
              </div>
        </footer>
    );
}