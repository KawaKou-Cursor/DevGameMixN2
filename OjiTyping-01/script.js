const ojisanImages = [
  'images/level1.jpg',
  'images/level2.jpg',
  'images/level3.jpg',
  // Add more images for different levels
];

let score = 0;
let level = 1;

const input = document.getElementById('input');
const scoreDisplay = document.getElementById('score');
const ojisanImage = document.getElementById('ojisan-image');

// Generate random ojisan image
function generateOjisanImage() {
  ojisanImage.src = ojisanImages[level - 1];
}

// Update score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Check if input matches ojisan syntax
function checkInput() {
  const inputText = input.value.trim().toLowerCase();
  const ojisanSyntax = 'おじさん';
  
  if (inputText === ojisanSyntax) {
      score++;
      updateScoreDisplay();
      level = Math.min(Math.ceil(score / 10) + 1, ojisanImages.length);
      generateOjisanImage();
      input.value = '';
  }
}

// Event listener for input
input.addEventListener('input', checkInput);

// Initialize game
updateScoreDisplay();
generateOjisanImage();
