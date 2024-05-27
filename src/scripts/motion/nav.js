import gsap from "gsap";
class Nav {
  constructor() {
    this.toggle = document.querySelector(".nav-toggle a");
    this.popup = document.querySelector(".nav-popup");
    this.popupBg = this.popup.querySelector(".container-bg");
    this.popupContent = [
      this.popup.querySelector(".image-wrapper"),
      this.popup.querySelector(".content-wrapper"),
    ];
    this.popupContentImage = this.popup.querySelector(".image-wrapper");

    this.init();
  }

  init() {
    this.event();
  }

  event() {
    this.toggle.addEventListener("click", (e) => {
      e.preventDefault();

      this.popup.classList.toggle("active");

      if (this.popup.classList.contains("active")) {
        gsap.to(this.popupBg, {
          scale: 1,
          ease: "expo.out",
          duration: 0.8,
          overwrite: true,
        });

        this.content(true, 0.4);
      } else {
        gsap.to(this.popupBg, {
          scale: 0,
          duration: 0.4,
          overwrite: true,
        });

        this.content(false);
      }
    });
  }

  content(show = false, delay = 0) {
    if (show) {
      gsap.to(this.popupContent, {
        opacity: 1,
        delay: delay,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    } else {
      gsap.to(this.popupContent, {
        opacity: 0,
        delay: delay,
        duration: 0.2,
        ease: "power2.out",
        overwrite: true,
      });
    }
  }
}

export default Nav;
