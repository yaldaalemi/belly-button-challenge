d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then( data => {
    console.log(data);
    let sample_values = data.samples[0].sample_values.slice(0,10).reverse()
    let otu_ids = data.samples[0].otu_ids.slice(0,10).reverse().map(function(item) {
    return `OTU ${item}`;
    })
    let otu_labels = data.samples[0].otu_labels.slice(0,10).reverse()
    let trace1 = [{
        x: sample_values,
        y: otu_ids,
        text: otu_labels,
        type: "bar",
        orientation: "h"
      }];
      let layout = {
        title: "Graph",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };  
    Plotly.newPlot("plot", trace1, layout); 




    options = []
    var select = document.getElementById("selDataset");
    for(let i = 0; i < data.samples.length; i++){
        let sample = data.samples[i].id
        options.push(sample);
        el = document.createElement("option");
        el.textContent = sample;
        el.value = sample;
        select.appendChild(el);
    }



    d3.selectAll("#selDataset").on("change", getData);
    function getData() {
        let dropdownMenu = d3.select("#selDataset");
        let dataset = dropdownMenu.property("value");
        for(let i = 0; i < data.samples.length; i++){
            let item = data.samples[i]
        if (dataset == item.id) {
            let sample_values = item.sample_values.slice(0,10).reverse()
            let otu_ids = item.otu_ids.slice(0,10).reverse().map(function(item) {
                return `OTU ${item}`;
              })
            let otu_labels = item.otu_labels.slice(0,10).reverse()
            let newdata = [{
                x: sample_values,
                y: otu_ids,
                text: otu_labels,
                type: "bar",
                orientation: "h"
              }];
              updatePlotly(newdata);
        }
    }
    }

    function updatePlotly(newdata) {
        Plotly.restyle("plot",trace1, [newdata], layout);
      }
})


// d3.selectAll("#selDataset").on("change", updatePlotly);
// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");



// let sample_values = data.samples[0].sample_values.slice(0,10).reverse()
// let otu_ids = data.samples[0].otu_ids.slice(0,10).reverse().map(function(item) {
//     return `OTU ${item}`;
//   })
//   console.log(otu_ids)
// let otu_labels = data.samples[0].otu_labels.slice(0,10).reverse()