import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import { smoothScroll } from "./smoothscroll";

gsap.registerPlugin(ScrollTrigger, Flip);

export default class Page {
  constructor() {
    this.state = null;

    this.tlHero = null;

    this.heroImage = document.querySelector(".hero .image-wrapper");
    this.scaledImage = document.querySelector(".scaled-image .image-wrapper");
  }
  heroprepare() {
    smoothScroll.scrollTo(0, {
      force: true,
      immediate: true,
    });

    this.scaledImage.innerHTML = this.heroImage.innerHTML;

    this.state = Flip.getState(
      ".hero .image-wrapper, .scaled-image .image-wrapper"
    );

    this.heroImage.classList.toggle("active");
    this.scaledImage.classList.toggle("active");

    gsap.to(".scaled-image", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".scaled-image",
        start: "clamp(top top)",
        end: "+=100%",
        endTrigger: ".map-intro",
        pin: true,
        scrub: true,
        invaludateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    this.tlHero = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "clamp(top top)",
        end: "+=100%",
        endTrigger: ".scaled-image",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });
  }

  hero() {
    gsap.to(".hero-content h1", {
      opacity: 1,
    });

    gsap.fromTo(
      ".hero-content h1 .line",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
        },
      }
    );

    this.tlHero.fromTo(
      ".hero .hero-content .char",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.3,
        immediateRender: false,
        stagger: {
          each: 0.01,
        },
      },
      0
    );

    this.tlHero.fromTo(
      ".scaled-image h2 .char",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.01,
        },
      },
      0.5
    );
  }

  heroscroll() {
    this.tlHero.fromTo(
      ".hero .image-wrapper, .scaled-image .image-wrapper",
      {
        borderRadius: "0px",
      },
      {
        borderTopLeftRadius:
          "calc(20 / var(--vw) * var(--scaler) * var(--multiplier))",
        borderTopRightRadius:
          "calc(20 / var(--vw) * var(--scaler) * var(--multiplier))",
        borderBottomLeftRadius:
          "calc(20 / var(--vw) * var(--scaler) * var(--multiplier))",
        borderBottomRightRadius:
          "calc(20 / var(--vw) * var(--scaler) * var(--multiplier))",
        overwrite: true,
      }
    );

    this.tlHero.add(
      Flip.from(this.state, {
        duration: 1,
        ease: "none",
      }),
      0
    );

    this.tlHero.fromTo(
      ".scaled-image .category-wrapper, .scaled-image .description-wrapper",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.15
      }, 0.7
    );
  }

  map() {
    gsap.from(".map-intro .description-wrapper", {
      yPercent: 130,
      duration: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".map-intro .image-wrapper",
        start: "center bottom",
      },
    });
  }

  philosophy() {
    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".text-image .image-wrapper",
        start: "top center",
        end: "+=100%",
        scrub: true,
        // pin: true,
        // invalidateOnRefresh: true,
      },
    });

    tl.from(".text-image .image-wrapper", {
      scale: 0.845,
    });

    tl.to(
      ".text-image .image-wrapper",
      {
        borderRadius: "0",
      },
      0
    );

    tl.to(
      ".text-image .frame-wrapper",
      {
        scale: 1,
      },
      0
    );

    gsap.to(".text-image", {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".text-image .image-wrapper",
        start: "center center",
        end: "+=35%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // const tlDescriptionAnim = gsap.timeline({
    //   paused: true,
    // });

    // tlDescriptionAnim.to(".text-image .description-inner", {
    //   y: 0,
    //   duration: 1.2,
    //   ease: "power2.inOut",
    // });

    // tlDescriptionAnim.from(
    //   ".text-image .description-inner p",
    //   {
    //     opacity: 0,
    //     ease: "power2.out",
    //   },
    //   0.5
    // );

    // tl.call(() => tlDescriptionAnim.reverse(), null, "+=5%");
    // tl.call(() => tlDescriptionAnim.play(), null, "+=10%");

    // tl.fromTo(".text-image .description-inner", {
    //   yPercent: 130,
    // }, {
    //   yPercent: 0,
    //   duration: 1.2,
    // }, 0.5);

    tl.to(".text-image .image-wrapper", {
      opacity: 1,
      duration: 0.6,
    });
  }

  amnities() {
    if (ScrollTrigger.isTouch) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".list-image",
        start: "center center",
        end: "+=100%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      ".list-image .list-wrapper-content",
      {
        y: () =>
          -document.querySelector(".list-image .list-wrapper-content")
            .offsetHeight / 1.8,
      },
      0
    );
  }

  sliderscroll() {
    if (ScrollTrigger.isTouch) return;

    const section = document.querySelector(".scroll-slider");
    const slides = section.querySelectorAll(
      ".slide-wrapper .media-item-wrapper"
    );
    const slidesText = section.querySelectorAll(".slide-wrapper .text-content");
    const buttons = section.querySelectorAll(
      ".slide-wrapper .slider-action .btn"
    );
    const numberActive = section.querySelector(".content-wrapper .num-active");

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".scroll-slider",
        start: "top top",
        end: `+=${slides.length}00%`,
        scrub: true,
        pin: ".scroll-slider .slide-wrapper",
        invalidateOnRefresh: true,
      },
    });

    gsap.utils
      .toArray(".slide-wrapper .media-item-wrapper")
      .forEach((slide, index) => {
        const media = slide.querySelector(".media-item");
        const charCurrent = slidesText[index].querySelectorAll(".char");

        if (index === slides.length - 1) return;
        const mediaNext = slides[index + 1].querySelector(".media-item");
        const charNext = slidesText[index + 1].querySelectorAll(".char");

        tl.to(charCurrent, {
          opacity: 0,
          duration: 0.3,
          stagger: {
            each: 0.001,
            from: "end",
          },
          onStart: () => {
            buttons[index].classList.remove("active");
            buttons[index + 1].classList.add("active");
          },
          onComplete: () => {
            numberActive.textContent = index + 2;
          },
          onReverseComplete: () => {
            numberActive.textContent = index + 1;
            buttons[index].classList.add("active");
            buttons[index + 1].classList.remove("active");
          },
        });

        tl.to(
          charNext,
          {
            opacity: 1,
            duration: 0.3,
            delay: 0.5,
            stagger: {
              each: 0.001,
              from: "end",
            },
          },
          "-=100%"
        );

        tl.to(
          media,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            // yPercent: -20,
          },
          "-=100%"
        );

        // tl.fromTo(
        //   mediaNext,
        //   {
        //     yPercent: 15,
        //   },
        //   {
        //     yPercent: 0,
        //   },
        //   "-=100%"
        // );
      });

    tl.to(section, {
      opacity: 1,
      duration: 0.2,
    });
  }

  footer() {
    if (ScrollTrigger.isTouch) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true,
        refreshPriority: -1,
      },
    });

    tl.set(".footer", {
      yPercent: -80,
    });

    tl.to(".footer", {
      yPercent: 0,
    });
  }
}
