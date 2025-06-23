let jokes = [];

async function loadJokes() {
  try {
    const response = await fetch('/joke');  // ✅ now hitting backend
    const data = await response.json();
    document.getElementById('joke-box').textContent = data.joke;
  } catch (error) {
    document.getElementById('joke-box').textContent = "Failed to load joke.";
    console.error(error);
  }
}


function showJoke() {
  if (jokes.length === 0) return;
  const index = Math.floor(Math.random() * jokes.length);
  document.getElementById('joke-box').textContent = jokes[index].text;
}

document.getElementById('joke-btn').addEventListener('click', showJoke);

window.onload = loadJokes;
