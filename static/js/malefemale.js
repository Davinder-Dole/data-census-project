countrylist = [["Aruba", "AA"],["Antigua and Barbuda", "AC"],["United Arab Emirates", "AE"],["Afghanistan", "AF"],["Algeria", "AG"],["Azerbaijan", "AJ"],["Albania", "AL"],["Armenia", "AM"],["Andorra", "AN"],["Angola", "AO"],["American Samoa", "AQ"],["Argentina", "AR"],["Australia", "AS"],["Austria", "AU"],["Anguilla", "AV"],["Bahrain", "BA"],["Barbados", "BB"],["Botswana", "BC"],["Bermuda", "BD"],["Belgium", "BE"],["Bahamas, The", "BF"],["Bangladesh", "BG"],["Belize", "BH"],["Bosnia and Herzegovina", "BK"],["Bolivia", "BL"],["Burma", "BM"],["Benin", "BN"],["Belarus", "BO"],["Solomon Islands", "BP"],["Brazil", "BR"],["Bhutan", "BT"],["Bulgaria", "BU"],["Brunei", "BX"],["Burundi", "BY"],["Canada", "CA"],["Cambodia", "CB"],["Chad", "CD"],["Sri Lanka", "CE"],["Congo (Brazzaville)", "CF"],["Congo (Kinshasa)", "CG"],["China", "CH"],["Chile", "CI"],["Cayman Islands", "CJ"],["Cameroon", "CM"],["Comoros", "CN"],["Colombia", "CO"],["Northern Mariana Islands", "CQ"],["Costa Rica", "CS"],["Central African Republic", "CT"],["Cuba", "CU"],["Cabo Verde", "CV"],["Cook Islands", "CW"],["Cyprus", "CY"],["Denmark", "DA"],["Djibouti", "DJ"],["Dominica", "DO"],["Dominican Republic", "DR"],["Ecuador", "EC"],["Egypt", "EG"],["Ireland", "EI"],["Equatorial Guinea", "EK"],["Estonia", "EN"],["Eritrea", "ER"],["El Salvador", "ES"],["Ethiopia", "ET"],["Czechia", "EZ"],["Finland", "FI"],["Fiji", "FJ"],["Micronesia, Federated States of", "FM"],["Faroe Islands", "FO"],["French Polynesia", "FP"],["France", "FR"],["Gambia, The", "GA"],["Gabon", "GB"],["Georgia", "GG"],["Ghana", "GH"],["Gibraltar", "GI"],["Grenada", "GJ"],["Guernsey", "GK"],["Greenland", "GL"],["Germany", "GM"],["Guam", "GQ"],["Greece", "GR"],["Guatemala", "GT"],["Guinea", "GV"],["Guyana", "GY"],["Gaza Strip", "GZ"],["Haiti", "HA"],["Hong Kong", "HK"],["Honduras", "HO"],["Croatia", "HR"],["Hungary", "HU"],["Iceland", "IC"],["Indonesia", "ID"],["Isle of Man", "IM"],["India", "IN"],["Iran", "IR"],["Israel", "IS"],["Italy", "IT"],["Cote d'Ivoire", "IV"],["Iraq", "IZ"],["Japan", "JA"],["Jersey", "JE"],["Jamaica", "JM"],["Jordan", "JO"],["Kenya", "KE"],["Kyrgyzstan", "KG"],["Korea, North", "KN"],["Kiribati", "KR"],["Korea, South", "KS"],["Kuwait", "KU"],["Kosovo", "KV"],["Kazakhstan", "KZ"],["Laos", "LA"],["Lebanon", "LE"],["Latvia", "LG"],["Lithuania", "LH"],["Liberia", "LI"],["Slovakia", "LO"],["Liechtenstein", "LS"],["Lesotho", "LT"],["Luxembourg", "LU"],["Libya", "LY"],["Madagascar", "MA"],["Macau", "MC"],["Moldova", "MD"],["Mongolia", "MG"],["Montserrat", "MH"],["Malawi", "MI"],["Montenegro", "MJ"],["Macedonia", "MK"],["Mali", "ML"],["Monaco", "MN"],["Morocco", "MO"],["Mauritius", "MP"],["Mauritania", "MR"],["Malta", "MT"],["Oman", "MU"],["Maldives", "MV"],["Mexico", "MX"],["Malaysia", "MY"],["Mozambique", "MZ"],["New Caledonia", "NC"],["Niger", "NG"],["Vanuatu", "NH"],["Nigeria", "NI"],["Netherlands", "NL"],["Sint Maarten", "NN"],["Norway", "NO"],["Nepal", "NP"],["Nauru", "NR"],["Suriname", "NS"],["Nicaragua", "NU"],["New Zealand", "NZ"],["South Sudan", "OD"],["Paraguay", "PA"],["Peru", "PE"],["Pakistan", "PK"],["Poland", "PL"],["Panama", "PM"],["Portugal", "PO"],["Papua New Guinea", "PP"],["Palau", "PS"],["Guinea-Bissau", "PU"],["Qatar", "QA"],["Serbia", "RI"],["Marshall Islands", "RM"],["Saint Martin", "RN"],["Romania", "RO"],["Philippines", "RP"],["Puerto Rico", "RQ"],["Russia", "RS"],["Rwanda", "RW"],["Saudi Arabia", "SA"],["Saint Pierre and Miquelon", "SB"],["Saint Kitts and Nevis", "SC"],["Seychelles", "SE"],["South Africa", "SF"],["Senegal", "SG"],["Saint Helena, Ascension, and Tristan da Cunha", "SH"],["Slovenia", "SI"],["Sierra Leone", "SL"],["San Marino", "SM"],["Singapore", "SN"],["Somalia", "SO"],["Spain", "SP"],["Saint Lucia", "ST"],["Sudan", "SU"],["Sweden", "SW"],["Syria", "SY"],["Switzerland", "SZ"],["Saint Barthelemy", "TB"],["Trinidad and Tobago", "TD"],["Thailand", "TH"],["Tajikistan", "TI"],["Turks and Caicos Islands", "TK"],["Tonga", "TN"],["Togo", "TO"],["Sao Tome and Principe", "TP"],["Tunisia", "TS"],["Timor-Leste", "TT"],["Turkey", "TU"],["Tuvalu", "TV"],["Taiwan", "TW"],["Turkmenistan", "TX"],["Tanzania", "TZ"],["Curacao", "UC"],["Uganda", "UG"],["United Kingdom", "UK"],["Ukraine", "UP"],["United States", "US"],["Burkina Faso", "UV"],["Uruguay", "UY"],["Uzbekistan", "UZ"],["Saint Vincent and the Grenadines", "VC"],["Venezuela", "VE"],["Virgin Islands, British", "VI"],["Vietnam", "VM"],["Virgin Islands, U.S.", "VQ"],["Namibia", "WA"],["West Bank", "WE"],["Wallis and Futuna", "WF"],["Western Sahara", "WI"],["Samoa", "WS"],["Eswatini", "WZ"],["Yemen", "YM"],["Zambia", "ZA"],["Zimbabwe", "ZI"]]
groupinglist = [1, 2, 4, 5, 10, 20, 25, 50]
yearlist = ["2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"]

