import gsap from 'gsap';
import configAnimation from '../motion/config';

export let matchMedia;

export default class Matchmedia {
  constructor() {
    this.init();
  }

  init() {
    this.Matchmedia();
  }

  Matchmedia() {
    const mm = gsap.matchMedia();
    const breakPoint = configAnimation.mediaQuery;

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`
        // reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        const { isDesktop, isMobile } = context.conditions;

        const preloadHide = () => {
          if (isDesktop) {
            gsap.set('#preloader-mobile', {
              display: 'none'
            });
          }

          if (isMobile) {
            gsap.set('#preloader', {
              display: 'none'
            });
          }
        };

        const reloadBrowser = (br) => {
          const mediaQuery = window.matchMedia(br);

          window.addEventListener('resize', function () {
            if (mediaQuery.matches) {
              preloadHide(br);

              // if (process.env.NODE_ENV === 'development') return;
              window.location.reload();
            }
          });
        };

        // check desktop mode
        if (isDesktop) {
          reloadBrowser(context.queries.isMobile);
        }

        // check mobile mode
        if (isMobile) {
          reloadBrowser(context.queries.isDesktop);
        }

        return () => {
          // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
        };
      }
    );

    const [mmcontexts] = mm.contexts;
    matchMedia = mmcontexts.conditions;
  }
}
