// Load a joke when the page loads
window.onload = getJoke;

// Fetch and display a new joke
function getJoke() {
  const jokeBox = document.getElementById("joke-box");
  jokeBox.innerText = "Loading... 🤔";

  fetch("/joke")
    .then((res) => res.json())
    .then((data) => {
      jokeBox.innerText = data.joke;
    })
    .catch((err) => {
      console.error("Error fetching joke:", err);
      jokeBox.innerText = "Failed to load joke. 😢";
    });
}

// Attach event to the "Tell me another!" button
document.getElementById("joke-btn").addEventListener("click", getJoke);
