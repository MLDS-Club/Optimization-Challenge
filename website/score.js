const CIRCLE = 50;
const POINT = 1;
const RADIUS_DEGREE = 3;

class Circle {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}

	toString() {
		return `(${this.x}, ${this.y}) | ${this.r}`;
	}

	contains(point) {
		const x = point[0];
		const y = point[1];

		return (x - this.x) ** 2 + (y - this.y) ** 2 <= this.r ** 2;
	}

	cost() {
		return this.r ** RADIUS_DEGREE + CIRCLE;
	}
}

const valid_point = (point, circles) => {
	for (const circle of circles) {
		if (circle.contains(point)) {
			return true;
		}
	}

	return false;
}

const computeScore = (circles, points) => {
	circles = circles.map((circle) => {
		return new Circle(circle[0], circle[1], circle[2]);
	});

	let total = 0;
	for (const point of points) {
		if (valid_point(point, circles)) {
			total += POINT;
		}
	}
	for (const circle of circles) {
		total -= circle.cost();
	}

	return total;
}
