function numberFunction() {
    var numberOutput;
    var numbers = document.getElementById("Number_Input").value;
    var numberString = " is a great number!";

    switch (numbers) {
        case "0":
            numberOutput = "0" + numberString;
            break;
        case "1":
            numberOutput = "1" + numberString;
            break;
        case "2":
            numberOutput = "2" + numberString;
            break;
        case "3":
            numberOutput = "3" + numberString;
            break;
        case "4":
            numberOutput = "4" + numberString;
            break;
        case "5":
            numberOutput = "5" + numberString;
            break;
        case "6":
            numberOutput = "6" + numberString;
            break;
        case "7":
            numberOutput = "7" + numberString;
            break;
        case "8":
            numberOutput = "8" + numberString;
            break;
        case "9":
            numberOutput = "9" + numberString;
            break;
        default:
            numberOutput = "Please enter one of the numbers above.";
    }

    document.getElementById("Output").innerHTML = numberOutput;
}

function getByClass() {
    var a = document.getElementsByClassName("Change");

    a[1].innerHTML = "The text has changed";
}

var ctx = document.getElementById("Canvas").getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var my_gradient = ctx.createLinearGradient(0, 0, 300, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "green");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(60, 100, 300, 150);