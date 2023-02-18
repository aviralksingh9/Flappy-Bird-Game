const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.9", "#fff");

let temp = canvas.height - 90;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleObstacles();
  bird.update();
  bird.draw();
  ctx.fillStyle = gradient;
  ctx.font = "90px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  if (handleCollisons()) return;
  handleParticles();
  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  frame++;
}

animate();

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "Space") {
    console.log("sssssssss");
    spacePressed = true;
  }
});
window.addEventListener("keyup", (e) => {
  console.log(e.code);
  if (e.code === "Space") spacePressed = false;
  //   temp--;
});

const bang = new Image();
bang.src = "bang.png";

function handleCollisons() {
  for (let index = 0; index < obstaclesArray.length; index++) {
    if (
      bird.x < obstaclesArray[index].x + obstaclesArray[index].width &&
      bird.x + bird.width > obstaclesArray[index].x &&
      ((bird.y < 0 + obstaclesArray[index].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstaclesArray[index].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      //collison detected
      ctx.drawImage(bang, bird.x, bird.y, 50, 50);
      ctx.font = "25px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        "Game Over, your score is " + score,
        160,
        canvas.height / 2 - 10
      );

      return true;
    }
  }
}
