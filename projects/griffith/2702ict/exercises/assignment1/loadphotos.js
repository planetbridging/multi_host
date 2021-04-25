var flickr_key = "99872428c9a3629cc7186481eebd04fd";
var parms = "";
var lstRecently = [];
function loadListener(){
  $("#RecentView").removeClass("hideItem");
  //console.log("yay");
    $("#LstRecently li").off();
    /*$("#LstRecently li").click(function () {
        //$("#modelcontainer").attr("visibility", "show");
        var jclasses = $(this).attr("class").split(/\s+/);
        for(var i =0; i<jclasses.length;i++){
            if(jclasses[i].includes("num#")){
                var p = jclasses[i].split("num#")[1];
                var n = parseInt(p);
                $("#modelcontainer").removeClass("hideItem");
                console.log(lstRecently[n]);
                //viewPhoto(lstRecently[n]["id"],n,true);
                console.log("load recent pic");
            }
        }
      });*/


    $('#LstRecently li').delegate('img','click', function() {
        var n = $(this).parent('li').index();
        $("#modelcontainer").removeClass("hideItem");
        viewPhoto(lstRecently[n]["id"],n,true);
    });
   
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function GrabPhotos(txt) {
    lstPhotoStore = [];
    var l =
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
      flickr_key +
      "&format=json&nojsoncallback=1&per_page=30&text=" +
      txt +
      "&" +
      parms;
  
    $.get(l, function (data) {
      var lstphotos = data["photos"]["photo"];
      console.log(data);
      lstphotos = shuffleArray(lstphotos);
      //var ran = Math.floor(Math.random() * lstphotos.length);
      //console.log(lstphotos[ran]);
      $("#Gallery").html("");
      for (var i = 0; i < 10; i++) {
        getPhotoSizes(i, lstphotos[i]["id"], lstphotos[i]["title"]);
      }
    });
  }

  function getPhotoSizes(num, id, caption) {
    var l =
      "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" +
      flickr_key +
      "&format=json&nojsoncallback=1" +
      parms +
      "&photo_id=" +
      id;
  
    $.get(l, function (data) {
      var lstsizes = data["sizes"]["size"];
      var item = "";
      for (var i = 0; i < lstsizes.length; i++) {
        if (lstsizes[i]["label"] == "Square") {
          item = lstsizes[i];
          break;
        }
        //console.log(lstsizes[i]);
      }
  
      if (item == "") {
        item = lstsizes[0];
      }
      lstsizes[lstsizes.length - 1]["id"] = id;
      lstsizes[lstsizes.length - 1]["caption"] = caption;
      //console.log(lstsizes[lstsizes.length - 1]);
      lstPhotoStore.push(lstsizes[lstsizes.length - 1]);
      AppendThumbnail(num, id, item);
    });
  }

  function AppendThumbnail(num, id, item) {
      var newimg = $("<img>");
    newimg.attr("src", item["source"]);
    newimg.attr("width", item["width"]);
    newimg.attr("height", item["height"]);
    newimg.attr("class", "miniSearch");
    $("#Gallery").append(newimg);

    newimg.click(function () {
        //$("#modelcontainer").attr("visibility", "show");
        $("#modelcontainer").removeClass("hideItem");
        showPhoto(id);
      });
  }

  function showPhoto(id) {
    for (var i = 0; i < lstPhotoStore.length; i++) {
      if (id == lstPhotoStore[i]["id"]) {
        viewPhoto(id,i,false);
        var liadd = '<li class="itemRecently"><img src="'+lstPhotoStore[i]["source"]+'" width="75" height="75" class="miniSearch"></li>';
        $("#LstRecently").append(liadd);
        lstRecently.push(lstPhotoStore[i]);  
        loadListener();
        break;
      }
    }
  }
  
  function viewPhoto(id,itemNumber,rec) {
    
    var l =
    "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
    flickr_key +
    "&format=json&nojsoncallback=1&photo_id=" + id;
      $.get(l, function (data) {
            var cleandate = data["photo"]["dates"]["taken"];
            if(cleandate.includes(" ")){
                $("#imgdatecaption").html(cleandate.split(" ")[0]);
            }else{
                $("#imgdatecaption").html(cleandate);
            }
          
      });

    var newimg = $("<img>");
    if(!rec){
        newimg.attr("src", lstPhotoStore[itemNumber]["source"]);
        newimg.attr("id", "imgAuto");
        $("#imgcontainer").html(newimg);
        $("#imgcaption").html(lstPhotoStore[itemNumber]["caption"]);
    }else{
        newimg.attr("src", lstRecently[itemNumber]["source"]);
        newimg.attr("id", "imgAuto");
        $("#imgcontainer").html(newimg);
        $("#imgcaption").html(lstRecently[itemNumber]["caption"]);
    }
    
  }
