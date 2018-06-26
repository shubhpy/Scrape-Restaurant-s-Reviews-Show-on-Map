$(document).ready(function () {
    var map;
    var elevator;
    var LatLongs = [
        {
            "location": {
                "lat": 28.5355161,
                "lng": 77.3910265
            },
            "Name": "Noida, Uttar Pradesh"
        },
        {
            "location": {
                "lat": 28.4594965,
                "lng": 77.0266383
            },
            "Name": "Gurugram, Haryana"
        }
    ];

    var Listlatlng = [];

    function getGeoData(ty){
        process(ty)
        }
    
    function process(data){
        var p = data.location;
        Listlatlng.push([p.lat,p.lng]);
        
        var myOptions = {
        zoom: 10,
        center: new google.maps.LatLng(0,0),
        mapTypeId: 'terrain'
        };
        map = new google.maps.Map($('#map_canvas')[0], myOptions);
        var ll = []; 
        for (var x = 0; x < Listlatlng.length; x++) {
            var latlng = new google.maps.LatLng(Listlatlng[x][0],Listlatlng[x][1]);
            
            // m = new google.maps.Marker({
            //     position: latlng,
            //     map: map
            //     });
            // var m = new google.maps.Marker({
            //     position: latlng,
            //     map: map
            //   });
            
            //   google.maps.event.addListener(m, 'mouseover', function() {
            //     infowindow.setContent("<b>".html());
            //     infowindow.open(map, marker);
            //   });
            
            //   google.maps.event.addListener(m, 'mouseout', function() {
            //     infowindow.close();
            //   });
            
            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the '+
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                'south west of the nearest large town, Alice Springs; 450&#160;km '+
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                'Aboriginal people of the area. It has many springs, waterholes, '+
                'rock caves and ancient paintings. Uluru is listed as a World '+
                'Heritage Site.</p>'+
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                '(last visited June 22, 2009).</p>'+
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'Uluru (Ayers Rock)'
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            
            ll.push(marker);
        }
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < ll.length; i++) {
        bounds.extend(ll[i].getPosition());
        }
        map.fitBounds(bounds);
    }
    
    for (var x = 0; x < LatLongs.length; x++) {
        getGeoData(LatLongs[x]);
    }
});

// https://maps.googleapis.com/maps/api/staticmap?center=29.3375713,80.0942087&markers=color:red|29.3375713,80.0942087&
// zoom=12&size=500x1000&key=AIzaSyBfEtpUU_-krt-FcLlcUX2IW6hFfUo12v0
