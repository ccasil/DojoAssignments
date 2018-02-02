$(document).ready(function(){
	$(document).on('click', 'img', function(){
		var num = $(this).attr('id');
		$.get("https://anapioficeandfire.com/api/houses/"+num+"/", function(res){
			// console.log(res);
			
			var name = res.name;
			$('#name').html(name);
			// console.log(res.name);
			
			var words = res.words;
			$('#words').html(words);
			// console.log(res.words);
			
			var titles = "";
			titles += "<ul>";
			for(var x = 0; x < res.titles.length; x++){
				titles += "<li>" + res.titles[x] + "</li>";
			}
			titles += "</ul>";
			$("#titles").html(titles);
			// console.log(res.titles);

		}, "json");
	});
});