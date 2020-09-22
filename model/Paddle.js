import Sprite from "./Sprite.js";

class Paddle extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.dx = 0;
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
  }

  keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.dx = 7;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.dx = -7;
    }
  }

  keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.dx = 0;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.dx = 0;
    }
  }

  move() { /* overriding the move method */
    super.move(this.dx, 0);
  }
}

export default Paddle;
