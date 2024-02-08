let points = 0;
let totalPoints = 0;
let currentOjisanSyntax = '';
let intervalId;

const ojisanSyntaxElement = document.getElementById('ojisan-syntax');
const inputElement = document.getElementById('input');
const pointsElement = document.getElementById('points');
const totalPointsElement = document.getElementById('total-points');

function loadOjisanSyntax() {
    // Load ojisan syntax from file or array
    // Here, assuming ojisan_syntax.txt contains ojisan syntax separated by newline
    fetch('ojisan_syntax.txt')
        .then(response => response.text())
        .then(data => {
            const ojisanSyntaxArray = data.trim().split('\n');
            // Logic to select ojisan syntax based on level and length
            currentOjisanSyntax = ojisanSyntaxArray[Math.floor(Math.random() * ojisanSyntaxArray.length)];
            ojisanSyntaxElement.textContent = currentOjisanSyntax;
        })
        .catch(error => console.error('Error loading ojisan syntax:', error));
}

function startGame() {
    loadOjisanSyntax();
    inputElement.value = '';
    inputElement.focus();
    intervalId = setTimeout(nextQuestion, 5000); // Move to next question after 5 seconds
}

function nextQuestion() {
    clearTimeout(intervalId);
    startGame();
}

function checkInput() {
    const inputText = inputElement.value.trim().toLowerCase();
    if (inputText === currentOjisanSyntax) {
        const levelPoints = currentOjisanSyntax.length; // Points based on length of ojisan syntax
        points += levelPoints;
        totalPoints += levelPoints;
        pointsElement.textContent = `Points: ${points}`;
        totalPointsElement.textContent = `Total Points: ${totalPoints}`;
        nextQuestion();
    }
}

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkInput();
    }
});

startGame();
