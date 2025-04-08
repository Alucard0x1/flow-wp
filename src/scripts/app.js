import { Core as Taxi, Renderer } from "@unseenco/taxi";
import { TransitionDefault } from "./motion/transition";
import Loading from "./motion/preloader";

import LazyLoad from "vanilla-lazyload";

import MotionInit from "./motion/init";

import Smoothscroll, { smoothScroll } from "./motion/smoothscroll";

import CleanScrolltrigger from "./utils/cleanscrolltrigger";

export let aLazyLoad;

export let taxi = null;

export const Preloader = new Loading();

const motion = new MotionInit();

// Add Elementor initialization check
let elementorInitialized = false;
const waitForElementor = (callback, maxAttempts = 10) => {
  let attempts = 0;
  const check = () => {
    attempts++;
    if (window.elementorFrontend && window.elementorFrontend.init) {
      elementorInitialized = true;
      callback();
    } else if (attempts < maxAttempts) {
      setTimeout(check, 500);
    } else {
      console.warn('Elementor initialization timeout');
    }
  };
  check();
};

class RendererDefault extends Renderer {
  initialLoad() {
    // Initialize LazyLoad only if not already initialized
    if (!aLazyLoad) {
      aLazyLoad = new LazyLoad({
        callback_error: (img) => {
          img.setAttribute('src', img.getAttribute('data-src') || '');
        }
      });
    }

    motion.first();
    motion.enter();

    Preloader.First(
      () => {
        motion.afterPreloader();
      },
      () => {
        motion.afterPreloader2();
      }
    );

    // Wait for Elementor on initial load
    if (window.elementorFrontend) {
      waitForElementor(() => {
        window.elementorFrontend.init();
      });
    }
  }

  onEnter() {
    if (aLazyLoad) {
      aLazyLoad.update();
    }

    smoothScroll.start();

    Preloader.Enter(() => {
      motion.reinit();
      // Reinitialize Elementor on page transitions
      if (window.elementorFrontend && !elementorInitialized) {
        waitForElementor(() => {
          window.elementorFrontend.init();
        });
      }
    });
  }

  onLeaveCompleted() {
    smoothScroll.stop();
    CleanScrolltrigger(true);

    // Reset scroll position
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
      links: "a:not([target]):not([href^=\\#]):not([data-taxi-ignore]):not([data-elementor-open-lightbox]), a.ab-item",
      reloadJsFilter: (element) => {
        // Don't reload Elementor scripts
        if (element.id && element.id.includes('elementor')) {
          return false;
        }
        return element.id === "assetjs-js" || element.dataset.taxiReload !== undefined;
      },
    });

    // Handle hash navigation
    window.addEventListener('load', () => {
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView();
          }
        }, 1000);
      }
    });
  }
}

new App();
