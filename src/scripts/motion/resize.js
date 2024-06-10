import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Responsive({ desktop, mobile, both }) {
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 500px)": function () {
      if (!desktop) return;
      desktop();
    },

    // mobile
    "(max-width: 499px)": function () {
      if (!mobile) return;
      mobile();
    },

    // both
    all: function () {
      if (!both) return;
      both();
    },
  });
}

export default class Resize {
  constructor() {
    this.Windowresize();
  }

  Windowresize() {
    // if (process.env.NODE_ENV === "development") return;

    const sizeMediaQuery = 500;

    Responsive({
      desktop: () => {
        const mediaQuery = window.matchMedia(
          `(max-width: ${sizeMediaQuery - 1}px)`
        );

        window.addEventListener("resize", function () {
          if (mediaQuery.matches) {
            window.location.reload();
          }
        });
      },
      mobile: () => {
        const mediaQuery = window.matchMedia(
          `(min-width: ${sizeMediaQuery}px)`
        );

        window.addEventListener("resize", function () {
          if (mediaQuery.matches) {
            window.location.reload();
          }
        });
      },
    });
  }
}
