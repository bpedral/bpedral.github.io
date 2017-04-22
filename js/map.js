var map;
    function initMap() {
        var loc = {lat: -23.627683, lng: -46.639082};
        map = new google.maps.Map(document.getElementById('map'), {
            center: loc,
            zoom: 16
        });

        var contentString = '<div id="locContent">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="firstHeading" class="firstHeading">Consultório</h1>'+
            '<div id="bodyContent">'+
            '<p>Rua Major Freire - Metrô São Judas' +
            '</br>(Próximo à Av. Jabaquara) '+
            '</br>São Paulo, SP 04304-110</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        
        var marker = new google.maps.Marker({
            position: loc,
            map: map,
            title: 'Consultório'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        //marker.setMap(map);
    }