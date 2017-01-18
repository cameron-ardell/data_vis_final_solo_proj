//inspired by: http://bl.ocks.org/tjdecke/5558084

//number of attributes considered
var attr_col = 12;

var margin = { top: 50, right: 0, bottom: 100, left: 30 },
          width = 960 - margin.left - margin.right,
          height = 430 - margin.top - margin.bottom,
          gridSize = Math.floor(width / attr_col),
          legendElementWidth = gridSize*2,
          num_colors = 9,
          colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
          wine_samples = ["Wine_1", "Wine_2", "Wine 3"],
          col_labels = ["Fixed Acidity", "Volatile Acidity",
             "Citric Acid", "Residual Sugar", "Chlorides",
             "Free Sulfur Dioxide", "Total Sulfur Dioxide",
             "Density", "pH", "Sulphates", "Alcohol", "Quality"];
          // datasets = ["data.tsv", "data2.tsv"];

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var sample_labels = svg.selectAll(".sampleLabel")
    .data(wine_samples)
    .enter().append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return i * gridSize; })
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
      .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "sampleLabel mono axis axis-wine_samples" : "sampleLabel mono axis"); });

var attr_labels = svg.selectAll(".attrLabel")
    .data(col_labels)
    .enter().append("text")
      .text(function(d) { return d; })
      .attr("x", function(d, i) { return i * gridSize; })
      .attr("y", 0)
      .style("text-anchor", "middle")
      .attr("transform", "translate(" + gridSize / 2 + ", -6)")
      .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "attrLabel mono axis axis-attributes" : "attrLabel mono axis"); });

var heatmapChart = function() {

    var colorScale = d3.scale.quantile()
        //.domain([0, num_colors - 1, d3.max(data, function (d) { return d.value; })])
        .range(colors);

    var cards_first_row = svg.selectAll("#first_row")
                              .data(sampleArray[0])
                              .enter()
                              .append("rect")
                              .attr("id", "first_row");

    var cards_second_row = svg.selectAll("#second_row")
                              .data(sampleArray[1])
                              .enter()
                              .append("rect")
                              .attr("id", "second_row");

    var cards_third_row = svg.selectAll("#third_row")
                              .data(sampleArray[2])
                              .enter()
                              .append("rect")
                              .attr("id", "third_row");

    cards_first_row
                .attr("x", function(d, i){
                  return i*gridSize;
                })
                .attr("y", function(d, i){
                  return 0*gridSize;
                })
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("width", gridSize)
                .attr("height", gridSize)
                .attr("fill", function(d, i){
                    colorScale.domain([attr_dict[d.key][min_type],
                    attr_dict[d.key][max_type]]);
                })
                cards.select("title").text(function(d) { return d.value; });

    cards_second_row
                .attr("x", function(d, i){
                  return i*gridSize;
                })
                .attr("y", function(d, i){
                  return 1*gridSize;
                })
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("width", gridSize)
                .attr("height", gridSize)
                .attr("fill", function(d, i){
                    colorScale.domain([attr_dict[d.key][min_type],
                    attr_dict[d.key][max_type]]);
                });
    cards_third_row
                .attr("x", function(d, i){
                  return i*gridSize;
                })
                .attr("y", function(d, i){
                  return 2*gridSize;
                })
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("width", gridSize)
                .attr("height", gridSize)
                .attr("fill", function(d, i){
                    colorScale.domain([attr_dict[d.key][min_type],
                    attr_dict[d.key][max_type]]);
                });

    //cards.append("title");

};
// heatmapChart(datasets[0]);
      
//       var datasetpicker = d3.select("#dataset-picker").selectAll(".dataset-button")
//         .data(datasets);

//       datasetpicker.enter()
//         .append("input")
//         .attr("value", function(d){ return "Dataset " + d })
//         .attr("type", "button")
//         .attr("class", "dataset-button")
//         .on("click", function(d) {
//           heatmapChart(d);
//         });