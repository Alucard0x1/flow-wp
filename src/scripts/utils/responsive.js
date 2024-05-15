import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// deprecated use matchmedia.js instead
export function Responsive({ desktop, mobile, both }) {
  try {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 500px)': function () {
        if (!desktop) return;
        desktop();
      },

      // mobile
      '(max-width: 499px)': function () {
        if (!mobile) return;
        mobile();
      },

      // both
      all: function () {
        if (!both) return;
        both();
      }
    });
  } catch (error) {}
}

export function ResponsiveAgent({ desktop, mobile }) {
  try {
    if (ScrollTrigger.isTouch) {
      mobile();
    } else {
      desktop();
    }
  } catch (error) {}
}
