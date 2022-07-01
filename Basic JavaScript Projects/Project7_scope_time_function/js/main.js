// global variable
var x = 10;

// function with local variable and intentional error
function myFunc() {
    var y = 'apple';

    // throws error because time is a local variable in a different function
    console.log(time);
}

// get and display current time in hours and tell if it is before noon
function showTime() {
    var time = new Date().getHours();

    document.getElementById("Time").innerHTML =
        "The time is " + time + " o' clock";

    if (time < 12) {
        document.getElementById("Time").innerHTML +=
            "<br> it is before noon";
    }
}

// branching function that depends on the number submitted by the user being > 5 or not
// and displays if it is
function myFunc2() {
    var number = document.getElementById("Number").value;

    console.log(number);

    if (number > 5) {
        document.getElementById("Answer").innerHTML = "The number is greater than 5";
    } else {
        document.getElementById("Answer").innerHTML = "The number is not greater than 5";
    }
}

// branching function with else if statements, get time and determine
// and display whether it is morning, afternoon, or evening
function timeFunction() {
    var time = new Date().getHours();
    var reply;

    if (time < 12 == time > 0) {
        reply = "It is morning";
    } else if (time >= 12 == time < 18) {
        reply = "It is afternoon";
    } else {
        reply = "It is evening";
    }

    document.getElementById("Time_of_day").innerHTML = reply;
}