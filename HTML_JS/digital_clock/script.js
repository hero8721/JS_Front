window.addEventListener('load', calc);

function calc(){
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var sec = date.getSeconds();
    var dayName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    var dayNum = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var monNum = ['JAN', 'FAB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 
        'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    sec = sec < 10 ? '0' + sec : sec;
    dayNum = dayNum < 10 ? '0' + dayNum : dayNum;

    document.getElementById('day').innerHTML = dayName[day];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('dayNum').innerHTML = dayNum;
    document.getElementById('month').innerHTML = monNum[month];
    document.getElementById('year').innerHTML = year;

    setTimeout(calc, 200);
}
