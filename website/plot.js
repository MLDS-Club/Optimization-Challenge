const getPoints = () => {
	return document
	.getElementById('points-text-area')
	.value.split('\n')
	.map((point) => {
		return point.split(' ').map((coordinate) => {
			return parseFloat(coordinate);
		});
	});
};

const getCircles = () => {
	return document
	.getElementById('circles-text-area')
	.value.split('\n')
	.map((circle) => {
		return circle.split(' ').map((coordinate) => {
			return parseFloat(coordinate);
		});
	});
}

const getPointsTrace = (points) => {
	const x = [];
	const y = [];

	points.forEach((point) => {
		x.push(point[0]);
		y.push(point[1]);
	});

	const trace = {
		x: x,
		y: y,
		mode: 'markers',
		type: 'scatter',
		hoverinfo: 'skip',
	};

	return trace;
};

const getCirclesLayout = (circles) => {
	const x = [];
	const y = [];
	const r = [];

	circles.forEach((circle) => {
		x.push(circle[0]);
		y.push(circle[1]);
		r.push(circle[2]);
	});

	const blueFill = 'rgba(91, 138, 253, 0.4)';
  const blueLine = 'rgba(25, 97, 251, 0.6)';

	const layout = {
    // 1:1 aspect ratio
    // autosize: false,
    // width: 500,
    // height: 500,

		shapes: [
			{
				type: 'circle',
				xref: 'x',
				yref: 'y',
				x0: x[0] - r[0],
				y0: y[0] - r[0],
				x1: x[0] + r[0],
				y1: y[0] + r[0],
				line: {
					color: blueLine,
					width: 1,
				},
				fillcolor: blueFill,
			},
			{
				type: 'circle',
				xref: 'x',
				yref: 'y',
				x0: x[1] - r[1],
				y0: y[1] - r[1],
				x1: x[1] + r[1],
				y1: y[1] + r[1],
				line: {
					color: blueLine,
					width: 1,
				},
				fillcolor: blueFill,
			},
		],
	};

	return layout;
};

