# Project Instructions

project include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. !

The goal of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Using APIs and creating requests to external urls

## Getting started
# Setting up Webpack
- `npm i -D @babel/core @babel/preset-env babel-loader`
- `npm i -D style-loader node-sass css-loader sass-loader`
- `npm i -D clean-webpack-plugin`
- `npm i -D html-webpack-plugin`
- `npm i -D mini-css-extract-plugin`
- `npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`


## Setting up the API

### Step 1: use geonames api:
get coordinates from the Geonames API

### Step 2: use Weatherbit API:
Integrate the Weatherbit API ,if the trip is within a week you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast.
### Step 3: use Pixabay API:
ntegrate the Pixabay API, display an image of the location entered.


### Step 4: Testing :
test for the express server and application javascript
### Step 5: sass :
- All features are usable across modern desktop, tablet, and phone browsers.
- All interactive elements have hover states.
### Step 6: HTML :
- `index.html` HTML structure indented properly with classes and ID’s that make sense.
- enter the location you are traveling to and the date you are leaving
### Step 7: Comments :