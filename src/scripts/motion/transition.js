import gsap from "gsap";
import { Transition } from "@unseenco/taxi";
import configAnimation from "./config";
import { Navbar } from "./init";

const delay = (n) => {
  n = n || 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
};

const transitionLeave = () => {
  // const menu = document.querySelector(".menu");
  // const hamburger = document.querySelector(".header-hamburger");
  // menu.classList.remove("active");
  // hamburger.classList.remove("active");
};

const globalLeave = async (animation = true) => {
  Navbar.close();
  
  if (animation) {
    return new Promise((resolve) => {
      const tlEnd = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
        onComplete: resolve,
      });

      tlEnd.to(".preloader", {
        autoAlpha: 1,
        overwrite: true,
      });
    });
  }
  // transitionLeave();
};

const globalEnter = async (animation = true) => {
  if (animation) {
    return new Promise((resolve) => {
      const tlEnter = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
        onComplete: resolve, // Resolve the promise when the timeline completes
      });

      tlEnter.to(".preloader", {
        autoAlpha: 0,
        overwrite: true,
      });
    });
  }
  // transitionLeave();
};

export class TransitionDefault extends Transition {
  async onLeave({ done }) {
    await globalLeave();

    await delay(200);

    done();
  }

  async onEnter({ done }) {
    await globalEnter();

    await delay(200);

    done();
  }
}
