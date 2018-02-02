$(document).ready(function(){
	for(var p = 1; p < 152; p++){
		console.log(p);
		$('#pokemon').append("<img src='http://pokeapi.co/media/img/"+p+".png'>");
	}
});