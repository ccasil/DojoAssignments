$(document).ready(function(){

	//Iterate over a jQuery object, executing a function for each matched element. 
	$('form.info').each(function() {
	    $(this).children('input#submit').click(function() {

	        //Create the value vars
	        var fNAME = $(this).siblings('#first_name').val();
	        var lNAME = $(this).siblings('#last_name').val();
	        var eMAIL = $(this).siblings('#email').val();
	        var cONTACT = $(this).siblings('#number').val();
	        
	        //appends new information into table
	        $('#newinfo').append('<tr><td>'+fNAME+'</td><td>'+lNAME+'</td><td>'+eMAIL+'</td><td>'+cONTACT+'</td></tr>');
	        
	        return false;//Stops browser trying to actually submit the form
	    });
	});
});