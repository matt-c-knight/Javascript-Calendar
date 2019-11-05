var schedule;

// $('.save').click(function() {
//     console.log(schedule);

// })

// $('.event').click(function() {
//     schedule = $(this).val();
//     return schedule
// })

$('.save').click(function(event) {
    event.preventDefault()
    schedule = $(this).val();
    $('.schedule').attr('value', schedule);
    console.log(schedule)
    

})



let date = moment();
// console.log(date)
let currentTime = date.format("HH")
currentTime = parseInt(currentTime)
console.log(currentTime)






$("h3").text(date.format("dddd, MMMM DD"));


// var currentTime = moment("2013-03-24")
// var date = moment();



$(".nine").attr('data-time', 9)
$(".ten").attr('data-time', 10)
$(".eleven").attr('data-time', 11)
$(".twelve").attr('data-time', 12)
$(".one").attr('data-time', 13)
$(".two").attr('data-time', 14)
$(".three").attr('data-time', 15)
$(".four").attr('data-time', 16)
$(".five").attr('data-time', 17)

console.log(typeof currentTime)

const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");
const eleven = document.querySelector(".eleven");
const twelve = document.querySelector(".twelve");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
console.log(nine.dataset.time)



if (nine.dataset.time < currentTime) {
    $(".9").css("background-color", "grey");
}else if(nine.dataset.time == currentTime) {
    $(".9").css("background-color", "red");
} else {
    $(".9").css("background-color", "green");
}

if (ten.dataset.time < currentTime) {
    $(".10").css("background-color", "grey");
}else if(nine.dataset.time == currentTime) {
    $(".10").css("background-color", "red");
} else {
    $(".10").css("background-color", "green");
}

if (two.dataset.time < currentTime) {
    $(".2").css("background-color", "grey");
}else if(nine.dataset.time == currentTime) {
    $(".2").css("background-color", "red");
} else {
    $(".2").css("background-color", "green");
}







