import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class MotionText {
  constructor() {
    this.el = [...document.querySelectorAll("[data-motion-text]")];

    this.init();
  }

  init() {
    this.el.forEach((el) => {
      const char = el.querySelectorAll(".char");
      gsap.from(char, {
        opacity: 0,
        ease: "none",
        stagger: {
          each: 0.03,
        },
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top bottom-=20%",
          end: "bottom center",
        }
      });
    });
  }
}
