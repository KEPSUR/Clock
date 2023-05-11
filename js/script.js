/* Часы */

const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    elHour = document.querySelector('.hours'),
    elMinutes = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6

    sec.style = `transform: rotate(${seconds}deg)`
    min.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`

    elHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    elMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

/* Секундомер */

let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem'),

    btn = document.querySelector('.stopwatch__btn'),
    watchSec = document.querySelector('.stopwatch__seconds'),
    watchMin = document.querySelector('.stopwatch__minutes'),
    watchHour = document.querySelector('.stopwatch__hours');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {

        for (let x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove('active')
            link[x].classList.remove('active')
        }

        this.classList.add('active')
        tabs[i].classList.add('active')
    })
}





btn.addEventListener('click', () => {

    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        let i = 0;
        setTimeout(() => stopWatch(i, btn), 100);

    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
    } else {
        watchSec.innerHTML = 0;
        watchMin.innerHTML = 0;
        watchHour.innerHTML = 0;
        btn.innerHTML = 'start'
    }
})

function stopWatch(i, btn) {
    if (btn.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            watchSec.innerHTML = i
            if (watchMin.innerHTML == 59) {
                watchHour.innerHTML = 0;
                watchHour.innerHTML++
            } else {
                watchMin.innerHTML++;
            }
        } else {
            i++;
            watchSec.innerHTML = i;
        }
        setTimeout(() => stopWatch(i, btn), 1000);
    }
}