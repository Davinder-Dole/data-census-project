var margin = {top: 20, right: 30, bottom: 40, left: 30},
    width = 1920 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], 0.1);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(0)
    .tickPadding(6);

var svg = d3.select("#graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=US&time=2012&SEX=1", function(data) {
  d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=US&time=2012&SEX=2", function(data2) {

    data2.shift();
    data2.forEach(function(x) {
      x[3] = -x[3];
    });

    data.shift();
    data = data.concat(data2);

    x.domain(d3.extent(data, function(d) { return +d[3]; })).nice();
    y.domain(data.map(function(d) { return d[2]; }));
    

    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", function(d) { return "bar bar--" + (+d[3] < 0 ? "negative" : "positive"); })
      .attr("x", function(d) { return x(Math.min(0, +d[3])); })
      .attr("y", function(d) { return y(d[2]); })
      .attr("width", function(d) { return Math.abs(x(+d[3]) - x(0)); })
      .attr("height", y.rangeBand());

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + x(0) + ",0)")
        .call(yAxis);
})});

function changePlot(country){
  
  d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=" + country + "&time=2012&SEX=1", function(data) {
    d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=" + country + "&time=2012&SEX=2", function(data2) {
      
      d3.select(".x.axis").remove()
      d3.select(".y.axis").remove()

      data2.shift();
      data2.forEach(function(x) {
        x[3] = -x[3];
      });

      data.shift();
      data = data.concat(data2);

      x.domain(d3.extent(data, function(d) { return + d[3]; })).nice();
      y.domain(data.map(function(d) { return d[2]; }));

      svg.selectAll(".bar")
        .data(data)
        .transition()
        .duration(1000)
        .attr("class", function(d) { return "bar bar--" + (+d[3] < 0 ? "negative" : "positive"); })
        .attr("x", function(d) { return x(Math.min(0, +d[3])); })
        .attr("y", function(d) { return y(d[2]); })
        .attr("width", function(d) { return Math.abs(x(+d[3]) - x(0)); })
        .attr("height", y.rangeBand());

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + x(0) + ",0)")
          .call(yAxis);
})})};



function type(d) {
  d.value = +d.value;
  return d;
};