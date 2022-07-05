// a basic while loop
function callLoop() {
    var digit = "";
    var x = 1;

    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }

    document.getElementById("Loop").innerHTML = digit;
}

// displays the length of the user submitted string
function getLength() {
    document.getElementById("String_Length").innerHTML =
        document.getElementById("String").value.length;
}

// a basic for loop that displays all elements of an array
function forLoop() {
    var animals = [
        "alligator",
        "bear",
        "crab",
        "dinosaur",
        "elephant"
    ];
    var text = "";

    for (let i = 0; i < animals.length; i++) {
        text += animals[i] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = text;
}

// displays two elements of an array
function arrayFunction() {
    var fruits = [
        "apple",
        "banana",
        "coconut",
        "durian"
    ]

    document.getElementById("Array").innerHTML = fruits[1] + "<br>" + fruits[2];
}

// utilizes the const statement
function constFunction() {
    var p = document.getElementById("Constant");
    const myCar = {
        make: "Ford",
        model: "Focus",
        color: "Yellow"
    };

    p.innerHTML += myCar.color;

    myCar.color = "Red";
    myCar.year = "2005";

    p.innerHTML += "<br>" + myCar.color + "<br>" + myCar.year;
}

// utilizes the let statement
function letFunction() {
    let z = "this string was assigned with the let statement";
    document.getElementById("Let").innerHTML = z;
}

// returns a value to the returnFunction
function returnThis() {
    return "This string was returned by a function"
}

// displays the returned value
function returnFunction() {
    var str = returnThis();

    document.getElementById("Return").innerHTML = str;
}

// utilizes an object method
function objFunction() {
    let car = {
        make: "Ford",
        model: "Focus",
        color: "Yellow",
        year: "2005",
        description: function () {
            return "My car is a " + this.year + this.color
                + this.make + this.model;
        }
    };

    document.getElementById("Car_Object").innerHTML = car.description();
}

// utilizes the break and continue keywords
function breakAndContinueFunction() {
    let p = document.getElementById("Break_and_Continue");
    let text1 = "";
    let text2 = "";

    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        text1 += "<br>" + i;
    }

    p.innerHTML = text1 + "<br> the loop broke on iteration 5";

    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        text2 += "<br>" + i;
    }

    p.innerHTML += "<br>" + text2 + "<br> the next loop continued on iteration 5";
}