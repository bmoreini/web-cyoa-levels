var buttonElement = document.getElementById("button1");

function story(text) {
    var currentStoryElement = document.getElementById("currentStory");
    currentStoryElement.innerHTML = text;
}

function setOptions(options,targets) {
    var dropdown = document.getElementById("choices");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (var i = 0; i < options.length; i++) {
        var option = new Option(options[i]);
        dropdown.options.add(option);
    }
    var dropdown = document.getElementById("targets");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (var i = 0; i < options.length; i++) {
        var option = new Option(targets[i]);
        dropdown.options.add(option);
    }
}

function delayText(text, delay) {
    var currentStoryElement = document.getElementById("currentStory");
    var index = 0;
    story("");
    var callback = function (text) {
        story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
        index += 1;
        if (index >text.length-1){
            clearInterval(timer);
        }
    }
    var timer = setInterval(function () {
        callback(text);
    }, delay);
}


function setup() {
    setOptions(["test 1", "test 2", "test3"],["l1s1","l1s2","l1s3"]);
    var buttonElement = document.getElementById("button1");
    buttonElement.innerHTML = "Select choice and click here.";
    buttonElement.onclick = function () {
        var dropdown = document.getElementById("choices");
        checkAnswers(dropdown.value);
    }
}
