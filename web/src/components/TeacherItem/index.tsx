import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/67971509_1285208044973185_3730387484094234624_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=2P7UL3f4FH8AX-MUJzT&_nc_ht=scontent.fcgh2-1.fna&oh=840b22f2bc5c357a0eb40e7a55d99cd9&oe=5F5165F1"
                    alt="Fabrício dos Santos" />
                <div>
                    <strong>Fabrício dos Santos</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Químico desde que me conheço por gente
        <br></br>
        mais de 100 explosões feitas com sucesso!
    </p>
            <footer>
                <p>
                    Preço/hora
            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
            Entrar em contato
        </button>
            </footer>
        </article>

    )

}

export default TeacherItem;