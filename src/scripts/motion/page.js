import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import { smoothScroll } from "./smoothscroll";
import { debounce } from "../utils/debounce";
import { isMobileQuery } from "../utils/responsive";
import Carousel from "./Carousel";


gsap.registerPlugin(ScrollTrigger, Flip);

export default class Page {
  constructor() {
    this.tlHero = null;

    this.heroImage = null;
    this.scaledImage = null;
  }

  heroflip() {
    let flipCtx;

    this.heroImage = document.querySelector(".hero .image-wrapper");
    this.scaledImage = document.querySelector(".scaled-image .image-wrapper");

    if (!this.scaledImage || !this.heroImage) return;

    this.heroImage.classList.add("active");
    this.scaledImage.classList.add("active");

    const anim = () => {
      flipCtx && flipCtx.revert();
      // this.scaledImage.style.cssText = "";
      // this.heroImage.style.cssText = "";

      this.scaledImage.innerHTML = this.heroImage.innerHTML;

      flipCtx = gsap.context(() => {
        const state = Flip.getState([this.heroImage, this.scaledImage]);

        const flip = Flip.from(state, {
          duration: 1,
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: "body",
          start: "clamp(top top)",
          end: "+=50%",
          endTrigger: ".scaled-image",
          scrub: true,
          refreshPriority: 1,
          animation: flip,
        });
      });
    };

    anim();

    if (isMobileQuery()) return;
    window.addEventListener("resize", debounce(anim, 500));

    // TODO: temp solution responsive flip
    window.addEventListener("resize", () => {
      if (!this.scaledImage || !this.heroImage) return;

      smoothScroll.scrollTo(0, {
        force: true,
        immediate: true,
      });
    });
  }

