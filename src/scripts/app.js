import { Core as Taxi, Renderer } from "@unseenco/taxi";
import { TransitionDefault } from "./motion/transition";
import Loading from './motion/preloader';

import LazyLoad from "vanilla-lazyload";

import MotionInit from "./motion/init";

import Smoothscroll, { smoothScroll } from './motion/smoothscroll';

var aLazyLoad = new LazyLoad({});

export let taxi = null;

export const Preloader = new Loading();

const motion = new MotionInit();

class RendererDefault extends Renderer {
  initialLoad() {
    if (process.env.NODE_ENV === "development") {
      console.log("initialLoad");
    }

    const targetMap = document.querySelector('.map-intro .image-wrapper #map')

    if (targetMap != null) {
      const mmp = new Map(targetMap, {
        mapId: 'f621342c3a910fdc',
        mapTypeId: 'roadmap',
        streetViewControl: false,
        tiltInteractionEnabled: false,
        mapTypeControl: false,
        headingInteractionEnabled: false,
        isFractionalZoomEnabled: false,
        center: { lat: -6.2092653, lng: 106.8211186 },
        zoom: 17,
        styles
      });

      var styledMap = new google.maps.StyledMapType(
        styles, {});

      mmp.mapTypes.set('flow', styledMap);
      mmp.setMapTypeId('flow')

      const iconImage = document.createElement("img");
      iconImage.src = '/wp-content/themes/flow-wp/assets/images/marker.svg';

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: mmp,
        position: new google.maps.LatLng(-6.2092653, 106.8211186),
        content: iconImage,
      });

      google.maps.event.addListener(marker, 'click', function () {
        window.open('https://maps.app.goo.gl/eW524AugLRnepRt87', true);
      });
    }
    motion.first();
    motion.enter();

    Preloader.First(() => {
      motion.afterPreloader();
    });
  }

  onEnter() {
    if (process.env.NODE_ENV === "development") {
      console.log("onEnter");
    }
  }

  onEnterCompleted() {
    if (process.env.NODE_ENV === "development") {
      console.log("onEnterCompleted");
    }

    new Smoothscroll();

    document.documentElement.classList.add("active");
    smoothScroll.start();

    Preloader.Enter(() => {
      motion.reinit();
    });
  }

  onLeave() {
    if (process.env.NODE_ENV === "development") {
      console.log("onLeave");
    }

    smoothScroll.stop();
    smoothScroll.destroy();
  }

  onLeaveCompleted() {
    if (process.env.NODE_ENV === "development") {
      console.log("onLeaveCompleted");
    }

    CleanScrolltrigger(true);

    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    smoothScroll.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }
}

export default class App {
  constructor() {
    taxi = new Taxi({
      renderers: {
        default: RendererDefault,
      },
      transitions: {
        default: TransitionDefault,
      },
      links:
        "a:not([target]):not([href^=\\#]):not([data-taxi-ignore]), a.ab-item",
      reloadJsFilter: (element) =>
        !(element.id === "assetjs-js") ||
        element.dataset.taxiReload !== undefined,
    });
  }
}

new App();
