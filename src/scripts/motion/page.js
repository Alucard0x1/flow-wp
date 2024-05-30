import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import { smoothScroll } from "./smoothscroll";

gsap.registerPlugin(ScrollTrigger, Flip);

export default class Page {
  constructor() {
    this.state = null;

    this.tlHero = null;

    this.heroImage = null;
    this.scaledImage = null;
  }
  heroprepare() {
    smoothScroll.scrollTo(0, {
      force: true,
      immediate: true,
    });

    this.heroImage = document.querySelector(".hero .image-wrapper");
    this.scaledImage = document.querySelector(".scaled-image .image-wrapper");

    if (!this.scaledImage || !this.heroImage) return;

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
        // invaludateOnRefresh: true,
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
    const title = document.querySelector(".hero-content h1");

    if (title) {
      gsap.to(title, {
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
    }

    const desc = document.querySelector(".hero-content p");

    if (desc) {
      gsap.fromTo(
        desc,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "sine.inOut",
          stagger: {
            each: 0.15,
          },
        }
      );
    }

    if (!this.tlHero) return;

    const tlHeroChar = [
      ...document.querySelectorAll(".hero .hero-content .char"),
    ];

    if (!tlHeroChar.length) return;
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
    this.heroImage = document.querySelector(".hero .image-wrapper");
    this.scaledImage = document.querySelector(".scaled-image .image-wrapper");

    if (!this.scaledImage || !this.heroImage) return;

    this.tlHero.fromTo(
      ".hero .image-wrapper, .scaled-image .image-wrapper",
      {
        borderRadius: "0px",
      },
      {
        borderTopLeftRadius: `calc(${
          ScrollTrigger.isTouch ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderTopRightRadius: `calc(${
          ScrollTrigger.isTouch ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderBottomLeftRadius: `calc(${
          ScrollTrigger.isTouch ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderBottomRightRadius: `calc(${
          ScrollTrigger.isTouch ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
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
      ".scaled-image .image-wrapper video",
      {
        scale: 1,
      },
      {
        scale: 1.2,
      },
      0
    );

    this.tlHero.fromTo(
      ".scaled-image .category-wrapper, .scaled-image .description-wrapper",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.15,
      },
      0.7
    );
  }

  map() {
    const section = document.querySelector(".map-intro");

    if (!section) return;
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
    const section = document.querySelector(".text-image .image-wrapper");

    if (!section) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".text-image .image-wrapper",
        start: "top center+=30%",
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
        y: 0,
      },
      0
    );

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

  // amnities() {
  //   const section = document.querySelector(".list-image");

  //   if (!section) return;
  //   if (ScrollTrigger.isTouch) return;

  //   const tl = gsap.timeline({
  //     defaults: {
  //       ease: "none",
  //     },
  //     scrollTrigger: {
  //       trigger: ".list-image",
  //       start: "center center",
  //       end: "+=100%",
  //       endTrigger: ".list-image .list-wrapper-content",
  //       pin: true,
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   tl.to(
  //     ".list-image .list-wrapper-content",
  //     {
  //       y: () => {
  //         const textTitle = document.querySelector(
  //           ".list-image .content-inner h2"
  //         ).offsetHeight;
  //         const textDescription = document.querySelector(
  //           ".list-image .content-inner p"
  //         ).offsetHeight;
  //         const listContentHeight = document.querySelector(
  //           ".list-image .list-wrapper-content"
  //         ).offsetHeight;
  //         const triggerHeight =
  //           document.querySelector(".list-image").offsetHeight;
  //         const maxScroll =
  //           listContentHeight +
  //           (textDescription
  //             ? textTitle * 2 + textDescription * 2
  //             : textTitle * 2.8) -
  //           triggerHeight;
  //         return -maxScroll;
  //       },
  //     },
  //     0
  //   );
  // }

  amnities2() {
    const section = document.querySelector(".amenities");

    if (!section) return;

    if (ScrollTrigger.isTouch) {
      const contentWrapper = document.querySelector(
        ".amenities .content-wrapper"
      );

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${contentWrapper.offsetHeight}px`,
          endTrigger: ".text-image",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        ".amenities .content-wrapper",
        {
          yPercent: -90,
          duration: 4,
        },
        0
      );

      tl.to(
        ".amenities .image-wrapper",
        {
          // opacity: 0,
          yPercent: -120,
          // height: "50%",
          duration: 0.9,
        },
        0
      );
    } else {
      const itemClick = () => {
        const items = [
          ...document.querySelectorAll(
            ".amenities .content-list .content-item"
          ),
        ];

        if (!items.length) return;

        const desc = document.querySelector(
          ".amenities .content-description-main"
        );

        items.forEach((el, index) => {
          const title = el.querySelector(".content-title");
          const itemDesc = el.querySelector(".content-description");

          if (index === 0) {
            title.classList.add("active");
            desc.textContent = itemDesc.textContent;
          }

          title.addEventListener("click", () => {
            title.classList.add("active");
            desc.textContent = itemDesc.textContent;

            gsap.fromTo(
              desc,
              {
                opacity: 0,
                maskImage:
                  "linear-gradient(170deg, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%)",
              },
              {
                opacity: 1,
                maskImage:
                  "linear-gradient(170deg, rgb(0, 0, 0) 100%, rgba(255, 255, 255, 0) 180%)",
                duration: 3.0,
                ease: "power4.out",
              }
            );

            // make rest all inactive
            items.forEach((item) => {
              if (item !== el) {
                item.querySelector(".content-title").classList.remove("active");
              }
            });
          });
        });
      };

      itemClick();
    }
  }

  sideimage() {
    const section = document.querySelector(".side-image");

    if (!section) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.from(
      ".side-image .image-wrapper img, .side-image .image-wrapper video",
      {
        scale: 1.2,
      }
    );
  }

  sliderscroll() {
    const section = document.querySelector(".scroll-slider");

    if (!section) return;

    const slides = section.querySelectorAll(
      ".slide-wrapper .media-item-wrapper"
    );
    const slidesText = section.querySelectorAll(".slide-wrapper .text-content");
    const buttons = section.querySelectorAll(
      ".slide-wrapper .slider-action .btn"
    );
    const numberActive = section.querySelector(".content-wrapper .num-active");

    const header = document.querySelector(".nav");

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".scroll-slider",
        start: () =>
          ScrollTrigger.isTouch ? `top top+=${header.offsetHeight}` : "top top",
        end: `+=${
          ScrollTrigger.isTouch ? slides.length / 2 : slides.length
        }00%`,
        scrub: true,
        pin: ".scroll-slider .slide-wrapper",
        invalidateOnRefresh: ScrollTrigger.isTouch ? false : true,
      },
    });

    gsap.utils
      .toArray(".slide-wrapper .media-item-wrapper")
      .forEach((slide, index) => {
        const media = slide.querySelector(".media-item");
        const charCurrent = ScrollTrigger.isTouch
          ? slidesText[index]
          : slidesText[index].querySelectorAll(".char");

        if (index === slides.length - 1) return;
        const mediaNext = slides[index + 1].querySelector(".media-item");
        const charNext = ScrollTrigger.isTouch
          ? slidesText[index + 1]
          : slidesText[index + 1].querySelectorAll(".char");

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
          ScrollTrigger.isTouch ? "-=120%" : "-=100%"
        );

        tl.to(
          media,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            // yPercent: -20,
          },
          ScrollTrigger.isTouch ? "-=80%" : "-=100%"
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

  highlight() {
    const section = document.querySelector(".three-highlights");

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
      },
    });

    tl.from(".three-highlights .content-item", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
    });

    const tlImage = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tlImage.from(
      ".three-highlights .image-wrapper img, .three-highlights .image-wrapper video",
      {
        scale: 1.2,
      }
    );
  }

  solutionrelated() {
    const section = document.querySelector(".solution-related");

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
      },
    });

    tl.from(".solution-related .content-item", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
    });
  }

  solutionlist() {
    if (ScrollTrigger.isTouch) return;

    const section = document.querySelector(".solutions-list");

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
      },
    });

    tl.from(".solutions-list .content-item", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
    });
  }

  solutionstack() {
    if (!ScrollTrigger.isTouch) return;

    const section = document.querySelector(".solutions-list");

    if (!section) return;

    const items = [
      ...document.querySelectorAll(".solutions-list .content-item"),
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: true,
        start: "top top",
        end: `+=${items.length - 1}00%`,
      },
    });

    gsap.utils.toArray(".solutions-list .content-item").forEach((el, index) => {
      if (index === 0) return;
      const tlTween = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "power4.out",
        },
        scrollTrigger: {
          trigger: el,
          start: `${index === 1 ? 0 : index * 50}%`,
          end: "+=100%",
          onEnter: () => tlTween.play(),
          onLeaveBack: () => tlTween.reverse(),
        },
      });

      tlTween.to(el, {
        y: 0,
      });
    });
  }

  footer() {
    const section = document.querySelector(".footer");

    if (!section) return;

    if (ScrollTrigger.isTouch) return;
    if (ScrollTrigger.getById("once")) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true,
        refreshPriority: -1,
        id: "once",
      },
    });

    tl.set(section, {
      yPercent: -80,
    });

    tl.to(section, {
      yPercent: 0,
    });
  }
}
