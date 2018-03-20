import "./index.css";

document.getElementById("demo").innerHTML = `
<p>CSS<br /><div id="demo-7-elem-css" ></div></p>
<input id="demo-7-btn-time" type="range" min="0" max="1000"  step="10"  />`;

const getById = id => document.getElementById(id);
const anims = getById("demo-7-elem-css").getAnimations();
const anim = anims[0]; // Animation declared in css

getById("demo-7-btn-time").addEventListener("input", evt => {
  anim.pause();
  anim.currentTime = evt.target.value;
  console.log("currentTime:", evt.target.value);
});
