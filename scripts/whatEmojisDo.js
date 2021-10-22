// global variables
let currentEmojiEl = document.getElementById('current-emoji')
let infoEl = document.getElementById('info')
// declare functions
function poop() {
  currentEmojiEl.src = '../images/poop-emoji.jpg'
  infoEl.innerHTML = 'Both your score and your gold amount increase by your current clicking power'
}

function angry() {
  currentEmojiEl.src = '../images/angry-emoji.png'
  infoEl.innerHTML = 'Your gold amount decreases by 1.5* your current clicking power. Ex 1 --> 1.5, 4 --> 6, 10 --> 15.'
}

function sad() {
  currentEmojiEl.src = '../images/sad-emoji.png'
  infoEl.innerHTML = 'Your gold amount decreases by your current clicking power'
}

function devil() {
  currentEmojiEl.src = '../images/devil-emoji.png'
  infoEl.innerHTML = 'Your score decreases by 0.75* your total score. Ex: 1 --> .75, 100 --> 75, 1000 --> 750.'
}

function love() {
  currentEmojiEl.src = '../images/love-emoji.webp'
  infoEl.innerHTML = 'Both your score and your gold amount increase by your current clicking power'
}

function heartEye() {
  currentEmojiEl.src = '../images/heart-eye-emoji.png'
  infoEl.innerHTML = 'Both your score and your gold amount increase by your current clicking power'
}

function unicorn() {
  currentEmojiEl.src = '../images/unicorn.png'
  infoEl.innerHTML = 'Both your score and your gold amount increase by your current clicking power'
}

function happy() {
  currentEmojiEl.src = '../images/happy emoji.jpg'
  infoEl.innerHTML = 'Both your score and your gold amount increase by your current clicking power'
}
