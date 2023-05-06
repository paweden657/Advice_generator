let btn = document.getElementById("btn");
let advice = document.getElementById("advice");
let adviceNum = document.getElementById("advice-number");

const url = "https://api.adviceslip.com/advice"

btn.addEventListener("click", () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        adviceNum.innerText = "Advice #" + data.slip.id;
        advice.innerText = "\"" + data.slip.advice + "\"";
    })
    .catch(error => {
        console.error("Error ocurred", error);
    });
});