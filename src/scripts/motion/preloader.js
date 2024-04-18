import Splittext from "./splittext";
import imagesLoaded from "imagesloaded";
import FontFaceObserver from "fontfaceobserver";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { smoothScroll } from "./smoothscroll";
gsap.registerPlugin(ScrollTrigger);

export function preloadImages(selector) {
  return new Promise((resolve, reject) => {
    imagesLoaded(selector, { background: true }, resolve);
  });
}

export function preloadImagesProgress(selector, _callback) {
  const imgLoad = imagesLoaded(selector, { background: true });
  imgLoad.on("progress", function () {
    _callback();
  });
}

export default class Loading {
  constructor() {
    this.DOM = {
      preloader: document.querySelector(".preloader"),
    };

    this.fonts = {
      font1: "Bodoni 72",
      font2: "Helvetica Neue",
    };

    this.loadingFirst = (_callback) => {
      smoothScroll.stop();

      let tlFirst = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "customDefault",
          onComplete: () => {
            _callback();
            smoothScroll.start();
          },
        },
      });

      tlFirst.to(this.DOM.preloader, {
        autoAlpha: 0,
        display: "none",
      });
    };

    this.loadingEnd = (_callback) => {
      let tlEnd = gsap.timeline();

      tlEnd = gsap.timeline({
        onComplete: () => {
          _callback();
        },
      });

      tlEnd.to(this.DOM.preloader, {
        autoAlpha: 0,
        display: "none",
      });
    };

    this.loadingStart = () => {
      // this.DOM.navbar.classList.remove('active');
      document.documentElement.style.removeProperty("overflow");
      let tlStart = gsap.timeline();

      tlStart.fromTo(
        this.DOM.preloader,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          display: "flex",
          overwrite: true,
        }
      );
    };
  }

  async First(_callback) {
    const font1 = new FontFaceObserver(this.fonts.font1);
    const font2 = new FontFaceObserver(this.fonts.font2);

    const font1Load = font1.load(null, 10000);
    const font2Load = font2.load(null, 10000);

    this.loaded = () => {
      new Splittext();

      this.loadingFirst(() => {
        _callback();
      });

      ScrollTrigger.refresh();
    };

    return Promise.all([
      font1Load,
      font2Load,
      // preloadImages(document.querySelector("body")),
    ]).finally(() => {
      this.loaded();
    });
  }

  async Enter(_callback) {
    new Splittext();

    preloadImages(document.querySelector("body")).finally(() => {
      ScrollTrigger.refresh();
    });

    _callback();
  }
}
