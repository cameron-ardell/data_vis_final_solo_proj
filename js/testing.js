//////////////////////////////////////////////////
//                                              //
//   Scatter plot based on user selected axes   //
//                                              //
//////////////////////////////////////////////////



//
// * Setting constants
//
//Width and height of SVG drawing area
var w = 800;
var h = 500;
var padding = 60;

//which attributes user has selected
var x_attr = "alcohol";
var y_attr = "quality";

//which samples is the user evaluating
var dataset = both;

var std_rad = 5;

// **
//  NOTE -
//    Datasets already read in from js files: js/whites.js and js/red.js
//    simply called white and red, respectively
//  **
//



var scatter_svg = d3.select("body")
    .append("svg")
    .attr("class", "display")
    .attr("width", w)
    .attr("height", h)
    .attr("background-color", "green");

//Create scale functions (modeled on example by Claire)
var xScale = d3.scale.linear()
    .domain([d3.min(dataset, function(d) { return d[x_attr]; })*.98,
        d3.max(dataset, function(d) { return d[x_attr]; })*1.02])
    .range([padding, w - padding ]);

var yScale = d3.scale.linear()
    .domain([d3.min(dataset, function(d) { return d[y_attr]; })*.98,
        d3.max(dataset, function(d) { return d[y_attr]; })*1.02])
    .range([h - padding, padding]);


makeDots();
makeAxes();

function makeDots() {
	scatter_svg.selectAll("circle")   
    .data(dataset)                 
    .enter()                       
    .append("circle")
    .attr("fill", function(d) { 
        return d["color"]; 
    })
    .attr("cx", function(d,i) {
        return xScale(d[x_attr]);
    })
    .attr("cy", function(d) {
        return yScale(d[y_attr]);
    })
    .attr("r", std_rad)
    .on("mouseout", function(d) {
    	d3.select(this).attr("fill", function(d) { return d["color"]; })
    	d3.select(this).attr("r", std_rad);
    })
    .on("mouseover", function(d) {
    	d3.select(this).attr("fill", "orange");
    	d3.select(this).attr("r", std_rad*2);
    })
    .on("click", function(d,i) {
    	console.log("index: " + i);
    	console.log("why");
    })
    .append("title")
    .text(function(d) {
        return "Alcohol: " + d[x_attr] + "\n" + "Quality: " + d[y_attr];
    });
}


function makeAxes() {
	//
	// * Defining axis
	//
	//Define X axis
	var xAxis = d3.svg.axis()
	    .scale(xScale)
	    .orient("bottom")
	    .ticks(10);

	//Define Y axis
	var yAxis = d3.svg.axis()
	    .scale(yScale)
	    .orient("left")
	    .ticks(10);

    //
    // * Actually draw axes, label them, and add title
    //
    //Create X axis
    scatter_svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    //Create Y axis
    scatter_svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    //x-axis label
    scatter_svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (h-20) + ")")
        .text(x_attr);

    //y-axis label
    scatter_svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate(" + (padding / 4) + "," + (h + padding) / 2 + ") rotate(270)")
            .text(y_attr);

    //title
    scatter_svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (padding/2) + ")")
        .text(x_attr +" vs. "+ y_attr);


}