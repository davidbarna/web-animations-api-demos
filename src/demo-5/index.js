import heart from "../icons/heart.svg";

document.getElementById("demo").innerHTML = `
<img id="demo-5-elem-js" src="${heart}" />
<input id="demo-5-btn-time" type="range" min="0" max="1000"  step="1" value="0"  />
`;

const animKeyframes = [
  { transform: "scale(1)", opacity: 1 },
  { transform: "scale(.7)" },
  { transform: "scale(.8)", opacity: 0.2 }
];

const animOptions = {
  duration: 1000, //milliseconds
  easing: "ease-in-out", // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: "alternate", // 'normal', 'reverse', etc.
  fill: "forwards" //'backwards', 'both', 'none', 'auto'
};

const getById = id => document.getElementById(id);
const anim = getById("demo-5-elem-js").animate(animKeyframes, animOptions);

getById("demo-5-btn-time").addEventListener("input", evt => {
  anim.pause();
  anim.currentTime = evt.target.value;
  console.log("currentTime:", evt.target.value);
});
