import matplotlib.pyplot as plt

from points import read_points
from visualize import plot_circles_and_points

CIRCLE = 50
POINT = 1
RADIUS_DEGREE = 3

class Circle:
	def __init__(self, x, y, r):
		self.x = x
		self.y = y
		self.r = r

	def __repr__(self):
		return f'({self.x}, {self.y}) | {self.r}'

	def __contains__(self, point):
		x, y = point
		return (x - self.x)**2 + (y - self.y)**2 <= self.r**2

	@property
	def cost(self):
		return self.r**RADIUS_DEGREE + CIRCLE

def read_circles(file: str):
	with open(file) as f:
		lines = f.readlines()
		circles = [Circle(*map(float, line.split())) for line in lines]

	return circles

def valid_point(point: tuple, circles: list) -> bool:
	for circle in circles:
		if point in circle:
			return True
	return False

def score(circles: list, points: list) -> int:
	total = 0

	for point in points:
		if valid_point(point, circles):
			total += POINT

	for circle in circles:
		total -= circle.cost

	return total

if __name__ == '__main__':
	circles = read_circles('circles.txt')
	points = read_points('points.txt')
	# print(score(circles, points))
	fig, ax = plot_circles_and_points(circles, points)
	plt.show()
