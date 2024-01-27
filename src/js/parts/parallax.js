import { gsap, Power2, } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const parallaxItems = document.querySelectorAll('.parallax-item');

export const parallax = () => {
    if (!parallaxItems.length) return

    parallaxItems.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img.closest('.parallax'),
                scrub: 1,
                start: "top bottom",
                end: "+=200%",
                ease: Power2.easeInOut,
                // markers: true
            },
            y: "-20%"
        })
    })
}