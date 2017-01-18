//////////////////////////////////////////////////
//                                              //
//  Drop down menu to change x_attribute type   //
//                                              //
//////////////////////////////////////////////////

/* Code based on: https://gist.github.com/jfreels/6734823 */


//all attributes I'm looking at
var forDropDown = ["Fixed Acidity", "Volatile Acidity",
					   "Citric Acid", "Residual Sugar", "Chlorides",
					   "Free Sulfur Dioxide", "Total Sulfur Dioxide",
					   "Density", "pH", "Sulphates", "Alcohol", "Quality"];

//variable 
var x_select = d3.select('body')
  	.append('select')
  	.attr('class','select_x')
    .on('change', onchange);

var x_options = x_select
  .selectAll('option')
	.data(forDropDown).enter()
	.append('option')
		.text(function (d) { return d; });

//when item is selected, changes selected value
function onchange() {
	selectValue = d3.select('select').property('value');
	// d3.select('body')
	// 	.append('p')
	// 	.text(selectValue + ' is the last selected option.')
	// var newDataset = selectValue.toLowerCase();
	//console.log("curr dataset: " + dataset);
	xAxisChanged(selectValue);
};