// **
//  NOTE -
//    Dataset already read in from js file: js/parsedFurbishData.js
//    simply called dataset
//  **
//

//Width and height of SVG drawing area
var w = 400;
var h = 400;

var svg = d3.select("body")
    .append("svg")
    .attr("class", "display")
    // .attr("width", w)
    // .attr("height", h)
    .attr("fill", "orange");


function printSomeStuff() {
	console.log("hey");
}