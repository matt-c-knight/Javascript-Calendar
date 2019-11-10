
$(".nine").attr('data-time', 9);
$(".ten").attr('data-time', 10);
$(".eleven").attr('data-time', 11);
$(".twelve").attr('data-time', 12);
$(".one").attr('data-time', 13);
$(".two").attr('data-time', 14);
$(".three").attr('data-time', 15);
$(".four").attr('data-time', 16);
$(".five").attr('data-time', 17);
nineVal = $(".nine").data("time");
tenVal = $(".ten").data("time");
elevenVal = $(".eleven").data("time");
twelveVal = $(".twelve").data("time");
oneVal = $(".one").data("time");
twoVal = $(".two").data("time");
threeVall = $(".three").data("time");
fourVal = $(".four").data("time");
fiveVal = $(".five").data("time");
var scheduleArray = [];

$('.save9').click(function(event) {
    event.preventDefault()
    schedule = $('.9').val();
 times = {
        time: nineVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save10').click(function(event) {
    event.preventDefault()
    schedule = $('.10').val();
    console.log(schedule);
    times = {
        time: tenVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save11').click(function(event) {
    event.preventDefault()
    schedule = $('.11').val();
    console.log(schedule);
    times = {
        time: elevenVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save12').click(function(event) {
    event.preventDefault()
    schedule = $('.12').val();
    console.log(schedule);
    times = {
        time: twelveVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save1').click(function(event) {
    event.preventDefault()
    schedule = $('.1').val();
    console.log(schedule);
    times = {
        time: oneVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save2').click(function(event) {
    event.preventDefault()
    schedule = $('.2').val();
    console.log(schedule);
    times = {
        time: twoVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save3').click(function(event) {
    event.preventDefault()
    schedule = $('.3').val();
    console.log(schedule);
    times = {
        time: threeVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save4').click(function(event) {
    event.preventDefault()
    schedule = $('.4').val();
    console.log(schedule);
    times = {
        time: fourVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })
$('.save5').click(function(event) {
    event.preventDefault()
    schedule = $('.5').val();
    console.log(schedule);
    times = {
        time: fiveVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })