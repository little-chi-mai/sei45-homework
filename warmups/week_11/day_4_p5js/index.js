let blob,
	mouseHasMoved = false;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(60);
	blob = Blob();
}

function mouseMoved() {
	mouseHasMoved = true;
}

function draw() {
	background(0);
  blob.update();
  blob.render();
}

const Blob = () => {
	// default properties//
	let radius = 20,
		position = createVector(width / 2, height / 2),
		velocity = createVector(7, 7);
	return {
		// function will bouce the object from the edges
		bounceInwards(positionLinear, velocityLinear, min, max) {
			if (positionLinear < min + radius || positionLinear > max - radius) {
				velocityLinear = abs(velocityLinear);
			}
			if (positionLinear > max - radius) {
				velocityLinear *= -1;
			}
			return velocityLinear;
		},
		// this is setting the object velocity
		setVelocity(_velocity) {
			velocity.x = _velocity.x;
			velocity.y = _velocity.y;
		},
		update() {
			// Move the object
			position.add(velocity);

			// the mouse will be influencing the move of the object
			if (mouseHasMoved) {
				this.setVelocity({
					x: (mouseX / width) * 10 - 5,
					y: (mouseY / height) * 10 - 5,
				});
				mouseHasMoved = false;
			}
			// if hitting the wall, reverse
			velocity.x = this.bounceInwards(position.x, velocity.x, 0, width);
			velocity.y = this.bounceInwards(position.y, velocity.y, 0, height);
		},

		// this will setup the colour of the object and draw a circle
		render() {
			fill(300, 150, 0);
			ellipse(position.x, position.y, radius * 2, radius * 2);
			noStroke();
		},
	};
};
