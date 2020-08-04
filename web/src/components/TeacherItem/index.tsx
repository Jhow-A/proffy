import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(                <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/42382690?s=460&u=a23938817337e9f0e908fc90579dbaf63cbe0d59&v=4" alt="Jhonathan Araujo" />
        <div>
            <strong>Jhonathan Araujo</strong>
            <span>C#</span>
        </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias de C# avançada. <br /><br />
        Apaixonado por desenvolver no Visual Studio e por mudar a vida das pessoas através de software.
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
    </footer>
</article>)
}

export default TeacherItem;