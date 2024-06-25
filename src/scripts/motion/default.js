import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import configMotion from './config';
import { isMobileQuery  } from '../utils/responsive';
gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function Default() {
  // Config GSAP
  gsap.config({
    nullTargetWarn: false
  });

  CustomEase.create('customDefault', configMotion.cubicBezier);

  gsap.defaults({
    ease: configMotion.ease,
    duration: configMotion.duration
  });

  ScrollTrigger.defaults({
    start: isMobileQuery() ? "top bottom" : configMotion.scrollStart,
  });

  ScrollTrigger.config({ ignoreMobileResize: true });
}
