// concatenates several strings and displays the result
function concatenation() {
    str1 = "this is a";
    str2 = " concatena";
    str3 = "ted sentence";

    wholeStr = str1.concat(str2, str3);

    document.getElementById("Concatenation").innerHTML = wholeStr;
}

// displays a sliced section of a string
function sliceMethod() {
    var sentence = "This string will get sliced";

    var section = sentence.slice(12, 24);

    document.getElementById("Slice").innerHTML = section;
}

// makes the string content of the element uppercase
function makeUpperCase() {
    var p = document.getElementById("UpperCase");

    p.innerHTML = p.innerHTML.toUpperCase();
}

// searches the string content of the element and displays the position
function searchFunc() {
    var p = document.getElementById("Search");

    p.innerHTML = p.innerHTML.search("search");
}

// change a number to a string
function toStringFunc() {
    var x = 10;

    document.getElementById("ToString").innerHTML = x.toString();
}

// rounds x to 6 digits
function toPrecisionFunc() {
    var x = 1234.56789757327;

    document.getElementById("ToPrecision").innerHTML = x.toPrecision(6);
}

// rounds x to 6 places after the decimal point
function toFixedFunc() {
    var x = 1234.56789757327;

    document.getElementById("ToFixed").innerHTML = x.toFixed(6);
}

// displays the primitive value of the string object
function valueOfFunc() {
    var str = "hello world"

    document.getElementById("ValueOf").innerHTML = str.valueOf();
}