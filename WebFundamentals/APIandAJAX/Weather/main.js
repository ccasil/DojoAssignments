$(document).ready(function(){

		$('#submit').click(function(){
			var locate = $('#location').val();

			$.get("https://api.openweathermap.org/data/2.5/weather?q="+locate+"&&appid=44437b14b33f6e3c62e4dbc7e06b2621", function(res){
				// console.log(res.name);
				var temp = Math.round((res.main.temp)*(19/5)-460)/10;
				// console.log(Math.round((res.main.temp)*(19/5)-459.67)/10);
				console.log(res.main.temp);
				// console.log(res);
				// console.log(locate);
				$('#newinfo').html('<div class="name"><h1> '+locate+' </h1><p>Temperature: '+temp+'</div>');
			}, 'json');
			return false;//Stops browser trying to actually submit the form
		})
});