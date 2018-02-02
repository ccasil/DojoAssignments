$(document).ready(function(){

	// for(var p = 1; p < 152; p++){
	// 	$('#pokemon').append("<img id='"+p+"' src='http://pokeapi.co/media/img/"+p+".png'>");
	// }

	// $(document).on('click', '#pokemon',function(){
	// 	alert("click pokemon!");
	// });


    	$.get("https://pokeapi.co/api/v2/pokemon/131/", function(res) {
        	var html_str = "";
        	html_str += "<ul>"; 
        	for(var i = 0; i < res.types.length; i++) {
            	html_str += "<li>" + res.types[i].type.name + "</li>";
        	}
        	html_str += "</ul>";
        	$("#type").html(html_str);
    	}, "json");
		$.get("https://pokeapi.co/api/v2/pokemon/131/", function(res) {
    		var html_str = "<ul><li>" + res.height + "</li></ul>";
    		$("#height").html(html_str);
		}, "json");
		$.get("https://pokeapi.co/api/v2/pokemon/131/", function(res) {
    		var html_str = "<ul><li>" + res.weight + "</li></ul>";
    		$("#weight").html(html_str);
		}, "json");
})