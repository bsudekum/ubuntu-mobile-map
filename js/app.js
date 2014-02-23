/**
 * Wait before the DOM has been loaded before initializing the Ubuntu UI layer
 */
window.onload = function () {
    var UI = new UbuntuUI();
    UI.init();

    // Add an event listener that is pending on the initialization
    //  of the platform layer API, if it is being used.
    document.addEventListener("deviceready", function() {
        if (console && console.log)
            console.log('Platform layer API ready');

            //Initialize the map, add a geocoder
            L.mapbox.map('map', 'examples.map-vyofok3q')
                .addControl(L.mapbox.geocoderControl('examples.map-vyofok3q'));
    }, false);
};

