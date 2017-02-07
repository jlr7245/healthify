function proteinAndFiber(attr) {
  if (attr >= 80) {
    return 'rgba(50,182,122,0.5)';
  } else if (30 <= attr < 80 ) {
    return 'rgba(240,207,97,0.5)';
  } else return 'rgba(240,63,53,0.5)';
}

function carbsAndSodium(attr) {
  if (attr <= 50) {
    return 'rgba(50,182,122,0.5)';
  } else if (50 <= attr < 90 ) {
    return 'rgba(240,207,97,0.5)';
  } else return 'rgba(240,63,53,0.5)';
}

var myData = [
  {'key': 'Sodium', 'value': nutriData.sodium, 'color': carbsAndSodium(nutriData.sodium)}, 
  {'key': 'Protein', 'value': nutriData.protein, 'color': proteinAndFiber(nutriData.protein)},
  {'key': 'Carbs', 'value': nutriData.carbs, 'color': carbsAndSodium(nutriData.carbs)}, 
  {'key': 'Fiber', 'value': nutriData.fiber, 'color': proteinAndFiber(nutriData.fiber)}
  ];

var width = document.getElementById('data-bar').clientWidth;
var height = document.getElementById('data-bar').clientHeight;

var colorScale = d3.scaleOrdinal().domain(myData.map(function(d) { return d.key})).range(['pink','lightblue','lightgreen','yellow']);

//var xScale = d3.scaleLinear().domain([0,100]).range([0,width]);
//var yScale = d3.scaleOrdinal().range([0, height], 0.2, 0).domain(myData.map(function(d) { return d.key; }));


var svg = d3.select('#data-bar').append('svg').attr("width",width).attr('height',height);
var chart = svg.selectAll('rect').data(myData).enter();
chart.append('rect')
  .attr("width",(d) => { return d.value * 2.25 })
  .attr("height", (d) => {return 50 } )
  .attr('x',0)
  .attr('y', (d,i) => { return i * 60} )
  .attr("fill", (d) => { return d.color })
chart.append('text')
  .style("fill", "black")
  .attr('x', 50)
  .attr('y', (d,i) => { return i * 60 + 30})
  //.attr("text-anchor", "middle")
  .text((d) => {return `${d.key}: ${d.value}%`});