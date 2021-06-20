window.setInterval(timer, 1000)
function timer() {
    let sec = document.getElementById('seconds')
    let min = document.getElementById('minutes')
    let hours = document.getElementById('hours')
    let days = document.getElementById('days')
    sec.innerHTML = sec.innerHTML - 1
    if (sec.innerHTML == 0) {
        min.innerHTML = min.innerHTML - 1
        sec.innerHTML = 60
    }
    if (min.innerHTML == -1) {
        hours.innerHTML = hours.innerHTML - 1
        min.innerHTML = 59
    }
    if (hours.innerHTML == -1) {
        days.innerHTML = days.innerHTML - 1
        hours.innerHTML = 23
    }
    if(days.innerHTML==0&&hours.innerHTML==0&&min.innerHTML==0&&sec.innerHTML==1){
        window.clearInterval(1)
    }
}