  heroprepare() {
    smoothScroll.scrollTo(0, {
      force: true,
      immediate: true,
    });

    this.heroImage = document.querySelector(".hero .image-wrapper");
    this.scaledImage = document.querySelector(".scaled-image .image-wrapper");
    if (!this.scaledImage || !this.heroImage) return;

    gsap.to(".scaled-image", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".scaled-image",
        start: "clamp(top top)",
        end: "+=150%",
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

    if (tlHeroChar.length) {
      this.tlHero.fromTo(
        tlHeroChar,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.3,
          // immediateRender: false,
          stagger: {
            each: 0.01,
          },
        },
        0
      );
    }

    const tlScaledChar = [
      ...document.querySelectorAll(".scaled-image h2 .char"),
    ];

    if (tlScaledChar.length) {
      this.tlHero.fromTo(
        tlScaledChar,
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
          isMobileQuery() ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderTopRightRadius: `calc(${
          isMobileQuery() ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderBottomLeftRadius: `calc(${
          isMobileQuery() ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        borderBottomRightRadius: `calc(${
          isMobileQuery() ? 10 : 20
        } / var(--vw) * var(--scaler) * var(--multiplier))`,
        overwrite: true,
      }
    );

    // this.tlHero.add(
    //   Flip.from(this.state, {
    //     duration: 1,
    //     ease: "none",
    //   }),
    //   0
    // );

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

  scrollslider() {
    const section = document.querySelector(".image-background");

    if (!section) return;
    if (isMobileQuery()) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".list-image",
        start: "center center",
        end: "+=100%",
        endTrigger: ".list-image .list-wrapper-content",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      ".list-image .list-wrapper-content",
      {
        y: () => {
          const textTitle = document.querySelector(
            ".list-image .content-inner h2"
          ).offsetHeight;
          const textDescription = document.querySelector(
            ".list-image .content-inner p"
          ).offsetHeight;
          const listContentHeight = document.querySelector(
            ".list-image .list-wrapper-content"
          ).offsetHeight;
          const triggerHeight =
            document.querySelector(".list-image").offsetHeight;
          const maxScroll =
            listContentHeight +
            (textDescription
              ? textTitle * 2 + textDescription * 2
              : textTitle * 2.8) -
            triggerHeight;
          return -maxScroll;
        },
      },
      0
    );
  }

  amnities2() {
    const section = document.querySelector(".amenities");

    if (!section) return;

    if (isMobileQuery()) {
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
    const section = document.querySelector(".image-background");

    if (!section) return;
    const wrapper = section.querySelector(".slide-wrapper");

    const slides = section.querySelectorAll(".slide-wrapper .image-wrapper");

    const slidesText = wrapper.querySelectorAll(".content-wrapper__content");

    const master = document.createElement("div");
    master.classList.add("master");
    master.classList.add("is-active");
    wrapper.appendChild(master);

    const content = slides[0].querySelector(".content-wrapper");
    master.appendChild(content);

    slides.forEach((el, index) => {
      if (el.classList.contains("is-active")) {
        el.classList.remove("is-active");
      }

      const media = el.querySelector("img") || el.querySelector("video");
      media.classList.add("media");
      media.style.zIndex = slides.length - 1 - index;
      master.appendChild(media);

      if (index === 0) return;
      const contentItem = el.querySelector(".content-wrapper__content");
      content.appendChild(contentItem);
    });

    // const buttons = section.querySelectorAll(
    //   ".slide-wrapper .slider-action .btn"
    // );
    const header = document.querySelector(".nav");

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 1,
      },
      scrollTrigger: {
        trigger: section,
        start: () => "top top",
        end: `+=${isMobileQuery() ? slides.length / 2 : slides.length}00%`,
        scrub: true,
        pin: ".image-background .slide-wrapper",
        invalidateOnRefresh: isMobileQuery() ? false : true,
      },
    });

    gsap.utils
      .toArray(".image-background .master .media")
      .forEach((slide, index) => {
        const media = slide;
        const charCurrent = slidesText[index].querySelectorAll(".char");

        if (index === slides.length - 1) return;
        // const mediaNext = slides[index + 1].querySelector(".media-item");
        const charNext = slidesText[index + 1].querySelectorAll(".char");

        tl.to(charCurrent, {
          opacity: 0,
          duration: 0.3,
          stagger: {
            each: 0.001,
            from: "end",
          },
          // onStart: () => {
          //   buttons[index].classList.remove("active");
          //   buttons[index + 1].classList.add("active");
          // },
          // onReverseComplete: () => {
          //   buttons[index].classList.add("active");
          //   buttons[index + 1].classList.remove("active");
          // },
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
          isMobileQuery() ? "-=120%" : "-=100%"
        );

        tl.to(
          media,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            // yPercent: -20,
          },
          isMobileQuery() ? "-=80%" : "-=100%"
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

  doubledesc() {
    const section = document.querySelector(".double-desc");

    if (!section) return;

    gsap.utils.toArray(".double-desc .image-wrapper").forEach((el) => {
      const img = el.querySelector("img");
      const video = el.querySelector("video");

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

      tlImage.from([img, video], {
        scale: 1.2,
      });
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
    if (isMobileQuery()) return;

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

    //slider
    new Carousel(section);
  }

  solutionstack() {
    if (!isMobileQuery()) return;

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
        end: `+=${items.length * 100}%`,
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
          start: `${(index - 1) * 100}%`,
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

  sliderfade() {
    const section = document.querySelector(".double-desc");

    if (!section) return;

    const slider = section.querySelector(".slider");
    const items = [...section.querySelectorAll(".slider .image")];

    if (items.length <= 1) return;
    const contentFirst = items[0].querySelector(".slide-content");

    contentFirst.classList.add("active");
    slider.appendChild(contentFirst);
    const progressLines = [
      ...section.querySelectorAll(".slide-content.active .line"),
    ];

    let contentText = [];

    contentText.push(contentFirst.querySelector("p").textContent);

    items.forEach((el) => {
      const slideContent = el.querySelector(".slide-content");
      if (slideContent) {
        const text = slideContent.querySelector("p").textContent;

        contentText.push(text);

        // gsap.set(slideContent, {
        //   display: "none",
        // });

        slideContent.remove();
      }
    });

    let currentIndex = 0;
    // let intervalId = null;

    let clickInteraction = false;

    const nextSlide = (index) => {
      currentIndex = index;

      const text = contentFirst.querySelector("p");

      text.textContent = contentText[index];
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power4.out",
        }
      );

      items.forEach((item, itemindex) => {
        if (progressLines[itemindex].classList.contains("active")) {
          progressLines[itemindex].classList.remove("active");

          gsap.to(progressLines[itemindex], {
            "--progress": 0,
            "--origin": "right",
            overwrite: true,
          });
        }

        if (items[itemindex].classList.contains("active")) {
          items[itemindex].classList.remove("active");
        }
      });

      items[currentIndex].classList.add("active");

      if (clickInteraction) {
        gsap.to(progressLines[currentIndex], {
          "--progress": 1,
          "--origin": "left",
        });
      }

      progressLines[currentIndex].classList.add("active");
    };

    progressLines.forEach((el, index) => {
      el.addEventListener("click", () => {
        if (!clickInteraction) {
          clickInteraction = true;

          gsap.to(progressLines, {
            "--progress": 0,
            "--origin": "right",
            overwrite: true,
          });
        }

        nextSlide(index);
      });
    });

    const autoplay = (el, index) => {
      if (clickInteraction) return;
      gsap.to(el, {
        "--progress": 1,
        "--origin": "left",
        duration: 3.5,
        ease: "none",
        onComplete: () => {
          if (clickInteraction) return;
          let nextIndex = (index + 1) % progressLines.length;
          autoplay(progressLines[nextIndex], nextIndex);
          nextSlide(nextIndex);
        },
      });
    };

    autoplay(progressLines[0], 0);
  }

  footer() {
    const section = document.querySelector(".footer");

    if (!section) return;

    if (isMobileQuery()) return;
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
