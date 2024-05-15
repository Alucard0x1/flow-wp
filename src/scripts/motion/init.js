import Default from "./default";
import Smoothscroll from "./smoothscroll";
import Page from "./page";
import Resize from "./resize";
import MotionText from "./text";
import Googlemap from "./googlemap";

export const MotionPage = new Page();
export default class MotionInit {
  first() {
    Default();

    new Smoothscroll();

    new Resize();
  }

  afterPreloader() {
    MotionPage.hero();
    new MotionText();
    MotionPage.sliderscroll();
    MotionPage.footer();
  }

  enter() {
    MotionPage.heroprepare();
    MotionPage.heroscroll();
    MotionPage.map();
    MotionPage.amnities();
    MotionPage.philosophy();

    new Googlemap();
  }

  reinit() {
    this.enter();
    this.afterPreloader();
  }
}
