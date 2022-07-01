var myDictionary = {
    A: 'apple',
    B: 'banana',
    C: 'coconut',
    D: 'durian'
}

delete myDictionary.B;

function displayDictionary() {
    document.getElementById("Dictionary").innerHTML = myDictionary.B;
}