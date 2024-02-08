// おじさん育成画面のスクリプト
const ojisanImage = document.getElementById('ojisan-image');
const currentLevel = document.getElementById('current-level');
const currentExp = document.getElementById('current-exp');
const requiredExp = document.getElementById('required-exp');
const totalExpPoints = document.getElementById('total-exp-points');
const itemStore = document.getElementById('item-store');
let points = 0;
let exp = 0;
let totalExp = 0;

// アイテムを購入する関数
function buyItem(expPoints) {
    if (points >= expPoints) {
        exp += expPoints;
        totalExp += expPoints;
        updateOjisanInfo();
        points -= expPoints;
        updatePointsDisplay();
    } else {
        alert('ポイントが足りません！');
    }
}

// おじさん情報を更新する関数
function updateOjisanInfo() {
    currentExp.textContent = exp;
    totalExpPoints.textContent = totalExp;
    if (exp >= 10 && exp < 20) {
        currentLevel.textContent = '2';
        ojisanImage.src = 'images/level2.jpg';
        requiredExp.textContent = '20';
    } else if (exp >= 20 && exp < 40) {
        currentLevel.textContent = '3';
        ojisanImage.src = 'images/level3.jpg';
        requiredExp.textContent = '40';
    } else if (exp >= 40 && exp < 100) {
        currentLevel.textContent = '4';
        ojisanImage.src = 'images/level4.jpg';
        requiredExp.textContent = '100';
    } else if (exp >= 100) {
        currentLevel.textContent = '5';
        ojisanImage.src = 'images/level5.jpg';
        requiredExp.textContent = '---';
    }
}

// ポイント表示を更新する関数
function updatePointsDisplay() {
    pointsDisplay.textContent = points;
}

// アイテムストアを生成する関数
function createItemStore() {
    const items = [
        { exp: 1, price: 1 },
        { exp: 3, price: 2 },
        { exp: 5, price: 3 },
        // 他のアイテムも同様に作成
    ];

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.textContent = `アイテム${item.exp} (${item.price}ポイント)`;
        itemElement.dataset.exp = item.exp;
        itemElement.addEventListener('click', () => {
            buyItem(item.exp);
        });
        itemStore.appendChild(itemElement);
    });
}

// ページロード時の処理
window.addEventListener('load', () => {
    points = 100; // 初期ポイント
    updatePointsDisplay();
    createItemStore();
});
