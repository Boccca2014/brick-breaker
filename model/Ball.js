import Sprite from "./Sprite.js";

class Ball extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.dx = 0;
    this.dy = 0;
  }

  updateSpeed(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }

  move(canvasWidth, canvasHeight) { /* overriding the move method */
    super.move(this.dx, this.dy);
    this.bounce(canvasWidth, canvasHeight);
  }

  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0) {
      // bounce off the left edge
      this.dx *= -1; // switch direction
    } else if (this.x > canvasWidth) {
      // bounce off the right edge
      this.dx *= -1;
    }

    if (this.y < 0) {
      // bounce off the top edge
      this.dy *= -1; // switch direction
    } else if (this.y > canvasHeight) {
      // bounce off the bottom edge
      this.dy *= -1;
    }
  }
}

export default Ball;