"use client";

import styles from "../../styles/About/about.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef } from "react";
import Image from "next/image";
import profile from "../../../public/media/Profile.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

if (typeof window !== "undefined") {
  ScrollTrigger.defaults({ markers: true });
}

const About = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const scrollTriggerRef = useRef(null);

  useGSAP(() => {
    if (!animationPlayed) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "#about",
        start: "20% 80%",
        end: "bottom center",
        markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".container-about",
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              ease: "power1.easeInOut",
              toggleActions: "play none none none",
            }
          );

          gsap.fromTo(
            ".aboutme-info p",
            {
              opacity: 0,
              scale: 0.7,
            },
            {
              opacity: 1,
              stagger: 0.5,
              scale: 1,
              duration: 1,
              delay: 0.5,
              toggleActions: "play none none none",
              ease: "power1.easeInOut",
            }
          );
          setAnimationPlayed(true);
          if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
          }
        },
      });
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [animationPlayed]);

  return (
    <section id="about" className="section-about">
      <h1>Conheça um pouco mais sobre mim</h1>
      <div className="container-about">
        <Image src={profile} alt="Foto de perfil" />
        <div className="aboutme-info">
          <p className="p">
            Natural de Uberlândia, Minas Gerais, e desde criança sou apaixonado
            por tecnologia. Sempre explorei o computador, joguei e pesquisei
            novidades. Aos 20 anos, comecei a aprender programação através de um
            curso online e fiquei fascinado por como os aplicativos e interfaces
            funcionam. Apesar das dificuldades em conciliar com meu trabalho
            em outra área, continuei estudando. Em 2024, decidi mudar para a área
            de tecnologia, saindo do comércio varejista para me dedicar
            integralmente à programação. Iniciei o curso de Análise e
            Desenvolvimento de Sistemas e continuo aprendendo de forma
            autônoma.
          </p>
          <p className="p">
            Com foco em código limpo e boas práticas de desenvolvimento <br />
            transformo desafios em soluções criativas 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;