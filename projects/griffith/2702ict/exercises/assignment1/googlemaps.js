var pyrmont = { lat: -28.016666, lng: 153.399994 };
var randomtitle = "";
let infoWindow;

function loadSelectedPlace(item){
  for(var i = 0; i< main_data.length;i++){
    for(var s = 0; s< main_data[i].LstSub.length;s++){
      if(item == main_data[i].LstSub[s].name){
        pyrmont = { lat: parseFloat(main_data[i].LstSub[s].lat), lng: parseFloat(main_data[i].LstSub[s].long) };
        $("#locationField").html(item);
        loadGoogleMaps();
        break;
      }
    }
  }
}

function initMap() {
    // Create the map.
    $.get( "http://pressback.space:1230/", function( data ) {
      var j = JSON.parse(data);
      randomtitle = j[0] + " - " + j[1];

      pyrmont = { lat: parseFloat(j[2]), lng: parseFloat(j[3]) };
      $("#locationField").html(randomtitle);
      GrabPhotos(randomtitle);
      loadGoogleMaps();
    });
  }

  function loadGoogleMaps(){
    $("#places").html("");
    const map = new google.maps.Map(document.getElementById("map"), {
      center: pyrmont,
      zoom: 15,
      mapId: "8d193001f940fde3",
      zoomControl: true,
    });
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("info-content"),
    });
    // Create the places service.
    const service = new google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");
  
    moreButton.onclick = function () {
      moreButton.disabled = true;
  
      if (getNextPage) {
        getNextPage();
      }
    };
    // Perform a nearby search.
    service.nearbySearch(
      { location: pyrmont, radius: 500, type: "establishment" },
      (results, status, pagination) => {
        if (status !== "OK" || !results) return;
        addPlaces(results, map);
        moreButton.disabled = !pagination || !pagination.hasNextPage;
  
        if (pagination && pagination.hasNextPage) {
          getNextPage = () => {
            // Note: nextPage will call the same handler function as the initial call
            pagination.nextPage();
          };
        }
      }
    );
  }

  function addPlaces(places, map) {
    const placesList = document.getElementById("places");
  
    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
        var marker = new google.maps.Marker({
          map,
          icon: image,
          title: place.name,
          position: place.geometry.location,
          animation: google.maps.Animation.DROP,
        });
        const infowindow = new google.maps.InfoWindow({
            content: generatePlaceContent(place),
        });
        //console.log(place);
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
        const li = document.createElement("li");
        li.textContent = place.name;
        placesList.appendChild(li);
        li.addEventListener("click", () => {
          map.setCenter(place.geometry.location);
        });
      }
    }
  }


function generatePlaceContent(place){
    var htmldata = '<div><div id="info-content"><table>';
    var phonedata = "";
    var ratingHtml = "";
    var websitedata = "";
    if (place.formatted_phone_number) {
        phonedata = place.formatted_phone_number;
    }

    if (place.website) {
        let fullUrl = place.website;
        let website = String(hostnameRegexp.exec(place.website));
    
        if (!website) {
          website = "http://" + place.website + "/";
          fullUrl = website;
        }

        websitedata = website;
      }

    for (let i = 0; i < 5; i++) {
        if (place.rating < i + 0.5) {
          ratingHtml += "&#10025;";
        } else {
          ratingHtml += "&#10029;";
        }
      }
    htmldata+= '<tr id="iw-url-row" class="iw_table_row">';
    htmldata+= '<td id="iw-icon" class="iw_table_icon"><img class="hotelIcon" '+ 'src="' + place.icon + '"/></td>';
    htmldata+= '<td id="iw-url">'+'<b><a href="' + place.url + '">' + place.name + "</a></b>"+'</td> </tr>';
    htmldata+= '<tr id="iw-address-row" class=";iw_table_row">';
    htmldata+= '<td class="iw_attribute_name">Address:</td>';
    htmldata+= '<td id="iw-address">'+place.vicinity;+'</td></tr>';
    htmldata+= '  <tr id="iw-phone-row" class="iw_table_row">';
    htmldata+= '   <td class="iw_attribute_name">Telephone:</td>';
    htmldata+= '     <td id="iw-phone">'+phonedata+'</td></tr>';
    htmldata+= '  <tr id="iw-rating-row" class="iw_table_row">';
    htmldata+= '     <td class="iw_attribute_name">Rating:</td>';
    htmldata+= '    <td id="iw-rating">'+ratingHtml+'</td></tr>';
    htmldata+= '    <tr id="iw-website-row" class="iw_table_row">';
    htmldata+= '    <td class="iw_attribute_name">Website:</td>';
    htmldata+= '   <td id="iw-website">'+websitedata+'</td>';
    htmldata+= '  </tr></table></div></div>';
    return htmldata;
}