function validateForm() {
    let fname = document.getElementById("First_Name").value;
    let lname = document.getElementById("Last_Name").value;
    let email = document.getElementById("Email").value;

    if (fname == "" || lname == "" || email == "") {
        alert("Please fill out all fields");
        return false;
    }
}