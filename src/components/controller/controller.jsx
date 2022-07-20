import styles from './styles.module.scss';
import xboxController from '../../assets/img/controle-xbox.png';

export function Controller() {
    return(
        <div className={styles.container}>
            <div className={styles.colLeft}>
                <h1>Desempenho</h1>
                <h2>aperfeiçoado</h2>
                <div className={styles.description}>
                    <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
                </div>
            </div>
            <div className={styles.colRight}>
                <img src={xboxController} alt="Xbox Controller" />
            </div>
        </div>
    );
}