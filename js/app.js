$(document).ready(function() {

	//Add item in form, then click "submit" to add item to list
	$('#item').click(function() {	
		  $('#item').val("");
    });

    $('#instructions-container').on('click','input[name="add"]', function() {
      preventDefault();
      addItem();
    });

	//User "enter" keystroke to submit item to list
	$('body').on('keydown','#item', function(event) {
      if( event.which == 13) {
        preventDefault();
				addItem();
      }
  });

	//Click "x" to remove item from list
	 	$('body').on('click','.delete',function() {
        $(this).closest("li").remove();
   	});

	//Click "check" to convert item to line-through state
		$('body').on('click', '.complete', function() {
        $(this).closest("li").css("text-decoration", "line-through");
    });

			function addItem(){
        $('ul').append('<li>'+$('#itemName').val()+'<button class="delete">Delete</button><button class="complete">Complete</button></li>');
        $('#itemName').val("");
    	}

	//Add post-it note functionality to 
	

});








//Add item in form; click "submit" to add item to list
	$(document).on("click", "#button" function(){

	})





	$("#button").submit(function(event) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});

	//Use "enter" keystroke to submit item to list
	// function addItem() {
	// 	$(xxx).keydown(function (enter) {
	// 		console.log("typed character in list")
	// 		if (enter.keyCode == 13) {
	// 			postItem();
	// 		}
	// 	});
	// }

	//Click 'x' and remove item from list
	$(document).on("click", "cross", function(){
		console.log("Marking item as complete");
		$(this).closest('.li').toggleClass("checked");
	}

	//User checks off items; click 'check' and convert item to line-through state
	// $(document).on("click", "check", function(){
	// 	console.log("Marking item as complete");
	// 	$(this).closest('.li').toggleClass("checked");
	// }


	//Enable draw functionality on post-it note