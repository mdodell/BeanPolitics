# BeanPolitics

A fun, educational, and information-rich hub app for all things politics! Developed in 48 hours as part of [HackBeanpot 2019](https://hackbeanpot.com).

## Components
### Civic Info Hub
Want to find out who represents you? Use the Civic Info Hub to become informed on your local representatives and how to contact them! Utilizes the Google Civic Information API & Google Maps Autocomplete API.
### Covfefe.io
A fun, informative game where users determine whether or not articles that appear are "Fake News". Try your luck at Covfefe.io! Parses articles from /r/theonion and /r/nottheonion.
### Data Archive
Curious about past election results? Access the Data Archive to see visualizations of your state's presidential elections! Incorporates data from MIT's Election Lab, graphed using MATLAB.

## Run

The `MATLAB Work` folder contains work done towards parsing data for the Data Archive. The `beanpolitics` folder contains the React workspace that should be run to use the program!

To run the project, navigate to the `beanpolitics` folder, swap out `YOUR_API_KEY` for a valid Google API key in `/public/index.html` and `/src/actions/index.js`, and then build using `npm start`!

## Made by

* Mitchell Dodell ([@mdodell](https://github.com/mdodell))
* Reese Farquhar ([@Farquhar-Reese](https://github.com/Farquhar-Reese))
* Adam Fleishaker ([@adamflyme](https://github.com/adamflyme))
* Prabu Gugagantha ([@blackf8](https://github.com/blackf8))
* Jonah Sanders ([@JonahSanders](https://github.com/JonahSanders))
