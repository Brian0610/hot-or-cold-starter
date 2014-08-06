
$(document).ready(function(){


	$(".new").click(function(){
		location.reload(); 
	})
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	

  	$("#guessButton").click(function(event){
  		event.preventDefault(); 
  		feedback();
  		$("#count").text(counter); 
  		var guessTrack = $("#userGuess").val();	
  		$("ul#guessList").append("<li>" + guessTrack + "</li>"); 		
  	}); 

});

var compNumber = randomNumber(); 

function randomNumber(){
	var random = +Math.floor((Math.random() * 100)); 
	return random; 
}

function feedback() {
	var myGuess = +$("#userGuess").val(); 
	
	if(isNaN(myGuess * myGuess)){
		$("#feedback").text("Please Enter a Number");  		
	}

	else if (myGuess > 100 || myGuess <= 0){
		$("#feedback").text("Make a guess between 0 and 100!"); 
	}

	else if(myGuess > compNumber + 50 || myGuess < compNumber - 50){
		$("#feedback").text("Ice Cold!"); 
	}

	else if(myGuess > compNumber + 40 && myGuess <= compNumber + 50 ||
			myGuess < compNumber - 40 && myGuess >= compNumber - 50){
		$("#feedback").text("Cold!"); 
	}

	else if(myGuess > compNumber + 30 && myGuess <= compNumber + 40 ||
			myGuess < compNumber - 30 && myGuess >= compNumber - 40){
		$("#feedback").text("Hmm...Lukewarm"); 
	}

	else if(myGuess > compNumber + 20 && myGuess <= compNumber + 30 ||
			myGuess < compNumber - 20 && myGuess >= compNumber - 30){
		$("#feedback").text("Warm"); 
	}

	else if(myGuess > compNumber + 10 && myGuess <= compNumber + 20 ||
			myGuess < compNumber - 10 && myGuess >= compNumber - 20){
		$("#feedback").text("Hot"); 
	}

	else if(myGuess > compNumber + 0 && myGuess <= compNumber + 10 ||
			myGuess < compNumber - 0 && myGuess >= compNumber - 10){
		$("#feedback").text("VERY Hot"); 
	}

	else if(myGuess === compNumber){
		$("#feedback").text("YOU GUESSED IT! GOOD WORK!"); 
	}
}

var guessNumber = 1; 

function counter(){
	return guessNumber++; 
}


