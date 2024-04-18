import gsap from "gsap";

export default class Page {
  hero() {
    gsap.set('.hero-content h1', {
      opacity: 1,
    });

    gsap.from('.hero-content h1 .char', {
      opacity: 0,
      duration: 1,
      ease: "sine.inOut",
      stagger: {
        each: 0.015,
        from: "center"
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
        start: "center center",
        end: "+=120%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    tl.from(".text-image .image-wrapper", {
      scale: 0.845,
    });

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
}
