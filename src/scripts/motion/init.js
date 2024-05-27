import Default from "./default";
import Smoothscroll from "./smoothscroll";
import Page from "./page";
import Resize from "./resize";
import MotionText from "./text";
import Googlemap from "./googlemap";
import Nav from "./nav";

export const MotionPage = new Page();
export default class MotionInit {
  // TODO: temp solution for afterPreloader2 footer

  first() {
    Default();

    new Smoothscroll();

    new Resize();
  }

  afterPreloader() {
    MotionPage.hero();
    new MotionText();
    MotionPage.sliderscroll();
  }

  afterPreloader2() {
    MotionPage.footer();
  }

  enter() {
    MotionPage.heroprepare();
    MotionPage.heroscroll();
    MotionPage.map();
    MotionPage.amnities();
    MotionPage.philosophy();
    MotionPage.sideimage();
    MotionPage.highlight();
    MotionPage.solutionrelated();

    new Googlemap();
    new Nav();
  }

  reinit() {
    this.enter();
    this.afterPreloader();
  }
}
