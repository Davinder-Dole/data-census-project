console.log('loading js file');
var myMap;
var dataList;
var popLayer;
var Population=[];
var markers = [];
var  rangeList=[];
var legendDiv;
function yeardata(year){
d3.json(`/geodata?year=${year}`).then(data=>
    {
        dataList = data;
        //console.log(dataList);
        if(myMap != undefined || myMap != null){
         myMap.remove();
        }
      plotMap();
   }); 
  }
for(var i=1950;i<2050;i++){
  d3.select("#mySelect").append("option").attr("value",i).text(i);
}
function plotMap() {
  
  
   function pickColor(circle_radius){
     if(circle_radius<=5) return 'green';
    else if(circle_radius<=6) return 'red';
    else if(circle_radius<=10) return 'yellow';
    else if(circle_radius<=20) return 'blue';
    else if(circle_radius<=25) return 'pink';
    else if(circle_radius<=30) return 'orange';
    }
   dataList.forEach(x=>{
    Population.push(x.POP)  
    });
   var min_pop=d3.min(Population);
   var max_pop=d3.max(Population);

   //console.log(Population,min_pop,max_pop);
   var a =1; //max (rescaled) number
   var b = 6; //min rescaled number
   var base_radius=5;
    
      for (var i = 0; i < dataList.length; i++) {
         var circle_radius = (a + ((dataList[i].POP - min_pop)*(b -a))/(max_pop - min_pop))*base_radius
         var color=pickColor(circle_radius)
        markers.push(
          L.circleMarker([dataList[i].latitude,dataList[i].longitude],{radius:circle_radius, fillColor: color,opacity:0,fillOpacity:0.75}).bindPopup("<h1>" + dataList[i].name + "</h1>"+dataList[i].POP)
        );
       
        //console.log(circle_radius, dataList[i].POP, dataList[i].name)
    }

      popLayer = L.layerGroup(markers);

      var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: "pk.eyJ1IjoiZGF2aW5kZXJrZG9sZSIsImEiOiJjanN3bGN1cHMwNTZyNDNvMG14ZGdoeXJlIn0.1ymojpj0CfFz-0zxGlpGOg"
      });
      var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: "pk.eyJ1IjoiZGF2aW5kZXJrZG9sZSIsImEiOiJjanN3bGN1cHMwNTZyNDNvMG14ZGdoeXJlIn0.1ymojpj0CfFz-0zxGlpGOg"
      });

      var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.dark",
        accessToken: "pk.eyJ1IjoiZGF2aW5kZXJrZG9sZSIsImEiOiJjanN3bGN1cHMwNTZyNDNvMG14ZGdoeXJlIn0.1ymojpj0CfFz-0zxGlpGOg"
      });

      // Only one base layer can be shown at a time
      var baseMaps = {
        Light: light,
        Dark: dark,
        Street: street
      };

      // Overlays that may be toggled on or off
      var overlayMaps = {
        Population: popLayer
      };

      // Create map object and set default layers
       myMap = L.map("map", {
        center: [40, -30],
        zoom: 2,
        layers: [street, popLayer]
      });
    
      L.control.layers(baseMaps, overlayMaps).addTo(myMap);
      range(Population);

var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (map) {

         legendDiv = L.DomUtil.create('div', 'info legend');
          legendDiv.innerHTML = `<p><i style="background: green"></i>0-${rangeList[0]}</p>
          <p><i style="background:  red"></i>${rangeList[0]}-${rangeList[1]}</p>
          <p><i style="background:  yellow"></i>${rangeList[1]}-${rangeList[2]} </p>
          <p><i style="background:  blue"></i>${rangeList[2]}-${rangeList[3]}</p>
          <p><i style="background:  pink"></i>${rangeList[3]}-${rangeList[4]}</p>
          <p><i style="background:  orange"></i>${rangeList[4]}-${rangeList[5]}</p>`
        
      return legendDiv;
    };
    legend.addTo(myMap);
    var dropDown = L.control({position: 'bottomright'});  
    dropDown.onAdd = function (map) {  
      var div = L.DomUtil.create('div', 'info legend');  
      var dropDownContent =`<select class="form-control form-control-lg is-valid" id="mySelect" onchange="onChange(this.value)">`;  
      for (var i = 1950; i < 2050; i++ ){  
          dropDownContent += `<option value="${i}">${i} </option>`;  
          }  
          dropDownContent += '</select>';  
          div.innerHTML = dropDownContent;  
          div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;  
          return div;  
          
    };


      dropDown.addTo(myMap);
      legend.addTo(myMap);



  }

function onChange(year){

  myMap.removeLayer(popLayer)
  d3.json(`/geodata?year=${year}`).then(data=>
    {
        dataList = data;
        var markers = [];
        Population=[];
        dataList.forEach(x=>{
          Population.push(x.POP)  
          });
         var min_pop=d3.min(Population);
         var max_pop=d3.max(Population);
        console.log(Population,min_pop,max_pop);
        var a =1; //max (rescaled) number
        var b = 6; //min rescaled number
        var base_radius=5;
        
          for (var i = 0; i < dataList.length; i++) {
              var circle_radius = (a + ((dataList[i].POP - min_pop)*(b -a))/(max_pop - min_pop))*base_radius
              var color=pickColor(circle_radius)
            markers.push(
              L.circleMarker([dataList[i].latitude,dataList[i].longitude],{radius:circle_radius, fillColor: color,opacity:0,fillOpacity:0.75}).bindPopup("<h1>" + dataList[i].name + "</h1>"+dataList[i].POP)
            );
            //console.log(dataList[i].POP, circle_radius, dataList[i].name)
          }
          
    
          popLayer = L.layerGroup(markers);


          myMap.addLayer(popLayer);
     range(Population);
      console.log(legendDiv);
      legendDiv.innerHTML = 
      `<p><i style="background: green"></i>0-${rangeList[0]}</p>
      <p><i style="background:  red"></i>${rangeList[0]}-${rangeList[1]}</p>
      <p><i style="background:  yellow"></i>${rangeList[1]}-${rangeList[2]} </p>
      <p><i style="background:  blue"></i>${rangeList[2]}-${rangeList[3]}</p>
      <p><i style="background:  pink"></i>${rangeList[3]}-${rangeList[4]}</p>
      <p><i style="background:  orange"></i>${rangeList[4]}-${rangeList[5]}</p>`
                  
                
   }); 

};

function pickColor(circle_radius){
  if(circle_radius<=5) return 'green';
  else if(circle_radius<=6) return 'red';
  else if(circle_radius<=10) return 'yellow';
  else if(circle_radius<=20) return 'blue';
  else if(circle_radius<=25) return 'pink';
  else if(circle_radius<=30) return 'orange';
  };

  function range(Population){
    rangeList=[];
    list=[5,6,10,20,25,30]
   var min_pop=d3.min(Population);
   var max_pop=d3.max(Population);
    maxMin=max_pop-min_pop;     
    for (i=0;i<list.length;i++){
      var range=Math.trunc(((maxMin*list[i]-5*maxMin)/25)+min_pop);
      range=Humanize.compactInteger(range, 1)
      rangeList.push(range);
    }
    console.log('computed range', rangeList);
}
  yeardata(1950);
