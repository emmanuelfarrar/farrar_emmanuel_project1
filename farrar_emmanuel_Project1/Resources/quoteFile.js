//Emmanuel Farrar
//VFW 1411
//Project 1

//array
var quotes = ["I have the power!", "KAMEHAMEHA!!!!!!", "Autobots Transform!", "I'm Batman", 
"I am Groot", "And I'll form the head"];

//counter for tracking of place in array
var arrayCounter = 0;


//function to alter main window text from clicking next
var nextClick = function (){
	if (arrayCounter <= quotes.length - 2){
	arrayCounter++;	
	}else{
		arrayCounter = 0;
	}
	textLabel.text = quotes[arrayCounter];
};

//function to alter main window text from clicking next
var previousClick = function (){
	if (arrayCounter > 0){
	arrayCounter--;	
	}else{
		arrayCounter = 5;
	}
	textLabel.text = quotes[arrayCounter];	
};

//create event listeners
mysecondView.addEventListener("click", previousClick);
mythirdView.addEventListener("click", nextClick);