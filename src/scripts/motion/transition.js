import gsap from "gsap";
import { Transition } from "@unseenco/taxi";
import configAnimation from "./config";

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

const globalLeave = (animation = true) => {
  if (animation) {
    const tlEnd = gsap.timeline({
      defaults: {
        duration: "0.8",
        ease: "power2.out",
      },
    });

    tlEnd.to(".preloader", {
      autoAlpha: 1,
      overwrite: true,
    });
  }

  // transitionLeave();
};

const globalEnter = (animation = true) => {
  if (animation) {
    const tlEnter = gsap.timeline({
      defaults: {
        duration: "0.8",
        ease: "power2.out",
      },
    });

    tlEnter.to(".preloader", {
      autoAlpha: 0,
      overwrite: true,
    });
  }

  // transitionLeave();
};

export class TransitionDefault extends Transition {
  async onLeave({ done }) {
    globalLeave();

    const delayDuration = configAnimation.transitionDuration * 1000;

    await delay(delayDuration);
    done();
  }

  async onEnter({ done }) {
    globalEnter();

    done();
  }
}