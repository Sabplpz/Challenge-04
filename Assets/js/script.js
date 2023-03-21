var questions = document.querySelector("#questions");
var options = document.querySelector("#options");
var startButton = document.querySelector("#start-button");


function performQuiz() {

    var count = 0;
    var opt1 = document.createElement("li");
    var opt2 = document.createElement("li");
    var opt3 = document.createElement("li");
    var opt4 = document.createElement("li");
    options.appendChild(opt1);
    options.appendChild(opt2);
    options.appendChild(opt3);
    options.appendChild(opt4);

    var question1 = "Inside which HTML element do we put the JavaScript?";
    // var options1 = {
    //     1: "<javascript>",
    //     2: "<js>",
    //     3: "<scripting>",
    //     4: "<script>"
    // };
    var option1 = "<javascript>";
    var option2 = "<js>";
    var option3 = "<scripting>";
    var option4 = "<script>";

    questions.innerHTML = question1;
    opt1.innerHTML = option1;
    // options1[1].appendChild(opt1);
    opt2.innerHTML = options1[2];
    opt3.innerHTML = options1[3];
    opt4.innerHTML = options1[4];

    if (opt4 == true) {
        count++;
    }

    var question2 = "What's the correct place to insert a JavaScript?";
    var options2 = {
        1: "<body>",
        2: "<main>",
        3: "<head>",
        4: "Anywhere"
    };

    var question3 = "What's the correct syntax to link an external script called 'example.js'?";
    var options3 = {
        1: "<script src = 'example.jx'>",
        2: "<script name = 'example.jx'>",
        3: "<script code = 'example.jx'>",
        4: "<script example.jx>"
    };

    var question4 = "How do you write 'Hello World' in an alert box?";
    var options4 = {
        1: "msg('Hello World');",
        2: "alert('Hello World');",
        3: "msgBox('Hello World');",
        4: "alertBox('Hello World');"
    };

    var question5 = "How do you create a function in JavaScript?";
    var options5 = {
        1: "function = myFunction()",
        2: "function()",
        3: "function:myFunction()",
        4: "all are incorrect."
    };



}

startButton.addEventListener("click", function(event) {
    startButton.style.display = "none";
    performQuiz();
});

