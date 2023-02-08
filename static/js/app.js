d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then( data => {
    console.log(data);
    plot(0);
    function plot(i) {  
    let sample_values = data.samples[i].sample_values.slice(0,10).reverse()
    let bsample_values = data.samples[i].sample_values.reverse()
    let otu_ids = data.samples[i].otu_ids.slice(0,10).reverse().map(function(item) {
    return `OTU ${item}`;})
    let botu_ids = data.samples[i].otu_ids.reverse()
    let otu_labels = data.samples[i].otu_labels.slice(0,10).reverse()
    let botu_labels = data.samples[i].otu_labels.reverse()
    
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
          l: 80,
          r: 550,
          t: 200,
          b: 50
        }
      };  
    Plotly.newPlot("plot", trace1, layout); 

    let btrace1 = [{
      x: botu_ids,
      y: bsample_values,
      text: botu_labels,
      mode: "markers",
      marker: {
        size: bsample_values,
        color: botu_ids,
        colorscale: "Earth"
      }
    }];
    let blayout = {
      title: "Graph",
      margin: {
        r: 50,
        l: 50,
        t: 50,
        b: 50
      }
    };  
  Plotly.newPlot("plot1", btrace1, blayout); 
  let metadata = data.metadata[i]
  var meta = d3.select("#sample-metadata");
  meta.html("");
  Object.entries(metadata).forEach(([key, value]) => {
    meta.append("h6").text(`${key}: ${value}`);
  });

  }



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

        if (dataset == data.samples[i].id) {
            plot(i);
        }
        }
    }

})
