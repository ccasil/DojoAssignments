$(document).ready(function(){
	
	    $('#submit').click(function() {

	        //Create the value vars
	        var fname = $('#first_name').val();
	        var lname = $('#last_name').val();
	        var description = $('#description').val();
	        // console.log(fname, lname, description);

	    $(document).on('click', '.contact', function(){
	    	$(this).children().toggle();
	    })

	    // $('#newinfo#descriptor').click(function(){
	    // 	$(this).toggle();
	    // })
	        
	        //appends new information into contact card
	        $('#newinfo').append('<div class="contact"><h1> '+fname+' '+lname+' </h1><p id="des">'+description+'</p></div>');
	        return false;//Stops browser trying to actually submit the form
	    });
});
