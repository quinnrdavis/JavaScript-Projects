function addition() {
    var sum = 2 + 2;

    document.getElementById("math").innerHTML = '2 + 2 = ' + sum;
}

function subtraction() {
    var difference = 7 - 5;

    document.getElementById("math").innerHTML += '<br> 7 - 5 = ' + difference;
}

function multiplication() {
    var product = 4 * 7;

    document.getElementById("math").innerHTML += '<br> 4 * 7 = ' + product;
}

function equation() {
    var result = 6 * 8 / 4;

    document.getElementById("math").innerHTML += '<br> 6 * 8 / 4 = ' + result;
}

function equation2() {
    var result = 4 + 6 * 8 / 2 - 3;

    document.getElementById("math").innerHTML += '<br> 4 + 6 * 8 / 2 - 3 = ' + result;
}

function remainder() {
    var remainder = 25 % 4;

    document.getElementById("math").innerHTML += '<br> the remainder of 25 / 4 is ' + remainder;
}

function negation() {
    var x = 10;

    document.getElementById("math").innerHTML += '<br> negative ' + x + ' is ' + -x;
}

function incAndDec() {
    var x = 12;

    x++;

    document.getElementById("math").innerHTML += '<br> incremented = ' + x;

    x--;

    document.getElementById("math").innerHTML += '<br> decremented = ' + x;
}

function randomNumber() {
    var rand = Math.random();

    document.getElementById("math").innerHTML += '<br> ' + rand + ' is a random number';
}

function mathObj() {
    var x = Math.sin(30);

    document.getElementById("math").innerHTML += '<br> sin(30) = ' + x;
}