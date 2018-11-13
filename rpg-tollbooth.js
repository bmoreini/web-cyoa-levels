// rpg-tollbooth.js


// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var spin = 0;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Enter now") {
		enterKingdomOfWisdom();
	} 
	else if (answer == "Sleep on it") {
		wildNightmares();
	}
	else if (answer == "Tell mom") {
		momCantSeeIt();
	}
}

function enterKingdomOfWisdom() { 
  story("You are wandering along a road on a beautiful spring day, with green meadows and gentle rolling hills.  You don’t have a destination and you have plenty of time.\   \n Suddenly a tollbooth appears in front of you. There is a man in the booth waiting to speak to you.\ \nWhat do you do?");
	choices = ["Enter Now", "Sleep on it", "Tell Mom"];
	answer = setOptions(choices);
}
function wildNightmares() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function momCantSeeIt() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function tollbooth(){  // FIRST SCENE - WELCOMES PLAYER
	var name = prompt("what is your name?");
	story("You see a tollbooth appear from nowhere. \ \n On the window is a piece of paper\ \n that says \"Enter,  " + name + "\.\" \n What do you do?");
	choices = ["Enter now", "Sleep on it", "Tell mom"];
	answer = setOptions(choices);
}
