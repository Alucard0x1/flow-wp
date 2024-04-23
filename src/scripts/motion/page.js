import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Page {
  hero() {
    gsap.set(".hero-content h1", {
      opacity: 1,
    });

    gsap.from(".hero-content h1 .char", {
      opacity: 0,
      duration: 1,
      ease: "sine.inOut",
      stagger: {
        each: 0.015,
      },
    });
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
        end: "+=120%",
        scrub: true,
        // pin: true,
        // invalidateOnRefresh: true,
      },
    });

    tl.from(".text-image .image-wrapper", {
      scale: 0.845,
    });

    tl.to(".text-image .image-wrapper video", {
      borderRadius: "0",
    }, 0);

    gsap.to(".text-image", {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".text-image .image-wrapper",
        start: "center center",
        end: "+=50%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    })

    const tlDescriptionAnim = gsap.timeline({
      paused: true,
    });

    tlDescriptionAnim.to(".text-image .description-inner", {
      y: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

    tlDescriptionAnim.from(
      ".text-image .description-inner p",
      {
        opacity: 0,
        ease: "power2.out",
      },
      0.5
    );

    tl.call(() => tlDescriptionAnim.reverse(), null, "+=5%");
    tl.call(() => tlDescriptionAnim.play(), null, "+=10%");

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

    tl.to(".list-image .list-wrapper-content", {
      y: () => -document.querySelector(".list-image .list-wrapper-content").offsetHeight / 1.8,
    }, 0);
  }

  sliderscroll() {
    const section = document.querySelector(".scroll-slider");
    const slides = section.querySelectorAll(".slide-wrapper .media-item-wrapper");
    const slidesText = section.querySelectorAll(".slide-wrapper .text-content");
    const buttons = section.querySelectorAll(".slide-wrapper .slider-action .btn");
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

    gsap.utils.toArray(".slide-wrapper .media-item-wrapper").forEach((slide, index) => {
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

        tl.to(charNext, {
          opacity: 1,
          duration: 0.3,
          delay: 0.5,
          stagger: {
            each: 0.001,
            from: "end",
          },
        }, "-=100%");

        tl.to(media, {
          clipPath: "inset(0% 0% 100% 0%)",
          yPercent: -20,
        }, "-=100%");

        tl.fromTo(
          mediaNext,
          {
            yPercent: 15,
          },
          {
            yPercent: 0,
          },
          "-=100%"
        );
      });

    tl.to(section, {
      opacity: 1,
      duration: 0.2,
    });
  }
}
