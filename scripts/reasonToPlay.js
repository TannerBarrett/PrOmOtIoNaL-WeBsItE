  let i = 6
function timer(){
  if (i > 0) {
    i--
    console.log(i)
  }
document.getElementById('timer').innerHTML = i
  if (i == 0) {
  redirect()
  }
}

function no(){
  setInterval(timer, 1000)
  document.getElementById('no').onclick = ''
}

function redirect(){
  window.location.href = "../html/run.html";
}

function timer2(){
  if (i > 0) {
    i--
    console.log(i)
  }
document.getElementById('timer').innerHTML = i
  if (i == 0) {
  redirect2()
  }
}

function yes(){
  setInterval(timer2, 1000)
  document.getElementById('yes').onclick = ''
}

function redirect2(){
  window.location.href = "../html/link.html";
}
