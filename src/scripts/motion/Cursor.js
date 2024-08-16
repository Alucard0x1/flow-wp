import { lerp } from "../utils/index";
export default class Cursor {
	constructor() {
		this.el = document.querySelector("[data-cursor]");
		this.hovers = document.querySelectorAll("[data-hover]");
		this.drags = document.querySelectorAll("[data-drag]");

		this.data = {
			mouse: {
				x: -200,
				y: -200,
			},
			current: {
				x: -200,
				y: -200,
			},
			last: {
				x: -200,
				y: -200,
			},
			ease: 0.1,
			dist: 50,
			fx: {
				diff: 0,
				acc: 0,
				velo: 0,
				scale: 0,
			},
		};

		this.rAF = null;
		this.targets = null;

		this.run = this.run.bind(this);
		this.mousePos = this.mousePos.bind(this);
		if (this.el) this.init();
	}

	mousePos(e) {
		this.data.mouse.x = e.clientX;
		this.data.mouse.y = e.clientY;

		this.data.current.x = e.clientX;
		this.data.current.y = e.clientY;
	}

	run() {
		this.data.last.x = lerp(
			this.data.last.x,
			this.data.current.x,
			this.data.ease,
		);
		this.data.last.y = lerp(
			this.data.last.y,
			this.data.current.y,
			this.data.ease,
		);

		this.data.fx.diff = this.data.current.x - this.data.last.x;
		this.data.fx.acc = this.data.fx.diff / window.innerWidth;
		this.data.fx.velo = +this.data.fx.acc;
		let scaleNum = 1 - Math.abs(this.data.fx.velo * 3);
		this.data.fx.scale = 0.7 < scaleNum ? scaleNum : 0.7;

		this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fx.scale})`;

		this.raf();
	}

	raf() {
		this.rAF = requestAnimationFrame(this.run);
	}

	addListeners() {
		const element = this;
		const el = document.querySelector("[data-cursor]");

		this.hovers.forEach(function (target) {
			target.addEventListener("mousemove", element.mousePos, {
				passive: true,
			});
			target.addEventListener("mouseover", element.mousePos, {
				passive: true,
			});

			target.addEventListener("mouseover", function (e) {
				e.stopPropagation();

				const textContent = target.getAttribute("data-hover");
				const cursorStyle = target.getAttribute("data-style");
				const color = target.getAttribute("data-col");

				if (textContent == "none") {
					el.querySelector(".cursor_text").innerHTML = " ";
					el.classList.remove("is-active");
				} else {
					el.querySelector(".cursor_text").innerHTML = textContent;
					el.classList.add("is-active");
				}

				if (cursorStyle == "fill") {
					el.classList.add("fill");
				} else {
					el.classList.remove("fill");
				}

				if (color) {
					el.querySelector(".circle").style.backgroundColor = color;
				} else {
					if (el.querySelector(".circle").style.removeProperty) {
						el.querySelector(".circle").style.removeProperty(
							"background-color",
						);
					} else {
						el.querySelector(".circle").style.removeAttribute(
							"background-color",
						);
					}
				}
			});

			target.addEventListener("mouseout", function () {
				el.classList.remove("is-active");
				el.classList.remove("fill");
			});
		});

		this.drags.forEach(function (target) {
			target.addEventListener("mouseover", function () {
				el.classList.add("is-drag");
			});
			target.addEventListener("mouseout", function () {
				el.classList.remove("is-drag");
			});
		});
	}

	init() {
		this.addListeners();
		this.raf();
	}

	cancel() {
		window.cancelAnimationFrame(this.rAF);
	}
}
