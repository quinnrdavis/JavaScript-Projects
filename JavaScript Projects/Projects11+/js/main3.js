function displayLanguage(lang) {
    var spokenLang = lang.getAttribute("data-spoken_language");

    alert(spokenLang + " is the language spoken in " + lang.innerHTML);
}