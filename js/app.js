$(document).ready(function(){
	
	//Add item in form; add item to list

	//Use "enter" keystroke to submit item to list
	function addItem() {
		$(xxx).keydown(function (enter) {
			console.log("typed character in list")
			if (enter.keyCode == 13) {
				postItem();
			}
		});
	}

	//Click 'x' and remove item from list
	$(document).on("click", "cross", function(){
		console.log("Marking item as complete");
		$(this).closest('.li').toggleClass("checked");
	}

	//User checks off items; click 'check' and convert item to line-through state
	$(document).on("click", "check", function(){
		console.log("Marking item as complete");
		$(this).closest('.li').toggleClass("checked");
	}


	//Enable draw functionality on post-it note

});




