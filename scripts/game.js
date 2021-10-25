// declare variables
let currentEmojiEl = document.getElementById('current-emoji');
let clickPowerEl = +document.getElementById('click-pwr').innerHTML;
let currentCPS = +document.getElementById('auto-cps').innerHTML;
let clickUpgradeEl = document.getElementById('power-click');
let autoClickerEl = document.getElementById('auto-clicker');
let coinAmount = +document.getElementById('coin-num').innerHTML;
let scoreAmount = +document.getElementById('score-num').innerHTML;
let pwrClickPriceEl = +document.getElementById('pwr-click-price').innerHTML;
let autoClickPriceEl = +document.getElementById('auto-click-price').innerHTML;
let easyMode = document.getElementById('easy-btn');
let normalMode = document.getElementById('normal-btn');
let hardMode = document.getElementById('hard-btn');
let currentDifficulty = document.getElementById('current-difficulty').innerHTML;
let poopEmoji = document.getElementById('poop-emoji');
let happyEmoji = document.getElementById('happy-emoji');
let loveEmoji = document.getElementById('love-emoji');
let heartEyeEmoji = document.getElementById('heart-eye-emoji');
let unicorn = document.getElementById('unicorn');
let sadEmoji = document.getElementById('sad-emoji');
let angryEmoji = document.getElementById('angry-emoji');
let devilEmoji = document.getElementById('devil-emoji');

// add event listeneners
currentEmojiEl.addEventListener('click', clickEmoji);
clickUpgradeEl.addEventListener('click', powerClick);
autoClickerEl.addEventListener('click', autoClicker);
easyMode.addEventListener('click', easyButton);
normalMode.addEventListener('click', normalButton);
hardMode.addEventListener('click', hardButton);

// declare functions
function clickEmoji() {
  if(currentEmojiEl.src == poopEmoji.src || currentEmojiEl.src == happyEmoji.src || currentEmojiEl.src == loveEmoji.src || currentEmojiEl.src == heartEyeEmoji.src || currentEmojiEl.src == unicorn.src){
    coinAmount = coinAmount+clickPowerEl
    document.getElementById('coin-num').innerHTML = coinAmount
    scoreAmount = scoreAmount+clickPowerEl
    document.getElementById('score-num').innerHTML = scoreAmount
  }else if(currentEmojiEl.src == sadEmoji.src){
    coinAmount = coinAmount-clickPowerEl
    document.getElementById('coin-num').innerHTML = coinAmount
  }else if(currentEmojiEl.src == angryEmoji.src){
    coinAmount = coinAmount-clickPowerEl*1.5
    document.getElementById('coin-num').innerHTML = coinAmount
  }else if(currentEmojiEl.src == devilEmoji.src){
    scoreAmount = scoreAmount*.75
    document.getElementById('score-num').innerHTML = scoreAmount
  }


  if(coinAmount < 0){
    coinAmount = 0
    document.getElementById('coin-num').innerHTML = coinAmount
  }
}

function autoClickEmoji() {
  if(currentEmojiEl.src == poopEmoji.src || currentEmojiEl.src == happyEmoji.src || currentEmojiEl.src == loveEmoji.src || currentEmojiEl.src == heartEyeEmoji.src || currentEmojiEl.src == unicorn.src){
    coinAmount = coinAmount+currentCPS
    document.getElementById('coin-num').innerHTML = coinAmount
    scoreAmount = scoreAmount+currentCPS
    document.getElementById('score-num').innerHTML = scoreAmount
  }

  if(coinAmount < 0){
    coinAmount = 0
    document.getElementById('coin-num').innerHTML = coinAmount
  }
}

function powerClick() {
  if(coinAmount >= pwrClickPriceEl){
    clickPowerEl = clickPowerEl*2
    document.getElementById('click-pwr').innerHTML = clickPowerEl
    coinAmount = coinAmount-pwrClickPriceEl
    document.getElementById('coin-num').innerHTML = coinAmount
    pwrClickPriceEl = pwrClickPriceEl*3
    document.getElementById('pwr-click-price').innerHTML = pwrClickPriceEl
  }
}

function easyButton() {
  pwrClickPriceEl = 25
  document.getElementById('pwr-click-price').innerHTML = pwrClickPriceEl
  currentDifficulty = 'Easy'
  document.getElementById('current-difficulty').innerHTML = currentDifficulty
  clickPowerEl = 1
  document.getElementById('click-pwr').innerHTML = clickPowerEl
  coinAmount = 0
  document.getElementById('coin-num').innerHTML = coinAmount
  scoreAmount = 0
  document.getElementById('score-num').innerHTML = scoreAmount
  autoClickPriceEl = 50
  document.getElementById('auto-click-price').innerHTML = autoClickPriceEl
  currentCPS = 0
  document.getElementById('auto-cps').innerHTML = currentCPS
}

