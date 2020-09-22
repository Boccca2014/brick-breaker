import Sprite from "./Sprite.js";

const gameOver = new CustomEvent("gameover");

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
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      // bounce off the left/right edges
      this.dx *= -1; // switch direction
    }

    if (this.y < 0) {
      // bounce off the top edge
      this.dy *= -1; // switch direction
    } else if (this.y + this.height > canvasHeight) {
      // dispatch Game Over signal!
      document.dispatchEvent(gameOver);
    }
  }


  colides(paddle) {
    if (this.intersects(paddle)) {
      this.dy *= -1; // switch direction
    }
  }

}

export default Ball;