import Default from "./default";
import Smoothscroll from "./smoothscroll";
import Page from "./page";
import Resize from "./resize";
import MotionText from "./text";
import Googlemap from "./googlemap";
import Nav from "./nav";
import Video from "./video";

export const MotionPage = new Page();
export const Navbar = new Nav();

export default class MotionInit {
  // TODO: temp solution for afterPreloader2 footer

  first() {
    Default();

    Navbar.init();
    
    new Smoothscroll();

    new Resize();
  }

  afterPreloader() {
    MotionPage.hero();
    MotionPage.heroflip();
    new MotionText();
    MotionPage.sliderscroll();
  }

  afterPreloader2() {
    MotionPage.footer();
  }

  enter() {
    Navbar.bullet();
    MotionPage.heroprepare();
    MotionPage.heroscroll();
    MotionPage.map();
    // MotionPage.amnities();
    MotionPage.amnities2();
    MotionPage.philosophy();
    MotionPage.sideimage();
    MotionPage.highlight();
    MotionPage.solutionrelated();
    MotionPage.solutionlist();
    MotionPage.solutionstack();
    MotionPage.sliderfade();

    new Googlemap();
    new Video();
  }

  reinit() {
    this.enter();
    this.afterPreloader();
  }
}
