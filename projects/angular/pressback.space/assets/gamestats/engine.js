/*var jqxhr = $.get( "https://api.steampowered.com?key=F482E7D5410B6BF879C548FF4DBF1355&input_json={'steamid':76561197972495328}", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second finished" );
});*/

steam_data = [];
steam_min_data = [];
top_data = [];
grossing_data = [];
selling_data = [];

item_collection = [];
item_count = 0;

steam_count = 0;
top_count = 0;
grossing_count = 0;
selling_count = 0;

$(document).ready(function(){
	download_csv("top50steam.csv","TblSteamData");
	download_csv("Top_games.csv","TblTopGames");
	download_csv("Top_grossing_games.csv","TblTopGrossing");
	download_csv("Top_selling_games.csv","TblSelling");
});

function download_csv(csv,id){
	 $.ajax({
        type: "GET",
        url: csv,
        dataType: "text",
        success: function(response) {
			data = $.csv.toArrays(response);
			generateHtmlTable(data,id);
		}
     });
}


function generateHtmlTable(data,id) {
    var html = '';
      if(typeof(data[0]) === 'undefined') {
        return null;
      } else {
		$.each(data, function( index, row ) {
		  //bind header
		  if(index == 0) {
			html += '<thead>';
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<th>';
				html += colData;
				html += '</th>';
			});
			html += '</tr>';
			html += '</thead>';
			html += '<tbody>';
		  } else {
			  
			  
			html += '<tr>';
			$.each(row, function( index, colData ) {
				html += '<td>';
				html += colData;
				html += '</td>';
				if(id == "TblSteamData" && index == 3){
					item_collection.push(item_count);
				  steam_data.push(colData);
				  steam_count+= parseInt(colData);
				  item_count += 1;
				}
				
				if(id == "TblSteamData" && index == 2){
				  steam_min_data.push(colData);
				}
				
				if(id == "TblTopGames" && index == 1){
				  top_data.push(colData);
				}
				
				if(id == "TblTopGrossing" && index == 1){
				  grossing_data.push(colData);
				}
				
				if(id == "TblSelling" && index == 1){
				  selling_data.push(colData);
				}
			  
			});
			html += '</tr>';
		  }
		});
		html += '</tbody>';
		html += '</table>';
		//alert(html);
		$('#' + id).append(html);
	  }
	  
	  if(id == "TblSelling" ){
		  
		  console.log("SteamTotal: "+steam_count);
		  finish_loading();
	  }
}

function load_json(){
	$.getJSON("steamspytop100.json", function(data){
            steam_data = data;
			load_steam_data();
        }).fail(function(){
            console.log("An error has occurred.");
        });
}

function load_steam_csv_data(allText){
	var record_num = 4;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
			console.log(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    // alert(lines);
}