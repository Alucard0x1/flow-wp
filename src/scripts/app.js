import MotionInit from "./motion/init";
import LazyLoad from "vanilla-lazyload";

var aLazyLoad = new LazyLoad({
  /* options here */
});

window.addEventListener("load", () => {
  new MotionInit();
});
