var targetNumber = Math.floor((Math.random() * 75) + 15);
console.log(targetNumber);

	 $("#random-number").text(targetNumber);

  var counter = 0;
  var wonGames = 0;
  var lostGames = 0;
  var yellow = Math.floor(Math.random()*3+1);
  var blue = Math.floor(Math.random()*5+3);
  var pink = Math.floor(Math.random()*7+5);
  var green = Math.floor(Math.random()*11+7);


    $('#yellow').on ('click', function(){
    counter = counter + yellow;
    console.log("Yellow= " + yellow);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
          yellow = Math.floor(Math.random()*3+1);
        }
        else if ( counter > targetNumber){
          lostGames++;
          yellow = Math.floor(Math.random()*3+1);
        }   
  }) 

    $('#blue').on ('click', function(){
    counter = counter + blue;
    console.log("Blue= " + blue);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
          blue = Math.floor(Math.random()*5+3);
        }
        else if ( counter > targetNumber){
          lostGames++;
          blue = Math.floor(Math.random()*5+3);
        }   
  }) 

    $('#pink').on ('click', function(){
    counter = counter + pink;
    console.log("Pink= " + pink);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
          pink = Math.floor(Math.random()*7+5);
        }
        else if ( counter > targetNumber){
          lostGames++;
          pink = Math.floor(Math.random()*7+5);
        }   
  }) 

    $('#green').on ('click', function(){
    counter = counter + green;
    console.log("Green= " + green);
    $('#finalScore').text(counter); 
        if (counter === targetNumber){
          wonGames++;
          green = Math.floor(Math.random()*11+7);
        }
        else if ( counter > targetNumber){
          lostGames++;
          green = Math.floor(Math.random()*11+7);
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

  //New game

  $("#newGame").click(startNewGame);

  function startNewGame() {

    targetNumber = Math.floor((Math.random() * 75) + 15);
    counter = "";
    wonGames = "";
    lostGames = "";
    yellow = Math.floor(Math.random()*3+1);
    blue = Math.floor(Math.random()*5+3);
    pink = Math.floor(Math.random()*7+5);
    green = Math.floor(Math.random()*11+7);

  $("#random-number").text(targetNumber);
  $("#wins").text(wonGames);
  $("#finalScore").text(counter);
  $("#loses").text(lostGames);

  }









