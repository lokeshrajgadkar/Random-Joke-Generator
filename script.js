const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click", getJoke);

getJoke();

// Dark Mode
const modeBox = document.querySelector('.container');
const modeSet = document.getElementById('mode-set')
const body = document.body
modeBox.addEventListener('click', event => {
    event.preventDefault();
    body.classList.toggle('dark_mode');
    if (modeSet.innerHTML === 'Dark Mode'){
        modeSet.innerHTML = 'Light Mode';
    }
    else{
        modeSet.textContent = 'Dark Mode';
    }
});






