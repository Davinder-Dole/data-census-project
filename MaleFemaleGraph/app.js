// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("./hours-of-tv-watched.csv", function(error, tvData) {
  if (error) return console.warn(error);
  console.log(tvData);
  tvData.forEach(function(data) {
    data.hours = +data.hours;
  });

  var names = tvData.map(data => data.name);
  var hours = tvData.map(data => data.hours);

  var yScale = d3.scaleBand()
  .domain(names)
  .range([0, svgHeight])
  .padding(0.1);

  var xScale = d3.scaleLinear()
  .domain([0, d3.max(hours)])
  .range([0, svgWidth]);

  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

  chartGroup.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(xAxis);

  chartGroup.append("g")
  .call(yAxis);

  chartGroup.selectAll(".bar")
    .data(hours)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", (d, i) => xScale(names[i]))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => chartHeight - yScale(d));

});
