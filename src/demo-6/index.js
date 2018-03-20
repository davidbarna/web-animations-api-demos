import heart from "../icons/heart.svg";

document.getElementById("demo").innerHTML = `
<img id="demo-3-elem-js" src="${heart}" />
<button id="demo-3-btn-play">anim.play()</button>
<button id="demo-3-btn-pause">anim.pause()</button>
<button id="demo-3-btn-cancel">anim.cancel()</button>
<button id="demo-3-btn-finish">anim.finish()</button>
`;

const animKeyframes = [
  { transform: "scale(1)", opacity: 1 },
  { transform: "scale(.7)" },
  { transform: "scale(.8)", opacity: 0.2 }
];

const animOptions = {
  duration: 1000, //milliseconds
  easing: "ease-in-out", // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: 3, // or a number
  direction: "alternate", // 'normal', 'reverse', etc.
  fill: "forwards" //'backwards', 'both', 'none', 'auto'
};

const getById = id => document.getElementById(id);
const anim = getById("demo-3-elem-js").animate(animKeyframes, animOptions);

anim.onfinish = event => console.log("Animation finished", event);
anim.oncancel = event => console.log("Animation cancel", event);

getById("demo-3-btn-play").addEventListener("click", () => anim.play());
getById("demo-3-btn-pause").addEventListener("click", () => anim.pause());
getById("demo-3-btn-cancel").addEventListener("click", () => anim.cancel());
getById("demo-3-btn-finish").addEventListener("click", () => anim.finish());
