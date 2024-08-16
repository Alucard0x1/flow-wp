import gsap from "gsap";
import { getMousePos } from "../utils/index";

export default class Carousel {
  constructor(el) {
    this.el = el;
    this.scroller =
      el.children?.[0] || this.el.querySelector("[data-carousel-scroller]");
    console.log(this.scroller);
    this.progress = 0;
    this.disableCarousel = false;
    this.mousePosition = [];
    this.startPos = 0;
    this.endPos = 0;
    this.bound = {
      start: 0,
      end: 0,
    };
    this.isMouseDown = false;

    this.setupOffset();
    this.addEventListeners();
  }

  getCurrentProgress(mousePos) {
    const movingValue = mousePos.x - this.startPos;
    const translationMultiplier = 1.2;
    const translationValue =
      translationMultiplier * movingValue + this.progress * this.bound.end;
    const normalizedTranslation = translationValue / this.bound.end;
    return gsap.utils.clamp(0, 1, normalizedTranslation);
  }

  onMouseUp(e) {
    this.isMouseDown = false;
    const mousePos = getMousePos(e);
    const currentProgess = this.getCurrentProgress(mousePos);
    this.progress = currentProgess;
  }

  onMouseDown(e) {
    e.preventDefault();
    this.isMouseDown = true;
    const mousePos = getMousePos(e);

    this.startPos = mousePos.x;
  }

  onMouseMove(e) {
    if (!this.isMouseDown) return;

    const mousePos = getMousePos(e);
    const currentProgess = this.getCurrentProgress(mousePos);
    console.log("move", mousePos, currentProgess);
    if (this.instance) this.instance.kill();

    this.instance = gsap.to(this.el, {
      "--progress": currentProgess,
      ease: "ease-2",
      duration: 1.2,
    });
  }

  setupOffset() {
    const offset = (this.bound.end =
      -1 * this.scroller.clientWidth + window.innerWidth);
    gsap.set(this.el, {
      "--offset": offset,
    });
  }

  removeEventListeners() {
    this.scroller.removeEventListener("mousemove", this.onMouseMove.bind(this));
    this.scroller.removeEventListener("mousedown", this.onMouseDown.bind(this));
    this.scroller.removeEventListener("mouseup", this.onMouseUp.bind(this));

    window.addEventListener("resize", this.onResize.bind(this));
  }

  addEventListeners() {
    this.scroller.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.scroller.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.scroller.addEventListener("mouseup", this.onMouseUp.bind(this));

    window.removeEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.setupOffset();
  }
}
