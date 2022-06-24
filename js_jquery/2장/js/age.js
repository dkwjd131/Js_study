function calc() {
    var currentYear = 2022;
    var birthYear = prompt("Type your birth year","YYYY");
    var age = currentYear - birthYear + 1;
    document.querySelector('#result').innerHTML = "Your age is " + age
}