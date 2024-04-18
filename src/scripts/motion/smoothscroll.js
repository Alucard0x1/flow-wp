import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export let smoothScroll;

gsap.registerPlugin(ScrollTrigger);

export default class Smoothscroll {
  constructor() {
    this.init();
  }

  init() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);

    smoothScroll = new Lenis({
      // lerp: 0.15,
      duration: 1.1,
      easing: (x) => (x === 1 ? 1 : 1 - Math.pow(2, -8 * x)),
      orientation: "vertical", // vertical, horizontal
      gestureOrientation: "vertical", // vertical, horizontal, both
    });

    smoothScroll.on("scroll", ScrollTrigger.update);

    setTimeout(() => {
      smoothScroll.scrollTo(0, {
        force: true,
        immediate: true,
      });
    }, 1);


    gsap.ticker.add((time) => {
      smoothScroll.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}
