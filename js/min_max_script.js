//
//
// 	SCRIPT TO FIND MIN AND MAX VALUES FOR EACH ATTRIBUTE
//  Goal: generate a keyed dictionary that holds info for 
//			each attribute, will have one for red, one for white,
//			then compare two values for overall max.
//			This will eliminate overhead cost (currently super slowed down!)
//	Output: ideally a dictionary with all mins and maxs that I will save in
//			js file so I can have constant time look up
//
//

//number of attributes
var num_attr = 12;

//will be keyed dictionaries
var attr_dict = {};

//all attributes I'm looking at
var all_attributes = ["Fixed Acidity", "Volatile Acidity",
					   "Citric Acid", "Residual Sugar", "Chlorides",
					   "Free Sulfur Dioxide", "Total Sulfur Dioxide",
					   "Density", "pH", "Sulphates", "Alcohol", "Quality"];



//loop to create new dictionary that will hold min and max for each attribute
for (var i = 0; i < num_attr; i++){

	var newAttr = {};
	var attrKey = all_attributes[i];

	newAttr["red_min"] =  d3.min(red, function(d) { return d[attrKey]; });
	newAttr["red_max"] = d3.max(red, function(d) { return d[attrKey]; });
	newAttr["white_min"] = d3.min(white, function(d) { return d[attrKey]; });
	newAttr["white_max"] = d3.max(white, function(d) { return d[attrKey]; });
	newAttr["both_min"] = d3.min(both, function(d) { return d[attrKey]; });
	newAttr["both_max"] = d3.max(both, function(d) { return d[attrKey]; });

	attr_dict[attrKey]=newAttr;

}



// for (var i = 0; i < all_attributes; i++){

// 	var attrKey = all_attributes[i];

// 	attr_dict[newAttr["red_min"]] = d3.min(red, function(d) { return d[attrKey]; });
// 	attr_dict[newAttr["red_max"]] = d3.max(red, function(d) { return d[attrKey]; });
// 	attr_dict[newAttr["white_min"]] = d3.min(white, function(d) { return d[attrKey]; });
// 	attr_dict[newAttr["white_max"]] = d3.max(white, function(d) { return d[attrKey]; });
// 	attr_dict[newAttr["both_min"]] = d3.min(both, function(d) { return d[attrKey]; });
// 	attr_dict[newAttr["both_max"]] = d3.max(both, function(d) { return d[attrKey]; });
// }

// console.log(attr_dict);
