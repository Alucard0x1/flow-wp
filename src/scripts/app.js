import MotionInit from "./motion/init";
import LazyLoad from "vanilla-lazyload";

var aLazyLoad = new LazyLoad({});

window.addEventListener('load', function () {
  new MotionInit();
});
