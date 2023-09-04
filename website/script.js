document.getElementById('submit-button').addEventListener('click', () => {
	const points = getPoints();
	const circles = getCircles();

	const pointsTrace = getPointsTrace(points);
	const circlesLayout = getCirclesLayout(circles);

	Plotly.newPlot('chart', [pointsTrace], circlesLayout);

	const score = computeScore(circles, points);

	document.getElementById('score-heading').innerText = `Score: ${score}`;
});

Plotly.newPlot('chart', []);
