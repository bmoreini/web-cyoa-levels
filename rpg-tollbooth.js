// rpg-tollbooth.js


// core variables
var messages = []; // for a sequence of messages
var answer = null;
var options = [];
var targets = [];
var data = [];
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

function parseOptions(data){
	var options = [];
	for (i=0;i<data.length;i++){
		options[i]=data[i].split("|")[0];
	}
	return options;
}

function parseTargets(data){
	var targets = [];
	for (i=0;i<data.length;i++){
		targets[i]=data[i].split("|")[1];
	}
	return targets;
}

function tollbooth() {
	story("You are wandering along a road on a beautiful spring day, with green meadows and gentle rolling hills.  You don’t have a destination and you have plenty of time.\   \n Suddenly a tollbooth appears in front of you. There is a man in the booth waiting to speak to you.\ \nWhat do you do?");
	data = ["Enter now|l1s2","Sleep on it|l1s3","Tell mom|l1s4"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options,targets);
}

function wildNightmares() {
	story("You have wild nightmares.");
	data = ["Enter now|l1s2","Tell mom|l1s4","[undefined]|l0s0"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

function momCantSeeIt() {
	story("Mom can't see the tollbooth. She sends you to bed.");
	data = ["Enter now|l1s2","Sleep on it|l1s5","[undefined]|l0s0"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

function enterKingdomOfWisdom(){  // FIRST SCENE - WELCOMES PLAYER
	story("You see mountains and rivers!");
	data = ["[undefined]|l1s5","[undefined]|l1s6","[undefined]|l1s7"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}
