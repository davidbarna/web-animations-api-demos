import heart from "../icons/heart.svg";

const heartsNumber = 20;
const hearts = new Array(heartsNumber);
hearts.fill(`<p><img class="demo-8-elem" src="${heart}" width="25"/></p>`);

document.getElementById(
  "demo"
).innerHTML = `<input id="demo-8-btn-time" type="range" min="0" max="5000"  step="10"  />
  <button id="demo-3-btn-play">anim.play()</button>
  ${hearts.join("")}`;

const animKeyframes = [
  { transform: "translateX(25px)", opacity: 1 },
  { transform: "translateX(-25px)", opacity: 0.3 }
];

const animOptions = {
  duration: 500, //milliseconds
  easing: "ease-in-out", // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  direction: "alternate", // 'normal', 'reverse', etc.
  fill: "both", //'backwards', 'both', 'none', 'auto'
  iterations: 10
};

const elems = document.getElementsByClassName("demo-8-elem");
const anims = Array.from(elems).map((elem, i) => {
  const options = Object.assign({}, animOptions, { delay: 150 * i });
  return elem.animate(animKeyframes, options);
});

document.getElementById("demo-3-btn-play").addEventListener("click", () => {
  anims.forEach(anim => {
    anim.play();
  });
});
document.getElementById("demo-8-btn-time").addEventListener("input", evt => {
  const time = evt.target.value;
  anims.forEach(anim => {
    anim.pause();
    anim.currentTime = time;
  });
});
