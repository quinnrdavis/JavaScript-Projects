function coercion() {
    document.getElementById("Coerce").innerHTML = "100" + 30;
}

function NaNs() {
    document.getElementById("NaN").innerHTML = 0 / 0;
    document.getElementById("NaN").innerHTML += "<br>" + isNaN("this is a NaN");
    document.getElementById("NaN").innerHTML += "<br>" + isNaN(12);
}

function infinities() {
    document.getElementById("Infinities").innerHTML = 2e310;
    document.getElementById("Infinities").innerHTML += '<br>' + -3e310;
}

function bools() {
    document.getElementById("Boolean").innerHTML = (15 > 10);
}

console.log(2 + 2);
console.log(1 > 2);
console.log(4 == 4);
console.log(4 == 3);

console.log(6 === 6);
console.log(6 === 'A');
console.log(6 === '6');
console.log(6 === 7);

console.log(7 > 4 && 6 > 3);
console.log(7 > 4 && 3 > 6);

console.log(7 > 4 || 3 > 6);
console.log(4 > 7 || 3 > 6);

console.log(!(4 > 7));
console.log(!(7 > 4));