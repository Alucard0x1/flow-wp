import Smoothscroll from "./smoothscroll";
import MotionText from "./text";
import Page from "./page";
import Loading from "./preloader";

export const Preloader = new Loading();
export default class MotionInit {
  constructor() {
    this.init();
  }

  init() {
    new Smoothscroll();
    new Page();

    Preloader.First(() => {
      new MotionText();
    });
  }
}
