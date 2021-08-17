# cinema seating app - frontend
This repo holds the front-end code for a simple cinema seating allocation app.
 written in Vue.js. A static preview of the UI can be found 
 [here](https://codepen.io/hamzeen/full/KKmYwBg).  
 Please continue to the next section if you want to set it up
locally.

## Getting Started

NOTE: Please make sure you have NodeJS installed your machine. If this not the case, 
you can download & install it from [here](https://nodejs.org/en/download).

* install dependencies: ```npm install```
* start local dev server: ```npm start``` or `npm run serve`
* preview: <http://localhost:8080>


## frontend routes
* Landing Page: <http://localhost:8080>
* About Page: <http://localhost:8080/about>

## Features/ Design Decisions

* The app marks (color codes) the seats according to its rank & also annotates the seats that are occupied.
* Components do not perform any heavy javascript operations within them. All are deligated to helper methods.
* The components utilize vue `lifecycle hooks` when appropriate.
* The `mock data` provided to test the app have been externalized & placed inside dedicated json files.
* Loading / Parsing the above data has been done in such a way that it **would seamlessly facilitate its replacement with an API call**.
* Routes have been setup for demonstration of `vue-router`.
* The project was generated with vue-cli with support for linting, css preprocessor (sass) & vuex
* The project follows `SOLID principles`, `DRY`
* The entire project was done with a `mobile-first` design approach & it's responsive.


## Screens

![on desktop](https://raw.githubusercontent.com/hamzeen/vue-cinema-app/main/src/assets/screens/001.jpg)
![mobile portrait](https://raw.githubusercontent.com/hamzeen/vue-cinema-app/main/src/assets/screens/002.jpg)
![handles empty data](https://raw.githubusercontent.com/hamzeen/vue-cinema-app/main/src/assets/screens/003.jpg)


### building for Production (with minification & etc.)
```
npm run build
```

### end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## CREDITS ##
Photos used in this repo are all obtained from [unsplash](http://unsplash.com). I hereby give all credits to their respective owners on unsplash.com



