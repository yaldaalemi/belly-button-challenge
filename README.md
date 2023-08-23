# Belly Button Biodiversity Dashboard

## Background

This project involves building an interactive dashboard to explore the "Belly Button Biodiversity" dataset, which catalogs microbial species in human navels. The dataset highlights the presence of certain microbial species in the majority of individuals while others are relatively rare.
To see the interactive dashboard please visit: https://yaldaalemi.github.io/belly-button-challenge/

## Project Overview

### Data Visualization
- Utilized D3 library to read the "samples.json" dataset from [this URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).
- Created a horizontal bar chart with a dropdown menu to display the top 10 operational taxonomic units (OTUs) found in each individual.
  - Used `sample_values` for bar chart values.
  - Employed `otu_ids` as bar chart labels.
  - Utilized `otu_labels` for hovertext.
- Designed a bubble chart displaying each sample:
  - `otu_ids` for x values.
  - `sample_values` for y values.
  - `sample_values` for marker size.
  - `otu_ids` for marker colors.
  - `otu_labels` for text values.

### Sample Metadata Display
- Displayed demographic information (metadata) for each individual, showing key-value pairs from the metadata JSON object.

### Interactive Features
- Implemented plot updates when a new sample is selected.
- Designed a custom layout for the dashboard.

## Usage

- To explore the Belly Button Biodiversity dashboard, visit the deployed app on [GitHub Pages](https://yaldaalemi.github.io/belly-button-challenge/)
- Interact with the dropdown menu to select different individuals and view microbial data.
- Explore the bubble chart and demographic information for insights into the dataset.

## Note

This project provides an interactive and informative dashboard to explore the fascinating world of microbial diversity in human navels.
