// rpg-tollbooth.js
window.onload = start;

function start() {
    setup();
    tollbooth();
}


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
	else if (answer == "Pray for help") {
		meetMrNim();
	}	
	else if (answer == "1" || answer =="2" || answer == "3") {
		playMrNim(answer,0);	
	}
	else if (answer == "Pray for another chance") {
		meetMrNim();	
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

// l1s1
function tollbooth() {
	story("You are wandering along a road on a beautiful spring day, with green meadows and gentle rolling hills.  You don’t have a destination and you have plenty of time.\   \n Suddenly a tollbooth appears in front of you. There is a man in the booth waiting to speak to you.\ \nWhat do you do?");
	data = ["Enter now|l1s6","Sleep on it|l1s2","Tell mom|l1s3"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options,targets);
}

// l1s2
function wildNightmares() {
	story("You have wild nightmares.");
	data = ["Enter now|l1s6","Tell mom|l1s3","Pray for help|l1s4"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

// l1s3
function momCantSeeIt() {
	story("Mom can't see the tollbooth. She sends you to bed.");
	data = ["Enter now|l1s6","Sleep on it|l1s2","Pray for help|l1s4"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

// l1s4
function meetMrNim() {
	story("A devil in a red suit appears.  He says, <br><br> \"I am Mr. Nim. You and I will count to 21.  You will start.  <br><br>You may choose to count 1, 2 or 3 numbers in sequence. <br><br> If you are forced to say 21, you die; if I am forced to say 21, you may enter the Kingdom of Wisdom safely.\" <br><br>How many numbers do you count?");
	data = ["1|l1s5","2|l1s5","3|l1s5"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}

function playMrNim(playerTurn,count) {
	count+=parseInt(playerTurn);
	while (count<21) {
		// Check if player loses, and prevent CPU from taking turn if so
		// Ask for CPU input and say current count, add to count
		cpuTurn=Math.floor(Math.random()*3)+1;
		if (cpuTurn+count>20) cpuTurn=1;
		count+=cpuTurn;
		if (count == 21) {
			alert("You have defeated me.  You may enter the Kingdom of Wisdom Safely.");
			break;
		}
		else { 
			alert("I shall count "+cpuTurn+". The count is now "+count);
		}
		playerTurn = parseInt(prompt("Now, you count how many?"));
		count+=playerTurn;
		if (count>20) {
			alert("You have been defeated.  Prepare to die.")
		}
		else {
			alert("The count is now "+count);
		}
	}
	data = ["Enter|l1s6"];
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options,targets);
}


// l1s6
function enterKingdomOfWisdom(){  
	story("You see mountains and rivers!");
	data = ["[undefined]|l1s5","[undefined]|l1s6","[undefined]|l1s7"]
	options = parseOptions(data);
	targets = parseTargets(data);
	answer = setOptions(options, targets);
}