// var margin = {top: 70, right: 50, bottom: 40, left: 500};
var margin = {top: 0, right: 20, bottom: 50, left: 20};
clientheight = document.documentElement.clientHeight;
clientwidth = document.documentElement.clientWidth;
console.log(`${clientheight} ${clientwidth}`);
// 1920, 1000
width = clientwidth/1.5 - margin.left - margin.right;
height = clientheight/1.25 - margin.top - margin.bottom;
bargap = height/1000;

var x = d3.scaleLinear()
    .range([0, width]);

var x2 = d3.scaleLinear()
    .range([0, width]);    

var y = d3.scaleBand()
    .range([0, height])
    .round(0.1);

var xAxis = d3.axisBottom(x).tickFormat(function (d) { 
  if (d < 0){
    d = -d;
  }
  return d;
}).tickFormat(d3.format(".0s"));

var xAxis2 = d3.axisTop(x2);

var yAxis = d3.axisLeft(y);

var svg = d3.select("#graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=US&time=2019&SEX=1&key=322c07fb07c31c5ff4f064a0fb839f4fc7bf8de5").then(function(data){
  d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=US&time=2019&SEX=2&key=322c07fb07c31c5ff4f064a0fb839f4fc7bf8de5").then(function(data2){



    data = groupyears(data, 2);
    data2 = groupyears(data2, 2);

    data2.forEach(function(x) {
      x[1] = -x[1];
    });

    max = d3.max(data, function(d) { return +d[1]; });
    min = d3.min(data2, function(d) { return +d[1]; });

    var percentData = data.map((x, i) => [data[i][0], (+data[i][1] + data2[i][1])/(Math.abs(+data[i][1]) + Math.abs(data2[i][1]))]);

    percentmax = d3.max(percentData, function(d) { return Math.abs(d[1]); });

    resizefactor = (max - min)/(percentmax * 5);
    console.log(resizefactor);

    shift = 0;
    data = data.concat(data2);

    

    x.domain(d3.extent(data, function(d) { return +d[1]; })).nice();
    y.domain(data.map(function(d) { return d[0]; }));
    x2.domain(d3.extent(percentData, function(d) { return +d[1]; })).nice();
    
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([0, 0])
    .html(function(d) {
      if (d[1] > 0){
        return (`<div class = "male">${Math.abs(d[1]).toLocaleString()} males aged ${d[0]}</div>`);
      } else {
        return (`<div class = "female">${Math.abs(d[1]).toLocaleString()} females aged ${d[0]}</div>`);
      };
    });


  

    svg.call(toolTip);

    barGroup = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", function(d) { return "bar bar--" + (+d[1] < 0 ? "negative" : "positive"); })
      .attr("x", function(d) { return x(Math.min(0, +d[1])); })
      .attr("y", function(d) { return y(d[0]); })
      .attr("width", function(d) { return Math.abs(x(+d[1]) - x(0)); })
      .attr("height", y.bandwidth() - bargap)
      .on("mouseover", function(d) {
        toolTip.show(d, this);
      })
      .on("mouseout", function(d) {
        toolTip.hide(d);
        });

    percentGroup = svg.selectAll(".bar .layer2")
      .data(percentData)
      .enter()
      .append("rect")
      .attr("class", "bar--percent")
      .attr("x", function(d) { return x(Math.min(0, +d[1] * resizefactor)); })
      .attr("y", function(d) { return y(d[0]); })
      .attr("width", function(d) { return ((Math.abs(x(+d[1]) - x(0))) * resizefactor); })
      .attr("height", y.bandwidth() - bargap);


    svg.append("g")
        .attr("class", "xaxis")
        .style("font-size", '14px')
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);


    svg.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(" + x(0) + ",0)")
        .call(yAxis.ticks(10));





  })});

