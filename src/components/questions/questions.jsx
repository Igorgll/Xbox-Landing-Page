import styles from './styles.module.scss';
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export function Questions() {
    
    const [activeQuestion, setActiveQuestion] = useState()

    const handleActiveQuestion = questionId => {
    setActiveQuestion(state => (state === questionId ? -1 : questionId))
    }

    return(
        <div className={styles.container}>
            <h1>Perguntas <span>frequentes</span></h1>
            <ul className={styles.content}>
        <li
        onClick={() => handleActiveQuestion(1)}
        className={activeQuestion === 1 ? styles.active : ''}
        >
          <strong>
            Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
            <FaChevronDown />
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li
        onClick={() => handleActiveQuestion(2)}
        className={activeQuestion === 2 ? styles.active : ''}
        >
          <strong>
            O que está incluído no Xbox Series X?
            <FaChevronDown />
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li
        onClick={() => handleActiveQuestion(3)}
        className={activeQuestion === 3 ? styles.active : ''}
        >
          <strong>
            Como sei se minha TV é compatível com 4K? <FaChevronDown />
          </strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
      </ul>
        </div>
    );
}