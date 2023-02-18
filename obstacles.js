const obstaclesArray = [];
class Obstacles {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsla(" + hue + ",100%,50%,1)";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }
  update() {
    this.x -= gameSpeed;
    this.draw();
  }
}

function handleObstacles() {
  if (frame % 100 === 0) {
    obstaclesArray.unshift(new Obstacles());
  }
  for (let index = 0; index < obstaclesArray.length; index++) {
    obstaclesArray[index].update();
  }
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}
