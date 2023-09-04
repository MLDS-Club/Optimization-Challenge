import matplotlib.pyplot as plt

def plot_points(points):
	x, y = zip(*points)
	fig, ax = plt.subplots()
	ax.scatter(x, y)
	return fig, ax

def plot_circles_and_points(circles, points):
	fig, ax = plt.subplots()
	for circle in circles:
		ax.add_patch(plt.Circle((circle.x, circle.y), circle.r, fill=False))
	x, y = zip(*points)
	ax.scatter(x, y)
	return fig, ax
