// API stands for Application Programming Interface
// It can extend the functionality of the browser
// It can simplify complex functions
// It can provide easy syntax to complex code

// A Web API is an application programming interface for the web
// A Browser API can extend the functionality of the web browser
// A Server API can extend the functionality of the web server

// Browser API
// All browsers have a set of built in APIs that support 
// complex operations and, to help accessing data
 
// Geoloaction API
// It can provide the location(Latitude and Longitude of where 
// is the browser is located)
let element = document.querySelector(".location");
let showButton = document.querySelector(".btn-show");
let hideButton = document.querySelector(".btn-hide");

function getLocation() {
    try {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            button.innerHTML = 'Hide your coordinates'
        } else {
            element.innerHTML = 'This browser does not have a Geolocation API!';
        } 
    } catch(error) {
            element.innerHTML = error
    }
}

function showPosition(Position) {
    element.innerHTML = `Latitude: ${Position.coords.latitude} <br> Longitude: ${Position.coords.longitude}`
}

function HideLocation() {
    element.innerHTML = "";
}

showButton.onclick = () => {
    let parent = showButton.parentNode;
    parent.replaceChild(hideButton, showButton);
    hideButton.style.display = 'inline';
    getLocation();
}

hideButton.onclick = () => {
    let parent = hideButton.parentNode;
    parent.replaceChild(showButton, hideButton);
    HideLocation();
}
