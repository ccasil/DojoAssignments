$(document).ready(function(){
	alert("Click a Ninja to make him disappear");
	$("img").click(function(){
		$(this).hide();
	})
	$("button").click(function(){
		$("img").show();
	})
});