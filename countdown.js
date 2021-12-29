// sardor
window.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body'),
        btnNightMode = document.querySelector('.nightMode'),
        onclick = document.querySelector('.onclick');

    btnNightMode.addEventListener('click', () => {
        body.classList.toggle('dark'); //qora tema
        if (body.classList == 'dark') { // tema oqra bolganda
            onclick.classList.add('light') // knopka light rangda boladi
        }
    })

    btnNightMode.addEventListener('click', () => { //yuqoridagini teskarisi boladi 
        body.classList.toggle('light');
        if (body.classList == 'dark') {
            onclick.classList.remove('dark')
        }
    });

    btnNightMode.addEventListener('click', () => {
        body.classList.remove('light')
        if (body.classList == 'dark') {
            onclick.classList.remove('dark')
        }
    });

    var count = new Date("jan 1, 2022 00:00:00").getTime(); //2022 qanca qolganini hisoblaydi
    var x = setInterval(function() {
        var now = new Date().getTime();
        var d = count - now;

        var days = Math.floor(d / (1000 * 60 * 60 * 24));
        var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((d % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }, 1000)

})

// night mode