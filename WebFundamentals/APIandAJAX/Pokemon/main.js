$(document).ready(function(){

	for(var p = 1; p < 152; p++){
		$('#pokemon').append("<img id='"+p+"' src='http://pokeapi.co/media/img/"+p+".png'>");
    }

	$(document).on('click', 'img',function(){
		var num = $(this).attr('id');

        $('#pic').html("<img id='"+num+"' src='http://pokeapi.co/media/img/"+num+".png'>");
                $.get("https://pokeapi.co/api/v2/pokemon/"+num+"/", function(res) {
                    var html_str = "";
                    html_str += "<ul>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_str += "</ul>";
                    $("#type").html(html_str);

                    var height = "<ul><li>" + res.height + "</li></ul>";
                    $("#height").html(height);

                    var weight = "<ul><li>" + res.weight + "</li></ul>";
                    $("#weight").html(weight);
                }, "json");
	});



})



// $.get("https://pokeapi.co/api/v2/pokemon/"+num+"/", function(res) {
//     var type = "";
//     type += "<ul>"; 
//     for(var i = 0; i < res.types.length; i++) {
//         type += "<li>" + res.types[i].type.name + "</li>";
//     }
//     html_str += "</ul>";
//     $("#type").html(html_str);
// }, "json");

// $.get("https://pokeapi.co/api/v2/pokemon/"+num+"/", function(res) {
//     var height = "<ul><li>" + res.height + "</li></ul>";
//     $("#height").html(height);
// }, "json");

// $.get("https://pokeapi.co/api/v2/pokemon/"+num+"/", function(res) {
//     var weight = "<ul><li>" + res.weight + "</li></ul>";
//     $("#weight").html(weight);
// }, "json");