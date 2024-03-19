import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { preloadImages } from './utils';
import { Slide } from './slide';
import { Observer } from 'gsap/Observer.js';
gsap.registerPlugin(Observer);

// Call the splittingjs to transform the data-splitting texts to spans of chars
Splitting();

// Some DOM elements
const DOM = {
    slides: [...document.querySelectorAll('.slide')],
};

// total number of slides
const totalSlides = DOM.slides.length;

let slidesArr = [];
DOM.slides.forEach(slide => {
    slidesArr.push(new Slide(slide));
});

// current slide position
let current = -1;
// check if animation is in progress
let isAnimating = false;


const setCurrentSlide = position => {
    if (current !== -1) {
        slidesArr[current].DOM.el.classList.remove('slide--current');
    }

    current = position;
    slidesArr[current].DOM.el.classList.add('slide--current');
};

const next = () => {
    const newPosition = current < totalSlides - 1 ? current + 1 : 0;
    navigate(newPosition);
};

const prev = () => {
    const newPosition = current > 0 ? current - 1 : totalSlides - 1;
    navigate(newPosition);
};

const navigate = newPosition => {
    isAnimating = true;

    // navigation direction
    const direction = current < newPosition ? current === 0 && newPosition === totalSlides - 1 ? 'prev' : 'next' : current === totalSlides - 1 && newPosition === 0 ? 'next' : 'prev';

    const currentSlide = slidesArr[current];
    current = newPosition;
    const upcomingSlide = slidesArr[current];

    gsap.timeline({
        defaults: {
            duration: 1.6,
            ease: 'power3.inOut'
        },
        onComplete: () => {
            currentSlide.DOM.el.classList.remove('slide--current');
            isAnimating = false;
        }
    })
        .addLabel('start', 0)

        .set([currentSlide.DOM.imgInner, upcomingSlide.DOM.imgInner], {
            transformOrigin: direction === 'next' ? '50% 0%' : '50% 100%'
        }, 'start')

        // Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
        .set(upcomingSlide.DOM.el, {
            yPercent: direction === 'next' ? 100 : -100
        }, 'start')
        .set(upcomingSlide.DOM.inner, {
            yPercent: direction === 'next' ? -100 : 100
        }, 'start')

        // Add current class
        .add(() => {
            upcomingSlide.DOM.el.classList.add('slide--current');
        }, 'start')

        // Current slide moves either up or down (translate 100% or -100%)
        .to(currentSlide.DOM.el, {
            yPercent: direction === 'next' ? -100 : 100
        }, 'start')
        .to(currentSlide.DOM.imgInner, {
            scale: 1.2
        }, 'start')
        // Upcoming slide translates to 0
        .to([upcomingSlide.DOM.el, upcomingSlide.DOM.inner], {
            yPercent: 0
        }, 'start')
        .to(upcomingSlide.DOM.imgInner, {
            ease: 'power2.inOut',
            startAt: { scale: 1.2 },
            scale: 1
        }, 'start')
};

const initEvents = () => {
    setInterval(() => {
        if (document.hasFocus()) {
            next()
        }
    }, 3000)
};

// Set current slide
setCurrentSlide(0);

// Initialize the events
initEvents();

// Preload images and initialize scrolling animations
preloadImages('.slide__img-inner')
