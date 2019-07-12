$(document).ready(function() {
    $(".menu").click(function() {
        $('ul').toggleClass("active");
    })


    $('#checkin').datepicker({
        dateFormat: "d-m-yyyy",
        minDate: new Date()

    })


    $('#checkout').datepicker({

        dateFormat: "d-m-yyyy",
        minDate: new Date()

    })
})

//Date Picker




// Access instance of plugin
$('#checkin').data('datepicker')

// Access instance of plugin
$('#checkout').data('datepicker')


//Google Maps

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(23.597969, 72.969818),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}