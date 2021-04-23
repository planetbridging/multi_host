var rt2020 = "https://data.gov.au/geoserver/tourism-regions-2020/wfs?request=GetFeature&typeName=ckan_34cfd8b8_0011_48b2_9fbd_0bd096957917&outputFormat=json";
var uniq_states = [];
var subclassification = [];
var selected_sub = [];
var main_data = [];
var main_data_selected = [];

$(document).ready(function () {

    $("#closecontainer").click(function () {
        //$("#modelcontainer").attr("visibility", "show");
        $("#modelcontainer").addClass("hideItem");
      });
    
    
    /*$( "#HolidaySlider" ).change(function() {
        var startPos = $("#HolidaySlider").val();
        $("#HolidayPrice").val(startPos);
    });*/
    LoadMainData();
    //SetupRT2020();   
    
   /* var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

});


function SetupRT2020(){
    $.get( rt2020, function( data ) {
        var d = data["features"];
        for(var i = 0; i < d.length;i++){
            var s = d[i]["properties"]["ste_name16"];
            //console.log(d[i]["properties"]);
            if(!uniq_states.includes(s)){
                uniq_states.push(s);
                $("#LstState").append( "<li class='selectItem'>"+s+"</li>" );
            }
            var sub = d[i]["properties"]["tr_name"];
            if(subclassification.length == 0){
                subclassification.push([s,sub]);
                //console.log(subclassification[0][1]);
            }else{
                var found = false;
                for(var u = 0; u < subclassification.length;u++){
                    if(subclassification[u][1].includes(sub)){
                        found = true;
                        break;
                    }
                }
                if(!found){
                    subclassification.push([s,sub]);
                }
            }
            //LoopCoordinates(sub,d[i]["geometry"]["coordinates"]);
        }
        ListenersRT2020();
    });
    console.log("complete");
}

function ListenersRT2020(){
    $( ".selectItem" ).click(function() {
        //console.log($(this).text());
        //$(this).toggleClass("checked");
        //$(this).parent().toggleClass("checked");
        $(this).toggleClass("checked");
        ToggleSubclassification();
    });
}

function ToggleSubclassification(){
    $("#LstSub").html("");
    selected_sub = [];
    $('#LstState li').each(function(i){
        if($(this).attr("class").includes("checked")){
            var s = $(this).text();
            for(var u = 0; u < subclassification.length;u++){
                if(subclassification[u][0].includes(s)){
                    selected_sub.push(subclassification[u]);
                    //$("#LstSub").append( "<li class='selectItem'>"+subclassification[u][1]+"</li>" );
                }
            }
            
        }
    });
    $("#SubCount").html(selected_sub.length);
}

//------------------------load main data-------------------------------

function LoadMainData(){
    $.get( "places.json", function( data ) {
        for(var i = 0; i< data.length;i++){
            if(main_data.length == 0){
                var s = new objState(data[i]["State"]);
                var d = new objSubclassification(data[i]["Place"],data[i]["Longitude"],data[i]["Latitude"]);
                s.LstSub.push(d);
                main_data.push(s);
            }else{
                var found = false;
                for(var t = 0; t< main_data.length;t++){
                    if(main_data[t].name == data[i]["State"]){
                        var d = new objSubclassification(data[i]["Place"],data[i]["Longitude"],data[i]["Latitude"]);
                        main_data[t].LstSub.push(d);
                        found = true;
                        break;
                    }
                }
                if(!found){
                    var s = new objState(data[i]["State"]);
                    var d = new objSubclassification(data[i]["Place"],data[i]["Longitude"],data[i]["Latitude"]);
                    s.LstSub.push(d);
                    main_data.push(s);
                }
            }
        }
        ShowMainStates();
    });
}

function ShowMainStates(){
    //LstMainState
    for(var i = 0; i < main_data.length;i++){
        $("#LstMainState").append( "<li class='selectMainItem'><span>"+main_data[i].name+"</span><span style='float:right;'>+</span></li>" );
    }

    $( ".selectMainItem" ).click(function() {
        //console.log($(this).text());
        //$(this).toggleClass("checked");
        //$(this).parent().toggleClass("checked");
        //$(this).toggleClass("checked");
        if ($(this).find("li").length > 0) {
          }else{
            var boolfoundul = false;
            $(this).find("ul").each(function(){$(this).remove();boolfoundul=true;});
            if(!boolfoundul){
                
                var beforehtml = $(this).html();
                var r_lst_js = '$(this).parent().find("ul").each(function(){$(this).remove();});';
                $(this).find("span").each(function(){var t = $(this).text();if(t.includes("+")){$(this).text("-").click(function(){$(this).parent().find("li").each(function(){$(this).remove();});});}});
                var tmpobj = getState($(this).text());
                if(tmpobj != null){
                    //var newlst = "<li><button onclick='"+r_lst_js+"' style='float:right;'>Close</button></li>";
                    var newlst = "";
                    for(var d = 0; d < tmpobj.LstSub.length;d++){
                        newlst += "<li class='selectMainSubItem'>"+tmpobj.LstSub[d].name+"</li>" ;
                    }
                    $(this).append( "<ul id='LstSubItems' class='selectLstSubMain'>"+newlst+"</ul>" );
                }
                $( ".selectMainSubItem" ).click(function() {
                    //console.log($(this).text());
                    /*if(!main_data_selected.includes($(this).text())){
                        main_data_selected = [];
                        main_data_selected.push($(this).text());
                        //$("#SelectedOptions").html("");
                        //$("#SelectedOptions").append( "<li class='selectedMainSubItem'><span>"+$(this).text()+"</span></li>" );
                        //$("#SubCount").text(main_data_selected.length);
                        //$("#Step2").css("display", "block");
                        //$("#Step3").css("display", "block");
                        //SelectedOptions
                        
                    }*/
                    //var service = new google.maps.places.AutocompleteService();
                    //service.getQueryPredictions({ input: 'Gold Coast' }, callback);
                    //$(this).toggleClass("checked");
                    //$(this).parent().toggleClass("checked");
                    //$(this).toggleClass("checked");
                    //ToggleSubclassification();
                    loadSelectedPlace($(this).text());
                    GrabPhotos($(this).text());
                });
            }else{
                $(this).find("span").each(function(){var t = $(this).text();if(t.includes("-")){$(this).text("+")}});
            }
            
          }

          
          //
    });
}

function getState(state){
    state = state.replace("+","");
    state = state.replace("-","");
    for(var i = 0; i < main_data.length;i++){
        if(state == main_data[i].name){
            return main_data[i];
        }
    }
    return null;
}

function closeState(num){

}