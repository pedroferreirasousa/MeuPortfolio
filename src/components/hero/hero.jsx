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
            stagger: 0.7,
            duration: 1,
            delay: 1,
            ease: "power1.out"
        });

        gsap.fromTo(".letterdev", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
            delay: 2,
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
            delay: 4,
            ease: "power1.out",
        });

        gsap.fromTo(".icon", {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 4,
            ease: "power1.out",
        });


    })

    return (
        <section id="home" className="section-hero">
            <video playsInline autoPlay muted loop>
                <source src="/media/banner.mp4" type="video/mp4" />
            </video>
            <div className="container-hero">
                <div className="phrase1">
                    <h1 className="letter">Olá Seja bem-vindo!</h1>
                </div>
                <div className="phrase2">
                    <h2 className="letter">Me chamo Pedro Ferreira</h2>
                </div>
                <div className="phrase3">
                    <span id="colorSpan" className="letterdev">D</span>
                    <span id="colorSpan" className="letterdev">e</span>
                    <span id="colorSpan" className="letterdev">s</span>
                    <span id="colorSpan" className="letterdev">e</span>
                    <span id="colorSpan" className="letterdev">n</span>
                    <span id="colorSpan" className="letterdev">v</span>
                    <span id="colorSpan" className="letterdev">o</span>
                    <span id="colorSpan" className="letterdev">l</span>
                    <span id="colorSpan" className="letterdev">v</span>
                    <span id="colorSpan" className="letterdev">e</span>
                    <span id="colorSpan" className="letterdev">d</span>
                    <span id="colorSpan" className="letterdev">o</span>
                    <span id="colorSpan" className="letterdev">r</span>
                    <span className="letterdev"> </span>
                    <span id="colorSpan" className="letterdev">F</span>
                    <span id="colorSpan" className="letterdev">r</span>
                    <span id="colorSpan" className="letterdev">o</span>
                    <span id="colorSpan" className="letterdev">n</span>
                    <span id="colorSpan" className="letterdev">t</span>
                    <span id="colorSpan" className="letterdev">-</span>
                    <span id="colorSpan" className="letterdev">E</span>
                    <span id="colorSpan" className="letterdev">n</span>
                    <span id="colorSpan" className="letterdev">d</span>
                    <span id="colorSpan" className="letterdev bar">|</span>
                </div>
                <br />
                <div className="phrase4">
                    <p className="info">Transformando ideias em experiências digitais 📱</p>
                </div>
                <br />
                <div className="container-social-icons">
                    <a className="icon" href="#"><img src="/icons/linkedin.svg" alt="Ícone do LinkedIn com link para acesso à página" /></a>
                    <a className="icon" href="#"><img src="/icons/github.svg" alt="Ícone do GitHub com link para acesso à página" /></a>
                    <a className="icon" href="#"><img src="/icons/cv.svg" alt="Ícone de currículo com link para acesso ao currículo em PDF" /></a>
                    <a className="icon" href="#"><img src="/icons/whatsapp.svg" alt="Ícone de contato para whatsapp" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
