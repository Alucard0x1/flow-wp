import Smoothscroll from "./smoothscroll";
import MotionText from "./text";
import Page from "./page";
import Loading from "./preloader";

export const Preloader = new Loading();
export const MotionPage = new Page();
export default class MotionInit {
  constructor() {
    this.init();
  }

  init() {
    new Smoothscroll();

    Preloader.First(() => {
      MotionPage.hero();
      new MotionText();
      MotionPage.sliderscroll();
    });

    MotionPage.heroprepare();
    MotionPage.heroscroll();
    MotionPage.map();
    MotionPage.amnities();
    MotionPage.philosophy();
  }
}
