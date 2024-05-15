import Mouse from './Mouse';

const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

const mapRange = (inMin, inMax, input, outMin, outMax) => {
  return ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + window.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + window.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posx, y: posy };
};

const wrap = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

const unwrap = (content) => {
  for (let i = 0; i < content.length; i++) {
    const el = content[i];
    const parent = el.parentNode;

    if (parent.parentNode) parent.outerHTML = el.innerHTML;
  }
};

/* eslint-disable */

const ev = (eventName, data, once = false) => {
  const e = new CustomEvent(eventName, { detail: data }, { once });
  document.dispatchEvent(e);
};

export { map, clamp, mapRange, lerp, getMousePos, Mouse, wrap, unwrap, ev };
