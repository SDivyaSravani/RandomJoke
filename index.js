let jokeTextE1 = document.getElementById("jokeText");
let jokeBtnE1 = document.getElementById("jokeBtn");
let spinnerE1 = document.getElementById("spinner")

function randomJoke(){
    spinnerE1.classList.remove("d-none");
    jokeTextE1.classList.add("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerE1.classList.add("d-none");
        jokeTextE1.classList.remove("d-none");
        console.log(jsonData);
        console.log(jsonData.value);
        jokeTextE1.textContent = jsonData.value;
    })
}

jokeBtnE1.addEventListener("click",randomJoke);