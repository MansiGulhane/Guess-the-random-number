document.getElementById('startGame').addEventListener('click', function() {
    const max = prompt("Enter the maximum number");
    const random = Math.floor(Math.random() * max) + 1;

    document.getElementById('gameArea').classList.remove('hidden');
    document.getElementById('feedback').textContent = '';
    document.getElementById('finalMessage').classList.add('hidden');
    
    document.getElementById('submitGuess').addEventListener('click', function() {
        let guess = document.getElementById('guessInput').value;

        if (guess == "quit") {
            document.getElementById('feedback').textContent = "User Quit The Game";
            document.getElementById('gameArea').classList.add('hidden');
        } else if (guess == random) {
            document.getElementById('feedback').textContent = "";
            document.getElementById('gameArea').classList.add('hidden');
            document.getElementById('finalMessage').innerHTML = "You Are Right! Congratulations!! Random number was " + random + " &#128521;";
            document.getElementById('finalMessage').classList.remove('hidden');
        } else if (guess < random) {
            document.getElementById('feedback').textContent = "HINT: Your guess was too SMALL.";
        } else {
            document.getElementById('feedback').textContent = "HINT: Your guess was too LARGE.";
        }
    });
});
