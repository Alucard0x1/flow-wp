import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothScroll } from "./smoothscroll";
import { isMobileQuery } from "../utils/responsive";
gsap.registerPlugin(ScrollTrigger);

class Nav {
  constructor() {
    this.nav = document.querySelector(".nav");
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
    this.popupContentImageDesc = this.popup.querySelector(".image-wrapper p");
    this.popupContentImage = this.popup.querySelector(".image-wrapper .image");
    this.popupContentImages = [
      this.popupContentImageDesc,
      this.popupContentImage,
    ];

    this.bulletLink = this.popup.querySelector(".bullet");

    this.menuIndexInit = 0;
    this.menuItemActive = false;
    this.zIndexImage = 0;
    this.menuIndex = null;
    this.popupImageDescText = this.popupContentImageDesc.textContent;
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

  defaultState() {
    this.zIndexImage = this.menuIndex || 0;

    this.popupContentImageDesc.textContent = this.menuItemActive
      ? this.menuLink[this.menuIndexInit].querySelector("a").dataset.desc
      : this.popupImageDescText;

    gsap.set(this.popupContentImage.children, {
      zIndex: 0,
    });

    gsap.set(
      this.popupContentImage.children[
        this.menuItemActive ? this.menuIndexInit + 1 : 0
      ],
      {
        zIndex: 1,
      }
    );
  }

  event() {
    this.nav.addEventListener("click", (e) => {
      e.target.addEventListener("click", (e2) => {
        if (!e2.target.closest(".nav-logo, .nav-right")) {
          if (!this.popup.classList.contains("active")) return;
          this.close();
        }
      });
    });

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

    if (isMobileQuery()) return;
    if (this.menuLink.length) {
      this.menuLink.forEach((el, index) => {
        const link = el.querySelector("a");
        const dataimage = link.dataset.image;
        const img = document.createElement("img");
        img.src = dataimage;
        img.alt = link.textContent;
        this.popupContentImage.appendChild(img);

        el.addEventListener("mouseenter", (e) => {
          const getTop = el.offsetTop + el.offsetHeight / 2;
          const bulletHeight = this.bulletLink.offsetHeight / 2;

          gsap.to(this.bulletLink, {
            scale: 1,
            y: () => getTop - bulletHeight,
            ease: "expo.out",
            duration: 0.6,
            overwrite: true,
          });

          // gsap.killTweensOf(this.popupContentImage.children);
          // if (this.menuIndex === index) return;
          this.zIndexImage++;
          this.menuIndex = index;

          gsap.set(this.popupContentImage.children[index + 1], {
            zIndex: this.zIndexImage,
          });

          this.popupContentImageDesc.textContent = link.dataset.desc;

          gsap.fromTo(this.popupContentImageDesc, {
            opacity: 0,
          }, {
            opacity: 1,
            duration: 0.8,
            overwrite: true,
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
        this.defaultState();

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
        this.popupContentImageDesc,
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
          overwrite: true,
        }
      );
      
      gsap.fromTo(
        this.popupContentImage,
        {
          clipPath: "inset(100% 100% 0% 0% round calc(16 / var(--vw) * var(--scaler) * var(--multiplier)))",
        },
        {
          clipPath: "inset(0% 0% 0% 0% round calc(16 / var(--vw) * var(--scaler) * var(--multiplier)))",
          delay: delay - 0.2,
          ease: "expo.out",
          duration: 1.0,
          willChange: "clip-path",
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

      gsap.to(this.popupContentImageDesc, {
        y: -40,
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
    this.menuItemActive = false;
    this.menuIndexInit = 0;

    this.menuLink.forEach((el, index) => {
      const texthref = this.normalizeUrl(el.querySelector("a").href);
      const currentUrl = this.normalizeUrl(window.location.href);

      if (texthref === currentUrl) {
        el.classList.add("active");

        if (isMobileQuery()) return;
        const getTop = el.offsetTop + el.offsetHeight / 2;
        const bulletHeight = this.bulletLink.offsetHeight / 2;

        gsap.set(this.bulletLink, {
          y: () => getTop - bulletHeight,
        });

        this.menuIndex = index;
        this.menuIndexInit = index;
        this.menuItemActive = true;
      } else {
        el.classList.remove("active");
      }
    });

    this.defaultState();
  }
}

export default Nav;
