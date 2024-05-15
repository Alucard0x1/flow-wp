import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function CleanScrolltrigger(refresh = false) {
  try {
    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.id === 'once') return;
      t.kill(false);
    });

    if (!refresh) return;
    ScrollTrigger.refresh();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') return;
    console.log(error);
  }
}
