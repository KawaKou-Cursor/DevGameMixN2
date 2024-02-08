// ホーム画面のスクリプト
const startGameBtn = document.getElementById('start-game-btn');
const ojisanTrainingBtn = document.getElementById('ojisan-training-btn');

startGameBtn.addEventListener('click', () => {
    window.location.href = 'game.html'; // ゲーム画面に遷移
});

ojisanTrainingBtn.addEventListener('click', () => {
    window.location.href = 'ojisan_training.html'; // おじさん育成画面に遷移
});