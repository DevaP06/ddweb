require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('public'));
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What did the fish say when it hit the wall? Dam!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I would tell you a joke about construction, but I'm still working on it.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call fake spaghetti? An impasta!",
    "How does a penguin build its house? Igloos it together.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "How do you organize a space party? You planet.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What did one wall say to the other wall? I'll meet you at the corner.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the math book look sad? Because it had too many problems.",
    "I asked my dog what's two minus two. He said nothing.",
    "Parallel lines have so much in common… it's a shame they'll never meet.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "Want to hear a joke about paper? Never mind, it's tearable."
  ];
  

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome!</h1>')

// })

app.get('/instagram_dhruv', (req, res) => {
    res.redirect('https://www.instagram.com/_dhruvpekhale_/')
})

app.get('/instagram_devashish', (req, res) => {
    res.redirect('https://www.instagram.com/_devapun?igsh=eHhzdnNkM211bm8y')
})

app.get('/linkedin_dhruv', (req, res) => {
    res.redirect('https://www.linkedin.com/in/dhruv-pekhale-a8061431b')
})

app.get('/linkedin_devashish',(req, res) => {
    res.redirect('http://www.linkedin.com/in/devashish-pundkar-808b29324')
})

app.get('/joke', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    res.json({ joke: joke });
  });

app.listen(process.env.PORT, () => {
    console.log(`joke server listening on port ${process.env.PORT}`)
})