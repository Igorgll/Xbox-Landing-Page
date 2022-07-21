import styles from './styles.module.scss'
import farcry from '../../assets/img/farcry.png'
import forza from '../../assets/img/forza.png'
import fifa from '../../assets/img/fifa.png'
import minecraft from '../../assets/img/minecraft.png'

export function Games() {

    return (
            <ul className={styles.games}>
                <li><img src={farcry} alt="Farcry" /></li>
                <li><img src={forza} alt="Forza" /></li>
                <li><img src={fifa} alt="FIFA" /></li>
                <li><img src={minecraft} alt="Minecraft" /></li>
            </ul>
    );
}