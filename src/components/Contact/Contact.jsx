'use client';

import styles from "../../styles/Contact/contact.scss";


const Contact = () => {

    return (
        <section className="section-contact" id="contact">
            <div className="container-title">
                <h2>Fale comigo</h2>
                <h3>Vamos construir algo incrível juntos?</h3>
                <p>Se você tem uma ideia, projeto ou só quer bater um papo sobre desenvolvimento, estou sempre a disposição</p>
            </div>
            <div className="container-contact">
                <div className="container-right">
                    <h4>Entre em contato</h4>
                    <div className="btns">
                        <a className="btn btn-email" target="__blank" href="mailto:pedrofsdev@gmail.com">
                            Email <img src="/media/icons/email.svg" alt="Email" />
                        </a>
                        <a className="btn btn-wpp" target="__blank" href="https://api.whatsapp.com/send?phone=5534992981863&text=Olá%20Pedro%20👋%0AVi%20seu%20portfólio%20e%20estou%20entrando%20em%20contato...">
                            WhatsApp <img src="/media/icons/whatsapp.svg" alt="WhatsApp" />
                        </a>
                        <a className="btn btn-linkedin" target="__blank" href="https://www.linkedin.com/in/pedrofsousa/">
                            Linkedin <img src="/media/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </div>
                    {/* <h4>Endereço</h4>
                    <p className="adress">Rua Osório jose da cunha, 700 <br />
                        Uberlândia / MG</p> */}
                </div>
                <div className="container-img">
                    <img src="/media/contact.png" alt="Imagem de contato" />
                </div>
            </div>
        </section>
    )
}

export default Contact;