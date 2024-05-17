import { Core as Taxi, Renderer } from "@unseenco/taxi";
import { TransitionDefault } from "./motion/transition";
import Loading from './motion/preloader';

import LazyLoad from "vanilla-lazyload";

import MotionInit from "./motion/init";

import Smoothscroll, { smoothScroll } from './motion/smoothscroll';

import CleanScrolltrigger from './utils/cleanscrolltrigger';

var aLazyLoad = new LazyLoad({});

export let taxi = null;

export const Preloader = new Loading();

const motion = new MotionInit();

class RendererDefault extends Renderer {
  initialLoad() {
    if (process.env.NODE_ENV === "development") {
      console.log("initialLoad");
    }

    motion.first();
    motion.enter();

    Preloader.First(() => {
      motion.afterPreloader();
    }, () => {
      motion.afterPreloader2();
    });
  }

  onEnter() {
    if (process.env.NODE_ENV === "development") {
      console.log("onEnter");
    }

    new Smoothscroll();

    document.documentElement.classList.add("active");
    smoothScroll.start();

    Preloader.Enter(() => {
      motion.reinit();
    });
  }

  onEnterCompleted() {
    if (process.env.NODE_ENV === "development") {
      console.log("onEnterCompleted");
    }
  }

  onLeave() {
    if (process.env.NODE_ENV === "development") {
      console.log("onLeave");
    }

    smoothScroll.stop();
    smoothScroll.destroy();
  }

  onLeaveCompleted() {
    if (process.env.NODE_ENV === "development") {
      console.log("onLeaveCompleted");
    }

    CleanScrolltrigger(true);

    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    smoothScroll.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }
}

export default class App {
  constructor() {
    taxi = new Taxi({
      renderers: {
        default: RendererDefault,
      },
      transitions: {
        default: TransitionDefault,
      },
      links:
        "a:not([target]):not([href^=\\#]):not([data-taxi-ignore]), a.ab-item",
      reloadJsFilter: (element) =>
        !(element.id === "assetjs-js") ||
        element.dataset.taxiReload !== undefined,
    });
  }
}

new App();
