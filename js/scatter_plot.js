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
var x_attr = "Free Sulfur Dioxide";
var y_attr = "Quality";

//which samples is the user evaluating
var dataset = both;
var min_type = "both" + "_min";
var max_type = "both" + "_max";

var std_rad = 5;

//dictionary for setting new datasets
var actualVal = {"both": both, "red": red, "white": white};


var sampleArray = {};

var newArray = []
// **
//  NOTE -
//    Datasets already read in from js files: js/whites.js and js/red.js
//    simply called white and red, respectively
//  **
//


for(var i = 0; i < dataset.length; i++){
    var newVal = dataset[i][selected_attr];
    console.log(newVal);
    newArray.push(newVal);
}

console.log(newArray);


var scatter_svg = d3.select("body")
    .append("svg")
    .attr("class", "display")
    .attr("width", w)
    .attr("height", h)
    .attr("background-Color", "green");

//Create scale functions (modeled on example by Claire)
    //update scale domains



var xScale = d3.scale.linear()
   .domain([attr_dict[x_attr][min_type]*.98,
                    attr_dict[x_attr][max_type]*1.02])
    .range([padding, w - padding ]);

var yScale = d3.scale.linear()
    .domain([attr_dict[y_attr][min_type]*.98,
                    attr_dict[y_attr][max_type]*1.02])
    .range([h - padding, padding]);


// makeDots();
// makeAxes();

//function makeDots() {
	scatter_svg.selectAll("circle")   
    .data(dataset)                 
    .enter()                       
    .append("circle")
    .attr("fill", function(d) { 
        return d["Color"]; 
    })
    .attr("cx", function(d,i) {
        return xScale(d[x_attr]);
    })
    .attr("cy", function(d) {
        return yScale(d[y_attr]);
    })
    .attr("r", std_rad)
    .on("mouseout", function(d) {
    	d3.select(this).attr("fill", function(d) { return d["Color"]; })
    	d3.select(this).attr("r", std_rad);
    })
    .on("mouseover", function(d) {
    	d3.select(this).attr("fill", "orange");
    	d3.select(this).attr("r", std_rad*2);
    })
    .on("click", function(d,i) {
    	console.log("index: " + i);
    })
    .append("title")
    .text(function(d) {
        return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
    });
//}


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


//function makeAxes() {
    //console.log(dataset);

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
        .attr("id", "axis_label")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (h-20) + ")")
        .text(x_attr);

    //y-axis label
    scatter_svg.append("text")
            .attr("id", "axis_label")
            .attr("text-anchor", "middle")
            .attr("transform", "translate(" + (padding / 4) + "," + (h + padding) / 2 + ") rotate(270)")
            .text(y_attr);

    //title
    scatter_svg.append("text")
        .attr("id", "axis_label")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (padding/2) + ")")
        .text(x_attr +" vs. "+ y_attr);
//}



function updateScatter(newDatasetName, newXAttr, newYAttr){

    dataset = actualVal[newDatasetName];
    min_type = newDatasetName + "_min";
    max_type = newDatasetName + "_max";
    x_attr = newXAttr;
    y_attr = newYAttr;

    //update scale domains
    xScale.domain([attr_dict[x_attr][min_type]*.98,
                    attr_dict[x_attr][max_type]*1.02]);

    yScale.domain([attr_dict[y_attr][min_type]*.98,
                    attr_dict[y_attr][max_type]*1.02]);


    scatter_svg.selectAll("circle").remove();
    scatter_svg.selectAll("#axis_label").remove();

    //rebind data sets
    var dots = scatter_svg.selectAll("circle")   
                          .data(dataset);

    //set times
    var transitionTime = 900;


    //add any new dots
    dots.enter()
        .append("circle")
        .attr("fill", function(d) { 
            return d["Color"]; 
        })
        .attr("cx", function(d,i) {
            return xScale(d[x_attr]);
        })
        .attr("cy", function(d) {
            return yScale(d[y_attr]);
        })
        .attr("r", std_rad)
        .on("mouseout", function(d) {
            d3.select(this).attr("fill", function(d) { return d["Color"]; })
            d3.select(this).attr("r", std_rad);
        })
        .on("mouseover", function(d) {
            d3.select(this).attr("fill", "orange");
            d3.select(this).attr("r", std_rad*2);
        })
        .on("click", function(d,i) {
            console.log("index: " + i);
        })
        .append("title")
        .text(function(d) {
            return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
        });



        //exit of old dots
    dots.exit()
        // .transition()
        // .duration(transitionTime)
        // .attr("x", w)
        .remove();

   
    //makeAxes();

    //x-axis label
    scatter_svg.append("text")
        .attr("id", "axis_label")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (h-20) + ")")
        .text(x_attr);


    //y-axis label
    scatter_svg.append("text")
            .attr("id", "axis_label")
            .attr("text-anchor", "middle")
            .attr("transform", "translate(" + (padding / 4) + "," + (h + padding) / 2 + ") rotate(270)")
            .text(y_attr);

    //title
    scatter_svg.append("text")
        .attr("id", "axis_label")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (padding/2) + ")")
        .text(x_attr +" vs. "+ y_attr);


    //need to update the axis
    //Update x-axis
    scatter_svg.select(".x.axis")
        .transition()
        //.duration(actual_duration)
        .call(xAxis);

    //Update y-axis
    scatter_svg.select(".y.axis")
        .transition()
        //.duration(actual_duration)
        .call(yAxis);
}



