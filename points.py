import numpy as np

from visualize import plot_points

def shape(x, y) -> bool:
	return all([
		y < x**2,
		y > 0,
	])

def read_points(file: str):
	with open(file) as f:
		lines = f.readlines()
		points = [tuple(map(float, line.split())) for line in lines]

	return points

def generate_points(xmin, xmax, ymin, ymax, spacing):
	points = []
	for x in np.arange(xmin, xmax, spacing):
		for y in np.arange(ymin, ymax, spacing):
			# round based on spacing
			digits = int(-np.log10(spacing) + 1)
			x, y = map(lambda x: round(x, digits), (x, y))

			if shape(x, y):
				points.append((x, y))
	return points

def generate_files(points):
	with open('points.txt', 'w') as f:
		for x, y in points:
			f.write(f'{x} {y}\n')

	fig, ax = plot_points(points)
	fig.savefig('points.png')

if __name__ == '__main__':
	points = generate_points(-1, 1, -1, 1, 0.01)
	generate_files(points)
