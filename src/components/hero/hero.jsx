"use client";

import styles from "../../styles/Hero/hero.scss";
// import animateLetters from "../../animations/animatedHero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {

        gsap.fromTo(".letter", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            stagger: 1,
            duration: 1,
            delay: 1,
            ease: "power1.out"
        });

        gsap.fromTo(".teste", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
            delay: 3,
            ease: "power1.out",
            onComplete: () => {
                gsap.fromTo(".bar", {
                    opacity: 0,
                }, {
                    opacity: 1,
                    ease: "power3.in",
                    repeat: -1,
                    yoyo: true,
                });
            }
        });

        gsap.fromTo(".info", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 5.4,
            ease: "power1.out",
        });


    })

    return (
        <section id="home" className="section-main">
            <video playsInline autoPlay muted loop>
                <source src="/media/banner.mp4" type="video/mp4" />
            </video>
            <div className="container-main">
                <div className="phrase1">
                    <span className="letter">Olá Seja bem-vindo!</span>
                </div>
                <div className="phrase2">
                    <span className="letter">Me chamo Pedro Ferreira</span>
                </div>
                <div className="phrase3">
                    <span id="colorSpan" className="teste">D</span>
                    <span id="colorSpan" className="teste">e</span>
                    <span id="colorSpan" className="teste">s</span>
                    <span id="colorSpan" className="teste">e</span>
                    <span id="colorSpan" className="teste">n</span>
                    <span id="colorSpan" className="teste">v</span>
                    <span id="colorSpan" className="teste">o</span>
                    <span id="colorSpan" className="teste">l</span>
                    <span id="colorSpan" className="teste">v</span>
                    <span id="colorSpan" className="teste">e</span>
                    <span id="colorSpan" className="teste">d</span>
                    <span id="colorSpan" className="teste">o</span>
                    <span id="colorSpan" className="teste">r</span>
                    <span className="teste"> </span>
                    <span id="colorSpan" className="teste">F</span>
                    <span id="colorSpan" className="teste">r</span>
                    <span id="colorSpan" className="teste">o</span>
                    <span id="colorSpan" className="teste">n</span>
                    <span id="colorSpan" className="teste">t</span>
                    <span id="colorSpan" className="teste">-</span>
                    <span id="colorSpan" className="teste">E</span>
                    <span id="colorSpan" className="teste">n</span>
                    <span id="colorSpan" className="teste">d</span>
                    <span id="colorSpan" className="teste bar">|</span>
                </div>
        <br />
                <div className="phrase4">
                    <p className="info">Transformando ideias em experiências digitais 📱</p>
                </div>

                <div className="container-social-icons">
                    {/* <a href="#"><img src="#" /></a>
                    <a href="#"><img src="#" alt="Ícone do GitHub com link para acesso à página" /></a>
                    <a href="#"><img src="#" alt="Ícone de currículo com link para acesso ao currículo em PDF" /></a> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;
