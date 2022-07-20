import '../styles/controller.css';
import xboxController from '../assets/img/controle-xbox.png'

export function Controller() {
    return(
        <div className='container'>
            <div className='col-left'>
                <h1>Desempenho</h1>
                <h2>aperfeiçoado</h2>
                <div className='description'>
                    <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
                </div>
            </div>
            <div className='col-right'>
                <img src={xboxController} alt="Xbox Controller" />
            </div>
        </div>
    );
}