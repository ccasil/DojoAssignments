$(document).ready(function(){
	$('img').click(function() {
	  // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
	  	$(this).attr('src', $(this).attr('data-alt-src'));
	});
	$('img').click(function() {
		console.log('data-alt-src value is', $(this).attr('data-alt-src'));
		$(this).attr('src', $(this).attr('data-alt-src'));
	});
});

// $('img').click(function(){
// 	var x = $(this).attr('data-alt-src');
// 	var y = $(this).attr('src');
// 	$(this).attr('src', x);
// 	$(this).attr('data-alt-src', y);
// })