function changePlot(country, years, year){

  d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=" + country + "&time=" + year + "&SEX=1&key=322c07fb07c31c5ff4f064a0fb839f4fc7bf8de5").then(function(data){
    d3.json("https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=" + country + "&time=" + year + "&SEX=2&key=322c07fb07c31c5ff4f064a0fb839f4fc7bf8de5").then(function(data2){
      
      
      d3.selectAll(".xaxis").remove()
      d3.selectAll("tooltip").remove()
      d3.select(".yaxis").remove()

      data = groupyears(data, years);
      data2 = groupyears(data2, years);


      data2.forEach(function(x) {
        x[1] = -x[1];
      });

      max = d3.max(data, function(d) { return +d[1]; });
      min = d3.min(data2, function(d) { return +d[1]; });

      var percentData = data.map((x, i) => [data[i][0], (+data[i][1] + data2[i][1])/(Math.abs(+data[i][1]) + Math.abs(data2[i][1]))]);

      percentmax = d3.max(percentData, function(d) { return Math.abs(d[1]); });

      resizefactor = (max - min)/(percentmax * 5);

      data = data.concat(data2);

      x.domain(d3.extent(data, function(d) { return + d[1]; })).nice();
      y.domain(data.map(function(d) { return d[0]; }));



      if (years == 1){
        var toolTip = d3.tip()
          .attr("class", "tooltip")
          .html(function(d) {
            if (d[1] > 0){
              return (`<div class = "male">${Math.abs(d[1]).toLocaleString()} males age ${d[0]}</div>`);
            } else {
              return (`<div class = "female">${Math.abs(d[1]).toLocaleString()} females age ${d[0]}</div>`);
            };
      })} else {
        var toolTip = d3.tip()
        .attr("class", "tooltip")
        .html(function(d) {
          if (d[1] > 0){
            return (`<div class = "male">${Math.abs(d[1]).toLocaleString()} males aged ${d[0]}</div>`);
          } else {
            return (`<div class = "female">${Math.abs(d[1]).toLocaleString()} females aged ${d[0]}</div>`);
          };
      })};

      svg.call(toolTip);
      
      



      if ((d3.selectAll(".bar")._groups[0].length) == data.length){
        barGroup = svg.selectAll(".bar")
          .data(data)
          .transition()
          .duration(1000)
          .attr("class", function(d) { return "bar bar--" + (+d[1] < 0 ? "negative" : "positive"); })
          .attr("x", function(d) { return x(Math.min(0, +d[1])); })
          .attr("y", function(d) { return y(d[0]); })
          .attr("width", function(d) { return Math.abs(x(+d[1]) - x(0)); })
          .attr("height", y.bandwidth() - bargap);

        percentGroup = svg.selectAll(".bar--percent")
          .data(percentData)
          .transition()
          .duration(1000)
          .attr("class", "bar--percent")
          .attr("x", function(d) { return x(Math.min(0, +d[1] * resizefactor)); })
          .attr("y", function(d) { return y(d[0]); })
          .attr("width", function(d) { return ((Math.abs(x(+d[1]) - x(0))) * resizefactor); })
          .attr("height", y.bandwidth() - bargap);

      } else {
        d3.selectAll(".bar").remove();
        d3.selectAll(".bar--percent").remove();

        barGroup = svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", function(d) { return "bar bar--" + (+d[1] < 0 ? "negative" : "positive"); })
        .attr("x", function(d) { return x(Math.min(0, +d[1])); })
        .attr("y", function(d) { return y(d[0]); })
        .attr("width", function(d) { return Math.abs(x(+d[1]) - x(0)); })
        .attr("height", y.bandwidth() - bargap)
        .on("mouseover", function(d) {
          toolTip.show(d, this);
        })
        .on("mouseout", function(d) {
          toolTip.hide(d);
          });

        percentGroup = svg.selectAll(".bar--percent")
          .data(percentData)
          .enter()
          .append("rect")
          .attr("class", "bar--percent")
          .attr("x", function(d) { return x(Math.min(0, +d[1] * resizefactor)); })
          .attr("y", function(d) { return y(d[0]); })
          .attr("width", function(d) { return ((Math.abs(x(+d[1]) - x(0))) * resizefactor); })
          .attr("height", y.bandwidth() - bargap);

      };

      svg.append("g")
          .attr("class", "xaxis")
          .style("font-size", 20)
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "yaxis")
          .attr("transform", "translate(" + x(0) + ",0)")
          .call(yAxis);
      
      if (years == 1){
        d3.selectAll('.yaxis').style("font-size", "10px");
        d3.selectAll('.yaxis').style("font-weight", "normal");
      } else if (years == 2){
        d3.selectAll('.yaxis').style("font-size", "14px");
      } else if (years == 4){
        d3.selectAll('.yaxis').style("font-size", "20px");
      } else if (years == 5){
        d3.selectAll('.yaxis').style("font-size", "25px");
      } else if (years == 10){
        d3.selectAll('.yaxis').style("font-size", "30px");
      } else if (years == 20){
        d3.selectAll('.yaxis').style("font-size", "35px");
      } else if (years == 25){
        d3.selectAll('.yaxis').style("font-size", "40px");
      } else if (years == 50){
        d3.selectAll('.yaxis').style("font-size", "45px");
      }
      


})})};

