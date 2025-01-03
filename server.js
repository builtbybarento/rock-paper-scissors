const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const path = require('path');

app.use(cors())

function flip() {
    const x = Math.random() * 3;  // Generates a random number between 0 and 3
    if (x < 1) return "rock";      // If x is between 0 and 1, return "rock"
    if (x < 2) return "paper";     // If x is between 1 and 2, return "paper"
    return "scissors";             // If x is between 2 and 3, return "scissors"
}

let rockpaperscissors = {
    'enemy-hand': flip()

}

app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    rockpaperscissors['enemy-hand'] = flip();  // Generate a new hand each time
    response.json(rockpaperscissors)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
