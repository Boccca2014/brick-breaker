import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball(canvas.width / 2, canvas.height - 30, 10, 10, "#0095DD");
ball.updateSpeed(2, -2);

const paddle = new Paddle(
  (canvas.width - 10) / 2,
  canvas.height - 10,
  75,
  10,
  "#0095DD"
);


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx);
  ball.move(canvas.width, canvas.height);
  paddle.draw(ctx);
  paddle.move(canvas.width);
  ball.colides(paddle);
}

setInterval(draw, 10);