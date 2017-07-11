var targetNumber = Math.floor((Math.random() * 75) + 15);
console.log(targetNumber);

	 $("#random-number").text(targetNumber);

  var counter = 0;
  var wonGames = 0;
  var lostGames = 0;
  var yellow = Math.floor(Math.random()*9+4);
  var blue = Math.floor(Math.random()*15+9);
  var pink = Math.floor(Math.random()*4+1);
  var green = Math.floor(Math.random()*11+1);


    $('#yellow').on ('click', function(){
    counter = counter + yellow;
    console.log("Yellow= " + yellow);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
        }
        else if ( counter > targetNumber){
          lostGames++;
        }   
  }) 

    $('#blue').on ('click', function(){
    counter = counter + blue;
    console.log("Blue= " + blue);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
        }
        else if ( counter > targetNumber){
          lostGames++;
        }   
  }) 

    $('#pink').on ('click', function(){
    counter = counter + pink;
    console.log("Pink= " + pink);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
        }
        else if ( counter > targetNumber){
          lostGames++;
        }   
  }) 

    $('#green').on ('click', function(){
    counter = counter + green;
    console.log("Green= " + green);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
        }
        else if ( counter > targetNumber){
          lostGames++;
        }   
  }) 

//Reset//
  $(".img-responsive").on("click", function() {
  	counter;	
    $("#finalScore").text(counter);
    if (counter === targetNumber) {
    	wonGames;
    	$("#wins").text(wonGames);
    	var newNumber = Math.floor((Math.random() * 75) + 15);
    	targetNumber = newNumber;
    	counter = 0;
    	 $("#random-number").text(newNumber);
    	 $("#finalScore").text(counter);
    }
    else if (counter > targetNumber) {
    	lostGames;
    	$("#loses").text(lostGames);
    	var newNumber = Math.floor((Math.random() * 75) + 15);
    	targetNumber = newNumber;
    	counter = 0;
    	 $("#random-number").text(newNumber);
    	 $("#finalScore").text(counter);
    }

});