function type(d) {
  d.value = +d.value;
  return d;
};

function groupyears(data2, years){


  data2.shift();
  data2.forEach(function(x) {
    x[3] = +x[3];
  });

  yeargroupings = [];
  data2.forEach(function(data, index) {
    if (years > 1){
      if (index * years < data2.length - 1){
        yeargroupings.push([`${index * years} - ${(index * years) + (years - 1)}`]);
      }
    } else {
      if (index * years < data2.length - 1){
        yeargroupings.push([`${index * years}`]);
      }
    }

  
  });


  yearsums = [];
  yeargroupings.forEach(function(data, index){
    sum = 0;
    for(var i=0; i<years; i++){
      sum += data2[index * years + 1][3];
    }
    yeargroupings[index].push(sum);
    
  });

  return yeargroupings;
    
};

function buttonClick() {
  d3.event.preventDefault();
  var country = d3.select('#countryselect').property('value');
  var groupings = d3.select('#groupingselect').property('value');
  var year = d3.select('#yearselect').property('value');
  changePlot(country, groupings, year);
}



countrylist.forEach(function(data){
  d3.select('#countryselect')
    .append('option')
    .attr("value", data[1])
    .text(data[0])
})

groupinglist.forEach(function(data){
  d3.select('#groupingselect')
    .append('option')
    .attr("value", data)
    .text(data)
})

yearlist.forEach(function(data){
  d3.select('#yearselect')
    .append('option')
    .attr("value", data)
    .text(data)
})

d3.select('#countryselect').property('value', 'US');
d3.select('#groupingselect').property('value', 2);
d3.select('#yearselect').property('value', '2019');

d3.select('#countryselect').on('change', buttonClick);
d3.select('#groupingselect').on('change', buttonClick);
d3.select('#yearselect').on('change', buttonClick);