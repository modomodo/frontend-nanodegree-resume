var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderFName = '<h1 id="first-name">%data%</h1>';
var HTMLheaderlName = '<h1 id="last-name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry mdl-card__actions mdl-card--border"></div>';
var HTMLworkEmployer = '<a href="#" class="info-head inline-block">%data%';
var HTMLworkTitle = '<span class="info-title info-head block">%data%</span>';
var HTMLworkDates = '<span class="info-head block">%data%</span>';
var HTMLworkLocation = ' - %data%</a>';
var HTMLworkDescription = '<p class="text-justify mdl-card__supporting-text">%data%</p>';

var HTMLprojectStart = '<div class="project-entry mdl-cell--6-col-desktop"></div>';
var HTMLprojectTitle = '<span class="info-title info-head block text-center">%data%</span>';
var HTMLprojectDates = '<span class="info-head block text-center">%data%</span>';
var HTMLprojectDescription = '<p class="text-center mdl-card__supporting-text">%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-image">';
var HTMLprojectDemo = '<a href="#" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--orange-600 mdl-color-text--blue-grey-50" target="_blank">Demo</a>';
var HTMLprojectGithub = '<a href="#" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--orange-600 mdl-color-text--blue-grey-50" target="_blank">Github</a>';

var HTMLschoolStart = '<div class="education-entry mdl-grid"></div>';
var HTMLschoolName = '<span class="school-title info-head mdl-cell--3-col-phone mdl-cell--6-col-tablet mdl-cell--9-col-desktop">%data%';
var HTMLschoolDegree = '<i class="school-aside mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col-desktop">%data%</i>';
var HTMLschoolDates = '<i class="school-aside mdl-cell--1-col-phone mdl-cell--2-col-tablet mdl-cell--3-col-desktop">%data%</i>';
var HTMLschoolLocation = ' - %data%</span>';
var HTMLschoolMajor = '<a href="#" class="info-head inline-block mdl-cell--3-col-phone mdl-cell--6-col-tablet mdl-cell--9-col-desktop" target="_blank">%data%</a>';

var HTMLonlineStart = '<div class="online-entry mdl-grid"></div>';
var HTMLonlineClasses = '<h4 class="online-title"><i class="material-icons">&#xE02F;</i>Online Classes</h4>';
var HTMLonlineTitle = '<span class="school-title info-head block mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop" target="_blank">%data%</span>';
var HTMLonlineSchool = '<a href="#" class="info-head inline-block mdl-cell--2-col-phone mdl-cell--5-col-tablet mdl-cell--8-col-desktop" target="_blank">%data%</a>';
var HTMLonlineDates = '<i class="school-aside mdl-cell--2-col-phone mdl-cell--3-col-tablet mdl-cell--4-col-desktop">%data%</i>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
    $('#main')
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