//
//
// * NOTE - mouseover isn't showing correct values once things are altered
//          
//
//
function dataChanged(newDataset, color) {

    dataset = newDataset;
    min_type = color + "_min";
    max_type = color + "_max";



    //update scale domains
    xScale.domain([attr_dict[x_attr][min_type]*.98,
                    attr_dict[x_attr][max_type]*1.02]);

    yScale.domain([attr_dict[y_attr][min_type]*.98,
                    attr_dict[y_attr][max_type]*1.02]);


    d3.selectAll("circle").remove();

    //rebind data sets
    var dots = scatter_svg.selectAll("circle")   
                          .data(dataset);

    //set times
    var transitionTime = 900;

    //add any new dots
    dots.enter()
        .append("circle")
        .attr("fill", function(d) { 
            return d["Color"]; 
        })
        .attr("cx", function(d,i) {
            return xScale(d[x_attr]);
        })
        .attr("cy", function(d) {
            return yScale(d[y_attr]);
        })
        .attr("r", std_rad)
        .on("mouseout", function(d) {
            d3.select(this).attr("fill", function(d) { return d["Color"]; })
            d3.select(this).attr("r", std_rad);
        })
        .on("mouseover", function(d) {
            d3.select(this).attr("fill", "orange");
            d3.select(this).attr("r", std_rad*2);
        })
        .on("click", function(d,i) {
            console.log("index: " + i);
        })
        .append("title")
        .text(function(d) {
            return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
        });


    //update all dots
    dots
    // .transition()
    // .duration(transitionTime)
    // .each("start", function() {

    //     d3.select(this)
    //         .attr("fill", "#e0a6d3")
    //         .attr("r", 7);

    // })
    .attr("cx", function(d,i) {
        return xScale(d[x_attr]);
    })
    .attr("cy", function(d) {
        return yScale(d[y_attr]);
    })
    .transition()
    // .duration(transitionTime)
    .attr("fill", function(d) { 
        return d["Color"]; 
    })
    .attr("r", std_rad);
    

    dots.append("title")
        .text(function(d) {
            return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
        });


    //exit of old dots
    dots.exit()
        .transition()
        .duration(transitionTime)
        .attr("x", w)
        .remove();

}


function xAxisChanged(newX){

    console.log(x_attr);
    x_attr = newX;
    console.log(x_attr);

    //update scale domains
    xScale.domain([attr_dict[x_attr][min_type]*.98,
                    attr_dict[x_attr][max_type]*1.02]);


    d3.selectAll("circle").remove();

    //rebind data sets
    var dots = scatter_svg.selectAll("circle")   
                          .data(dataset);

    //set times
    var transitionTime = 900;

    //add any new dots
    dots.enter()
        .append("circle")
        .attr("fill", function(d) { 
            return d["Color"]; 
        })
        .attr("cx", function(d,i) {
            return xScale(d[x_attr]);
        })
        .attr("cy", function(d) {
            return yScale(d[y_attr]);
        })
        .attr("r", std_rad)
        .on("mouseout", function(d) {
            d3.select(this).attr("fill", function(d) { return d["Color"]; })
            d3.select(this).attr("r", std_rad);
        })
        .on("mouseover", function(d) {
            d3.select(this).attr("fill", "orange");
            d3.select(this).attr("r", std_rad*2);
        })
        .on("click", function(d,i) {
            console.log("index: " + i);
        })
        .append("title")
        .text(function(d) {
            return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
        });


    //update all dots
    dots
    // .transition()
    // .duration(transitionTime)
    // .each("start", function() {

    //     d3.select(this)
    //         .attr("fill", "#e0a6d3")
    //         .attr("r", 7);

    // })
    .attr("cx", function(d,i) {
        return xScale(d[x_attr]);
    })
    // .transition()
    .duration(transitionTime)
    .attr("fill", function(d) { 
        return d["Color"]; 
    })
    .attr("r", std_rad);
    

    dots.append("title")
        .text(function(d) {
            return x_attr + ": " + d[x_attr] + "\n" + y_attr + ": " + d[y_attr];
        });


    //exit of old dots
    dots.exit()
        .transition()
        .duration(transitionTime)
        .attr("x", w)
        .remove();

     //x-axis label
    scatter_svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (w / 2) + "," + (h-20) + ")")
        .text(x_attr);

}