function normalButton() {
  pwrClickPriceEl = 50
  document.getElementById('pwr-click-price').innerHTML = pwrClickPriceEl
  currentDifficulty = 'Normal'
  document.getElementById('current-difficulty').innerHTML = currentDifficulty
  clickPowerEl = 1
  document.getElementById('click-pwr').innerHTML = clickPowerEl
  coinAmount = 0
  document.getElementById('coin-num').innerHTML = coinAmount
  scoreAmount = 0
  document.getElementById('score-num').innerHTML = scoreAmount
  autoClickPriceEl = 100
  document.getElementById('auto-click-price').innerHTML = autoClickPriceEl
  currentCPS = 0
  document.getElementById('auto-cps').innerHTML = currentCPS
}

function hardButton(){
  pwrClickPriceEl = 100
  document.getElementById('pwr-click-price').innerHTML = pwrClickPriceEl
  currentDifficulty = 'Hard'
  document.getElementById('current-difficulty').innerHTML = currentDifficulty
  clickPowerEl = 1
  document.getElementById('click-pwr').innerHTML = clickPowerEl
  coinAmount = 0
  document.getElementById('coin-num').innerHTML = coinAmount
  scoreAmount = 0
  document.getElementById('score-num').innerHTML = scoreAmount
  autoClickPriceEl = 150
  document.getElementById('auto-click-price').innerHTML = autoClickPriceEl
  currentCPS = 0
  document.getElementById('auto-cps').innerHTML = currentCPS
}

function autoClickTimer(){
  if(currentEmojiEl.src == poopEmoji.src || currentEmojiEl.src == happyEmoji.src || currentEmojiEl.src == loveEmoji.src || currentEmojiEl.src == heartEyeEmoji.src || currentEmojiEl.src == unicorn.src){
    autoClickEmoji();
  }
}



function autoClicker(){
  if(coinAmount >= autoClickPriceEl){
    coinAmount = coinAmount-autoClickPriceEl
    document.getElementById('coin-num').innerHTML = coinAmount
    autoClickPriceEl = autoClickPriceEl*3
    document.getElementById('auto-click-price').innerHTML = autoClickPriceEl
    currentCPS++
    document.getElementById('auto-cps').innerHTML = currentCPS
  }
  if(currentCPS != 0){
    setInterval(autoClickTimer, 1000)
  }
}


if(scoreAmount < 500){
  setInterval(firstTimer, 2000)
}

function firstTimer(){
  let randNum = Math.random();
  if(scoreAmount < 500){
    if(randNum < 0.65){
      currentEmojiEl.src = '../images/poop-emoji.jpg'
    }else{
      currentEmojiEl.src = '../images/sad-emoji.png'
    }
  }else if(scoreAmount < 1500){
    if(randNum < 0.30){
      currentEmojiEl.src = '../images/poop-emoji.jpg'
    }else if(randNum < 0.6){
      currentEmojiEl.src = '../images/happy emoji.jpg'
    }else{
      currentEmojiEl.src = '../images/sad-emoji.png'
    }
  }else if(scoreAmount < 3000){
    if(randNum < 0.15){
      currentEmojiEl.src = '../images/poop-emoji.jpg'
    }else if(randNum < 0.4){
      currentEmojiEl.src = '../images/happy emoji.jpg'
    }else if(randNum < 0.65){
      currentEmojiEl.src = '../images/love-emoji.webp'
    }else if(randNum < 0.85){
      currentEmojiEl.src = '../images/sad-emoji.png'
    }else{
      currentEmojiEl.src = '../images/angry-emoji.png'
    }
  }else if(scoreAmount < 6000){
    if(randNum < 0.1){
      currentEmojiEl.src = '../images/poop-emoji.jpg'
    }else if(randNum < 0.3){
      currentEmojiEl.src = '../images/happy emoji.jpg'
    }else if(randNum < 0.5){
      currentEmojiEl.src = '../images/love-emoji.webp'
    }else if(randNum < 0.65){
      currentEmojiEl.src = '../images/heart-eye-emoji.png'
    }else if(randNum < 0.85){
      currentEmojiEl.src = '../images/sad-emoji.png'
    }else if(randNum < 0.95){
      currentEmojiEl.src = '../images/angry-emoji.png'
    }else{
      currentEmojiEl.src = '../images/devil-emoji.png'
    }
  }else{
    if(randNum < 0.15){
      currentEmojiEl.src = '../images/poop-emoji.jpg'
    }else if(randNum < 0.25){
      currentEmojiEl.src = '../images/happy emoji.jpg'
    }else if(randNum < 0.45){
    currentEmojiEl.src = '../images/love-emoji.webp'
    }else if(randNum < 0.6){
     currentEmojiEl.src = '../images/heart-eye-emoji.png'
    }else if(randNum < 0.7){
      currentEmojiEl.src = '../images/unicorn.png'
    }else if(randNum < 0.8){
     currentEmojiEl.src = '../images/sad-emoji.png'
    }else if(randNum < 0.9){
      currentEmojiEl.src = '../images/angry-emoji.png'
    }else{
      currentEmojiEl.src = '../images/devil-emoji.png'
    }
  }

}
