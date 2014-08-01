$(document).ready(function() {

	//cached variables (drawing app)
	var $canvas = $("canvas");
	var lastEvent; 
	var mousedown = false;
	var context = $('canvas')[0].getContext('2d');

	// Add item in form, then click "submit" to add item to list
	$('#instructions').on('click', '.button', function() {	
		addItem();
    });

	//User "enter" keystroke to submit item to list
	$('body').on('keydown','#item', function(event) {
      if( event.which == 13) {
		 addItem();
      }
  	});

	//Click "x" to remove item from list
	$('#list').on('click','.crossBtn', function(){
        $(this).closest('li').remove();
   	});

	//Click "check" to check item off the list 
	$('#list').on('click', '.checkBtn', function(){
		$(this).closest('li').css('text-decoration', 'line-through')
	})

	//Add post-it note functionality 
	$canvas.mousedown(function(e){
		lastEvent = e;
		mousedown = true;
	})
	.mousemove(function(e){
		//Draw lines
		if(mousedown) {
			context.beginPath();
			context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = "red";
			context.stroke();
			lastEvent = e;
		}
	})

	.mouseup(function(){
		mousedown = false;
	})

    function addItem(){	
    	var listItem = '<li>' + $('#item').val() + '<img class="checkBtn" src="images/check.png">' + '<img class="crossBtn" src="images/cross.png">' + '</li>';
    	$('#list').append(listItem);
    }
});





