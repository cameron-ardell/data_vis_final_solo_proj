//////////////////////////////////////////////////
//                                              //
//  Histogram based on user selected attribute  //
//                                              //
//////////////////////////////////////////////////

//constants that determine what information will be looked at
var hist_dataset = both;
var selected_attr = "Fixed Acidity";

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
	h=500;

//svg element
var hist_svg = d3.select("svg")
				.append("svg")
				.attr("class", "display")
				.attr("width", w)
				.attr("height", h);