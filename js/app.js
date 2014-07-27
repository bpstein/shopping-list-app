$(document).ready(function() {

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
	$('crossBtn').click(function(){
        $(this).closest('li').remove();
   	});

	//Click "check" to check item off the list 
	$('checkBtn').click(function(){
		$(this).closest('li').css('text-decoration', 'line-through');
	})

	//Add post-it note functionality 
	var $canvas = $("canvas");
	var lastEvent; 
	var mousedown = false;

	$canvas.mousedown(function(e){
		lastEvent = e;
		mousedown = true;
	})
	.mousemove(function(e){
		//Draw lines
		var context = $('canvas')[0].getContext('2d');
	
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
    	var listItem = '<li>' + $('#item').val() + '<button class="checkBtn"></button>' + '<button class="crossBtn"></button>' + '</li>';
    	$('ul').append(listItem);
    }
});






