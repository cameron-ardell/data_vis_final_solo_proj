//////////////////////////////////////////////////
//                                              //
//  Histogram based on user selected attribute  //
//                                              //
//////////////////////////////////////////////////

//constants that determine what information will be looked at
var actual_dataset = both;
var selected_attr = "Fixed Acidity";


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
var w = 915,
	h = 500;

console.log("hi");

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 40},
//     width = w - margin.left - margin.right,
//     height = h - margin.top - margin.bottom;


// //puts values into hist_dataset
// for(var i = 0; i < actual_dataset.length; i++){
// 	var newVal = actual_dataset[i][selected_attr];
// 	hist_dataset.push(newVal);
// }

// console.log("Dataset:" + hist_dataset);


// //svg element
// var hist_svg = d3.select("body")
// 				//.append("svg")
// 				.attr("class", ".display")
// 				// .attr("width", w)
// 				// .attr("height", h)
// 				.attr("width", width + margin.left + margin.right)
//     			.attr("height", height + margin.top + margin.bottom)
//   				.append("g")
//     			.attr("transform", 
//           			"translate(" + margin.left + "," + margin.top + ")");

// //setting scales
// var xScale = d3.scale.linear()
// 			.domain([min_val, max_val])
//     		.range([0, w]);

// // var bins = d3.histogram()
// // 		    .domain(xScale.domain())
// // 		    .thresholds(x.ticks(20))
// // 		    (hist_dataset);

// var yScale = d3.scale.linear()
//     		.range([h, 0]);

// // set the parameters for the histogram
// var histogram = d3.histogram()
//     .value(function(d) { return d.date; })
//     .domain(xScale.domain())
//     .thresholds(xScale.ticks(20));


//  // append the svg object to the body of the page
//  // append a 'group' element to 'svg'
//  // moves the 'group' element to the top left margin
//  var svg = d3.select("body").append("svg")
//      .attr("width", width + margin.left + margin.right)
//      .attr("height", height + margin.top + margin.bottom)
//    	 .append("g")
//      .attr("transform", 
//            "translate(" + margin.left + "," + margin.top + ")");






//============================



// chart(hist_dataset);

// function chart(hist_dataset) {
// 	hist_dataset.each(function (data)) {
// 		var bins  = histogram(data[selected_attr]);
// 	}

// 	yScale.domain([min_val, d3.max(bins, function(d) {return d.length})]);

// 	// append the bar rectangles to the svg element
// 	svg.selectAll("rect")
//       	.data(bins)
//     	.enter().append("rect")
// 	      .attr("class", "bar")
// 	      .attr("x", 1)
// 	      .attr("transform", function(d) {
// 			  return "translate(" + xScale(d.x0) + "," + yScale(d.length) + ")"; })
// 	      .attr("width", function(d) { return xScale(d.x1) - xScale(d.x0) -1 ; })
// 	      .attr("height", function(d) { return height - yScale(d.length); });
// }







// var bar = g.selectAll(".bar")
// 	 .data(bins)
// 	 .enter().append("g")
//     .attr("class", "bar")
//     .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

// bar.append("rect")
//     .attr("x", 1)
//     .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
//     .attr("height", function(d) { return height - y(d.length); });

// bar.append("text")
//     .attr("dy", ".75em")
//     .attr("y", 6)
//     .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
//     .attr("text-anchor", "middle")
//     .text(function(d) { return formatCount(d.length); });

// g.append("g")
//     .attr("class", "axis axis--x")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));

// var y = d3.scaleLinear()
//     .domain([0, d3.max(bins, function(d) { return d.length; })])
//     .range([height, 0]);