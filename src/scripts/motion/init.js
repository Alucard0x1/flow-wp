import Smoothscroll from "./smoothscroll";
import Splittext from "./splittext";
import MotionText from "./text";

export default class MotionInit {
  constructor() {
    this.init();
  }

  init() {
    new Smoothscroll();
    new Splittext();
    new MotionText();
  }
}
