import gsap from "gsap";


const animateLetters = ( target ) => {

    gsap.to(target, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: "power1.out"
    });

    gsap.to(target, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        delay: 1,
        ease: "power1.in"
    });

}

export default animateLetters;