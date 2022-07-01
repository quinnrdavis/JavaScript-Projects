function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough" : "You are too young";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactered in " + Erik.Vehicle_Year;
}

function myFunction2() {
    var Quinn = new Vehicle("Ford", "Focus", 2005, "Yellow");
    document.getElementById("New_and_This").innerHTML =
        "Quinn drives a " + Quinn.Vehicle_Color + "-colored " + Quinn.Vehicle_Model +
        " manufactered in " + Quinn.Vehicle_Year;
}

function nesting() {
    function nested() {
        return 10 * 10;
    }

    var x = nested();

    document.getElementById("Nested_Function").innerHTML = x;
}