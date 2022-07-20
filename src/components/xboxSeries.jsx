import '../styles/xboxSeries.css';
import xbox from '../assets/img/xbox.png';

export function Xbox() {
    return(
        <section>
            <h1>Xbox series X</h1>
            <h2>Pedido Antecipado</h2>
            <img src={xbox} alt="" />
        </section>
    );
}

export default Xbox;