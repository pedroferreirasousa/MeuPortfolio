'use client';

import styles from "../../styles/Contact/contact.scss";


const Contact = () => {

    return (
        <section className="section-contact" id="contact">
            <div className="container-contact">
                <h2>Entre em contato</h2>
                <div className="btns">
                    <a className="btn btn-email" target="__blank" href="mailto:pedrofsdev@gmail.com">
                        Enviar Email <img src="/media/icons/email.svg" alt="Email" />
                    </a>
                    <a className="btn btn-wpp" target="__blank" href="https://api.whatsapp.com/send?phone=5534992981863&text=Olá%20Pedro%20👋%0AVi%20seu%20portfólio%20e%20estou%20entrando%20em%20contato...">
                        WhatsApp <img src="/media/icons/whatsapp.svg" alt="WhatsApp" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;