//////////////////////////////////////////////////
//                                              //
//  Histogram based on user selected attribute  //
//                                              //
//////////////////////////////////////////////////

//constants that determine what information will be looked at
var actual_dataset = both;
var selected_attr = "Fixed Acidity";

//holds values of specific attribute
var hist_dataset = [];

//minimum and maximum value of the specific dataset, so doing domain is easier
var min_type = "both" + "_min";
var max_type = "both" + "_max";

//actual minimum and maximum values for given attribute and wine subset
var min_val = attr_dict[min_type];
var max_val = attr_dict[max_type];

//dictionary for setting new datasets
var actualVal = {"both": both, "red": red, "white": white};

//dimensions of histogram
var w = 960,
	h = 500;

// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 30},
    width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom;

//puts values into hist_dataset
for(var i = 0; i < actual_dataset.length; i++){
	var newVal = actual_dataset[i][selected_attr];
	hist_dataset.push(newVal);
}

//set x scale since don't need formatting from histogram
var xScale = d3.scale.linear()
      .domain([min_val, max_val])
      .range([0, width]);

console.log(hist_dataset);
// Generate a histogram using twenty uniformly-spaced bins.
var data = d3.layout.histogram() //<-- takes data converts into histogram format
    //.domain(xScale.domain())
    .bins(xScale.ticks(20));
    (hist_dataset); //<-- which dataset I'm using

console.log(data);
var yMax = d3.max(data, function(d){return d.y});
console.log("hi");
var yMin = d3.min(data, function(d){return d.length});



//set y scale
var yScale = d3.scale.linear()
    .domain([0, yMax])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");


// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   	.append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


















