import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import configMotion from './config';
gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function Default() {
  // Config GSAP
  gsap.config({
    nullTargetWarn: process.env.NODE_ENV === 'development'
  });

  CustomEase.create('customDefault', configMotion.cubicBezier);

  gsap.defaults({
    ease: configMotion.ease,
    duration: configMotion.duration
  });

  ScrollTrigger.defaults({
    start: configMotion.scrollStart,
  });

  ScrollTrigger.config({ ignoreMobileResize: true });
}
