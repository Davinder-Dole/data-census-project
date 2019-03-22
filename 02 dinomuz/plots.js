
function buildPlot(census) {
  
  console.log(census);
  var url = "https://api.census.gov/data/timeseries/idb/5year?get=NAME,POP,CBR,CDR,E0,AREA_KM2&FIPS&time=2012";

  d3.json(url).then(function(data) {
       
    // Grab values from the response json object to build the plots


    var name = data.slice(1,data.length).map(row =>row[0]);
    var pop = data.slice(1,data.length).map(row => +row[1]);
    var birthRate = data.slice(1,data.length).map(row => row[2]);
    var deathRate = data.slice(1,data.length).map(row => +row[3]);
    var lifeExpectancy = data.slice(1,data.length).map(row => +row[4]);
    var countryCode = data.slice(1,data.length).map(row => row[6]);
    console.log(census);

    var y;
    if (census =="Population"){
      y = pop;
    } else if (census == "Birth Rate"){
      y = birthRate;
    } else if (census == "Death Rate"){
      y = deathRate;
    } else if (census == "Life Expentancy"){
      y = lifeExpectancy;
    }
    console.log('Plotting', y);

   // var dates = unpack(data.dataset.data, 0);
    //var closingPrices = unpack(data.dataset.data, 1);
    // console.log(name, pop, birthRate, deathRate,lifeExpectancy,countryCode);
    var trace1 = {
      type: "bar",
      x: name,
      y: y,
      bar: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${census}`,
      xaxis: {
        autorange: true
        
      },
      yaxis: {
        autorange: true
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}


buildPlot("Population");

