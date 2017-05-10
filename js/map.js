var mapSaoJudas;
var mapPaulista;

function initMap() {
    var locSaoJudas = { lat: -23.627683, lng: -46.639082 };
    mapSaoJudas = new google.maps.Map(document.getElementById('mapSaoJudas'), {
        center: locSaoJudas,
        zoom: 16
    });

    var contentStringSJ = '<div id="locContent">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h2 id="firstHeading" class="firstHeading">Consultório</h1>' +
        '<div id="bodyContent">' +
        '<p>Rua Major Freire' +
        '</br>(Próximo ao Metrô São Judas) ' +
        '</br>São Paulo, SP 04304-110</p>' +
        '</div>' +
        '</div>';

    var infowindowSJ = new google.maps.InfoWindow({
        content: contentStringSJ
    });

    var markerSJ = new google.maps.Marker({
        position: locSaoJudas,
        map: mapSaoJudas,
        title: 'Consultório'
    });
    markerSJ.addListener('click', function () {
        infowindowSJ.open(mapSaoJudas, markerSJ);
    });
    //marker.setMap(map);


    var locPaulista = { lat: -23.627683, lng: -46.639082 };
    mapPaulista = new google.maps.Map(document.getElementById('mapPaulista'), {
        center: locPaulista,
        zoom: 16
    });

    var contentStringP = '<div id="locContent">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h2 id="firstHeading" class="firstHeading">Consultório</h1>' +
        '<div id="bodyContent">' +
        '<p>Av. Paulista, 726' +
        '</br>(Próximo ao Metrô Brigadeiro - Linha Verde) ' +
        '</br>São Paulo, SP 01310-100</p>' +
        '</div>' +
        '</div>';

    var infowindowP = new google.maps.InfoWindow({
        content: contentStringP
    });

    var markerP = new google.maps.Marker({
        position: locPaulista,
        map: mapPaulista,
        title: 'Consultório'
    });
    markerP.addListener('click', function () {
        infowindowP.open(mapPaulista, markerP);
    });
    //marker.setMap(map);
}
