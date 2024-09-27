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

    const langItem = document.querySelector('.lang-item').firstElementChild;
    const el = document.querySelector('#pll')
    const pll = el.dataset.lang
    const curLang = el.dataset.activeLang
    const navHeading = el.dataset.navHeading
    const navCta = el.dataset.navCta
    const imgHeading = el.dataset.imgHeading
    const popupRight = JSON.parse(decodeURIComponent(el.dataset.popupRight))
    const footerMenu = JSON.parse(decodeURIComponent(el.dataset.footerMenu))
    const newsletterHeading = el.dataset.newsletterHeading

    let languages = JSON.parse(decodeURIComponent(pll))
    languages = Object.values(languages)

    langItem.textContent = languages[0].slug
    langItem.href = languages[0].url

    document.firstElementChild.setAttribute('lang', curLang)

    document.querySelector('.content-wrapper > p').textContent = navHeading
    const contactWrapper = document.querySelector('.contact-wrapper')

    if (contactWrapper) {
      contactWrapper.textContent = navCta
    }
    document.querySelector('.image-wrapper > p').textContent = imgHeading
    document.querySelector('.newsletter > p').textContent = newsletterHeading

    document.querySelectorAll('.menu-left-link').forEach((el) => {
      const a = el.firstElementChild
      const post = JSON.parse(decodeURIComponent(a.dataset.lang))[curLang]

      if (post != null) {
        a.textContent = post.title
        a.setAttribute('data-desc', post.excerpt)
        a.href = post.link
      }
    })

    document.querySelectorAll('.menu-right-link').forEach((el, index) => {
      const a = el.firstElementChild

      const post = popupRight.items[index]
      a.textContent = post.post_title
      a.href = post.url
    })

    document.querySelectorAll('.footer-left .menu-nav div').forEach((el, index) => {
      const a = el.firstElementChild

      const post = footerMenu.items[index]
      console.log(post)
      a.textContent = post.post_title
      a.href = post.url
    })

    done();
  }
}
