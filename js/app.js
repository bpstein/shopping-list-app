$(document).ready(function() {

	// Add item in form, then click "submit" to add item to list
	$('#instructions').on('click', '.button', function() {	
		$("#list").append("text")
    });

    // $('#submit').on('click','input[name="add"]', function() {
    //   addItem();
    // });

	//User "enter" keystroke to submit item to list
	$('body').on('keydown','#item', function(event) {
      if( event.which == 13) {
		 $("#list").append("text");
      }
  	});

	//Click "x" to remove item from list
	// $('body').on('click','.cross',function() {
 //        $(this).closest("li").remove();
 //   	});

	//Click "check" to convert item to line-through state
	// $('#list-container').on('click', '.check', function() {
 //        $(this).closest("li").css("text-decoration", "line-through");
 //    });

	// function addItem(){
 //        $('ul').append('<li>'+$('#item').val()+'<button class="check"></button><button class="cross"></button></li>');
 //    	}

	//Add post-it note functionality 
	
	// $('#instruction').on('click', 'button', function (){
	// 		alert("test");
	// });

	// function addItem(){
	// 	$('ul').append('#item').val("");
	// }

});








