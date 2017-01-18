//////////////////////////////////////////////////
//                                              //
//     Drop down menu to change wine type       //
//                                              //
//////////////////////////////////////////////////

/* Code based on: https://gist.github.com/jfreels/6734823 */


var forDropDown = ["both", "red", "white"];
var actualVal = {"both": both, "red": red, "white": white};

//variable 
var wine_select = d3.select('body')
  	.append('select')
  	.attr('class','select')
    .on('change', onchange);

var options = select
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
	var newDataset = actualVal[selectValue];
	//console.log("curr dataset: " + dataset);
	dataChanged(newDataset, selectValue);
};