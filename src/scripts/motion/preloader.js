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

    if (!this.DOM.preloader) return;

    this.loadingFirst = (_callback) => {
      // smoothScroll.stop();

      let tlFirst = gsap.timeline({
        defaults: {
          duration: 0.7,
          onComplete: () => {
            setTimeout(() => {
              smoothScroll.scrollTo(0, {
                force: true,
                immediate: true,
              });
            }, 50);
            
            _callback();
            // smoothScroll.start();
          },
        },
      });

      tlFirst.to(this.DOM.preloader, {
        autoAlpha: 0,
      });
    };
  }

  async First(_callback) {
    // TODO: temp use for preloader (real: use fontfaceobserver)
    
    // const font1 = new FontFaceObserver(this.fonts.font1);
    // const font2 = new FontFaceObserver(this.fonts.font2);

    // const font1Load = font1.load(null, 10000);
    // const font2Load = font2.load(null, 10000);

    this.loaded = () => {
      new Splittext();

      _callback();

      this.loadingFirst(() => {
        // _callback();
      });

      ScrollTrigger.refresh();
    };


    this.loaded();
    // return Promise.all([
    //   font1Load,
    //   font2Load,
    //   // preloadImages(document.querySelector("body")),
    // ]).finally(() => {
    //   this.loaded();
    // });
  }

  async Enter(_callback) {
    new Splittext();

    preloadImages(document.querySelector("body")).finally(() => {
      ScrollTrigger.refresh();
    });

    _callback();
  }
}
