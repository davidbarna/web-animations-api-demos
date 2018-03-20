import heart from "../icons/heart.svg";

document.getElementById("demo").innerHTML = `
<img id="demo-4-elem-js" src="${heart}" />
<input id="demo-4-btn-playback" type="range" min="0.5" max="10"  step="0.5" value="1"  />
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
const anim = getById("demo-4-elem-js").animate(animKeyframes, animOptions);

getById("demo-4-btn-playback").addEventListener("change", evt => {
  anim.updatePlaybackRate(evt.target.value);
  console.log("playbackRate:", evt.target.value);
});
