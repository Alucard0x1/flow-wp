import gsap from "gsap";
import { smoothScroll } from "./smoothscroll";
class Nav {
  constructor() {
    this.toggle = document.querySelector(".nav-toggle .hamburger");
    this.popup = document.querySelector(".nav-popup");
    this.popupBg = this.popup.querySelector(".container-bg");
    this.backdrop = this.popup.querySelector(".backdrop");
    this.popupContentWrapper = [
      this.popup.querySelector(".image-wrapper"),
      this.popup.querySelector(".content-wrapper"),
      this.popup.querySelectorAll(".menu-left .menu-left-link"),
    ];
    this.popupContentMenuLeft = [
      this.popup.querySelector(".content-wrapper p"),
      this.popup.querySelectorAll(".menu-left .menu-left-link"),
    ];
    this.popupContentMenuRight = [
      this.popup.querySelectorAll(".menu-right .menu-right-link"),
    ];
    this.popupContentMenuFooter = [
      this.popup.querySelectorAll(".nav-popup-footer a"),
    ];
    this.popupContentBorder = this.popup.querySelector(
      ".content-wrapper .border"
    );
    this.popupContentImage = [
      this.popup.querySelector(".image-wrapper p"),
      this.popup.querySelector(".image-wrapper img"),
    ];
  }

  init() {
    this.event();
  }

  show() {
    smoothScroll.stop();
    this.popup.classList.add("active");
    this.toggle.classList.add("active");
    

    gsap.to(this.popupBg, {
      scale: 1,
      ease: "expo.out",
      duration: 0.8,
      overwrite: true,
    });

    this.content(true, 0.2);
  }

  close() {
    smoothScroll.start();
    this.popup.classList.remove("active");
    this.toggle.classList.remove("active");

    gsap.to(this.popupBg, {
      scale: 0,
      duration: 0.4,
      overwrite: true,
    });

    this.content(false);
  }

  event() {
    this.toggle.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.popup.classList.contains("active")) {
        this.close();
      } else {
        this.show();
      }
    });

    this.backdrop.addEventListener("click", (e) => {
      this.close();
    });
  }

  content(show = false, delay = 0) {
    const tweenContent = [
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay,
        duration: 0.8,
        willChange: "transform",
        stagger: 0.05,
        overwrite: true,
      },
    ];

    const tweenContentExit = [
      {
        y: -40,
        duration: 0.8,
        willChange: "transform",
        stagger: 0,
        overwrite: true,
      },
    ];

    if (show) {
      gsap.to(this.popupContentWrapper, {
        opacity: 1,
        delay: delay,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });

      gsap.fromTo(this.popupContentMenuLeft, ...tweenContent);
      gsap.fromTo(this.popupContentMenuRight, ...tweenContent);
      gsap.fromTo(this.popupContentMenuFooter, ...tweenContent);
      gsap.fromTo(
        this.popupContentBorder,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          delay: delay + 0.2,
          duration: 0.8,
          transformOrigin: "left",
          willChange: "transform",
        }
      );

      gsap.fromTo(
        this.popupContentImage,
        {
          opacity: gsap.utils.wrap([0, 1]),
          y: gsap.utils.wrap([40, null]),
          scale: gsap.utils.wrap([1, 0]),
        },
        {
          opacity: 1,
          y: gsap.utils.wrap([0, null]),
          scale: gsap.utils.wrap([1, 1]),
          delay: gsap.utils.wrap([delay, delay - 0.2]),
          duration: 0.8,
          willChange: "transform",
          overwrite: true,
        }
      );
    } else {
      gsap.to(this.popupContentWrapper, {
        opacity: 0,
        delay: delay,
        duration: 0.2,
        ease: "power2.out",
        overwrite: true,
      });

      gsap.to(this.popupContentMenuLeft, ...tweenContentExit);
      gsap.to(this.popupContentMenuRight, ...tweenContentExit);
      gsap.to(this.popupContentMenuFooter, ...tweenContentExit);

      gsap.to(this.popupContentBorder, {
        scaleX: 0,
        duration: 0.8,
        transformOrigin: "right",
        willChange: "transform",
      });

      gsap.to(this.popupContentImage, {
        y: gsap.utils.wrap([-40, null]),
        scale: gsap.utils.wrap([1, 0]),
        duration: 0.8,
        willChange: "transform",
        overwrite: true,
      });
    }
  }
}

export default Nav;
