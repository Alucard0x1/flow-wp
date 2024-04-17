import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export default class Splittext {
  constructor() {
    this.el = [...document.querySelectorAll("[data-split-text]")];

    this.init();
  }

  init() {
    gsap.utils.toArray(this.el).forEach((el, i) => {
      new SplitText(el, {
        type: "lines, words, chars",
        linesClass: "line",
        wordsClass: "word",
        charsClass: "char",
      });
    });
  }
}
