import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/37385365?s=460&u=24989e7d102e0be4d75a19a7536f2d1c549b684e&v=4" alt="Igor Casconi" />
            <div>
                <strong>Igor Casconi</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
            <p>Preço/Hora 
                <strong>R$ 80,00</strong>
            </p>

            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;