function buttonClick() {
    color = "blue";
    paragraph = document.getElementById("paragraph");

    paragraph.style.color = color;
}

function paragraph2Click() {
    var paragraph2 = document.getElementById("paragraph2");
    var sentence = paragraph2.innerHTML;

    sentence += "; this text was added by concatenation!";

    paragraph2.innerHTML = sentence;
}