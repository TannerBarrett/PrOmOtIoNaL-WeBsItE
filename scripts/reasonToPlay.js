let i = 10
function timer(){
  if (i <= 0) {
    i--
    console.log(i)

  }
  setInterval(timer, 1000)
}
