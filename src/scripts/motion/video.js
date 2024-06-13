export default class Video {
  constructor() {
    this.DOM = {
      videos: [...document.querySelectorAll('main video')],
    };

    this.init();
  }

  init() {
    if (!this.DOM.videos.length) return;
    this.DOM.videos.forEach((el) => {
      if (!el.hasAttribute('autoplay')) return;
      el.play();
    });
  }
}
