import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothScroll } from "./smoothscroll";
gsap.registerPlugin(ScrollTrigger);

class Nav {
  constructor() {
    this.toggle = document.querySelector(".nav-toggle .hamburger");
    this.popup = document.querySelector(".nav-popup");
    this.popupBg = this.popup.querySelector(".container-bg");
    this.backdrop = this.popup.querySelector(".backdrop");

    this.menuLinkWrapper = this.popup.querySelector(".menu-left");
    this.menuLink = this.popup.querySelectorAll(".menu-left-link");

    this.popupContentWrapper = [
      this.popup.querySelector(".image-wrapper"),
      this.popup.querySelector(".content-wrapper"),
    ];
    this.popupContentMenuLeft = [
      this.popup.querySelector(".content-wrapper p"),
      this.menuLink,
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
    this.popupContentImage = this.popup.querySelector(".image-wrapper .image");
    this.popupContentImages = [
      this.popup.querySelector(".image-wrapper p"),
      this.popupContentImage,
    ];

    this.bulletLink = this.popup.querySelector(".bullet");
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

    if (ScrollTrigger.isTouch) return;
    if (this.menuLink.length) {
      let zIndexImage = 0;
      let menuIndex = 0;

      this.menuLink.forEach((el, index) => {
        const getTop = el.offsetTop + el.offsetHeight / 2;
        const bulletHeight = this.bulletLink.offsetHeight / 2;

        const link = el.querySelector("a");
        const dataimage = link.dataset.image;
        const img = document.createElement("img");
        img.src = dataimage;
        img.alt = link.textContent;
        this.popupContentImage.appendChild(img);

        el.addEventListener("mouseenter", (e) => {
          gsap.to(this.bulletLink, {
            scale: 1,
            y: () => getTop - bulletHeight,
            ease: "expo.out",
            duration: 0.6,
            overwrite: true,
          });

          // gsap.killTweensOf(this.popupContentImage.children);
          if (menuIndex === index) return;
          zIndexImage++;
          menuIndex = index;

          gsap.set(this.popupContentImage.children[index], {
            zIndex: zIndexImage,
          });

          // gsap.fromTo(
          //   this.popupContentImage.children[index],
          //   {
          //     scale: 0,
          //   },
          //   {
          //     scale: 1,
          //     ease: "power4.out",
          //     duration: 1.0,
          //     willChange: "transform",
          //     overwrite: true,
          //   }
          // );
        });
      });

      this.menuLinkWrapper.addEventListener("mouseleave", (e) => {
        // zIndexImage = 0;

        gsap.to(this.bulletLink, {
          scale: 0,
          ease: "expo.out",
          duration: 0.4,
          overwrite: true,
        });
      });
    }
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
        this.popupContentImages,
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

      gsap.to(this.popupContentImages, {
        y: gsap.utils.wrap([-40, null]),
        scale: gsap.utils.wrap([1, 0]),
        duration: 0.8,
        willChange: "transform",
        overwrite: true,
      });
    }
  }

  normalizeUrl(url) {
    if (url.endsWith("/") && url.length > 1) {
      url = url.substring(0, url.length - 1);
    }
    return url.toLowerCase();
  }

  bullet() {
    this.menuLink.forEach((el) => {
      const texthref = this.normalizeUrl(el.querySelector("a").href);
      const currentUrl = this.normalizeUrl(window.location.href);

      if (texthref === currentUrl) {
        el.classList.add("active");

        if (ScrollTrigger.isTouch) return;
        const getTop = el.offsetTop + el.offsetHeight / 2;
        const bulletHeight = this.bulletLink.offsetHeight / 2;

        gsap.set(this.bulletLink, {
          y: () => getTop - bulletHeight,
        });
      } else {
        el.classList.remove("active");
      }
    });
  }
}

export default Nav;
