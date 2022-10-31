//TO DO
//add current date and time to the header
const clock = document.getElementById('clock');
const date = document.getElementById('date');

const taskContent = document.getElementById('task');
const form = document.querySelector('#new-task-form');
const input = document.querySelectorAll('#input');
const taskList = document.querySelector('.task-list');
const button = document.querySelector('button');
const userText = document.querySelector('.text');

//calling moment() on its own will get the current date and time
var now = moment();
function updateTime() {
    
    //text and .format will update it on the web page
    $("#clock").text(now.format("LT"));
    $("#date").text(now.format("dddd, MMMM Do YYYY"));

    
}
//call the functions here, and they will load when the page loads
//setInterval(updateTime, 1000);
setInterval(updateTime, 1000);
updateTime();

console.log(updateTime);




// ==================================================================
 


//adding specific time events

//9 AM
var time0 = document.getElementById('time0');
if (now > 9) {
    time0.classList.add('past');
}
if (now === 9) {
    time0.classList.add('present');
}
if (now < 9) {
    time0.classList.add('future');
}



//10 AM
var time1 = document.getElementById('time1');
if (now > 10) {
    time1.classList.add('past');
}
if (now === 10) {
    time1.classList.add('present');
}
if (now < 10) {
    time1.classList.add('future');
}


//11 AM
var time2 = document.getElementById('time2');
if (now > 11) {
    time2.classList.add('past');
}
if (now === 11) {
    time2.classList.add('present');
}
if (now < 11) {
    time2.classList.add('future');
}


//12 PM
var time3 = document.getElementById('time3');
if (now > 12) {
    time3.classList.add('past');
}
if (now === 12) {
    time3.classList.add('present');
}
if (now < 12) {
    time3.classList.add('future');
}


//1 PM
var time4 = document.getElementById('time4');
if (now > 1) {
    time4.classList.add('past');
}
if (now === 1) {
    time4.classList.add('present');
}
if (now < 1) {
    time4.classList.add('future');
}


//2 PM
var time5 = document.getElementById('time5');
if (now > 2) {
    time5.classList.add('past');
}
if (now === 3) {
    time5.classList.add('present');
}
if (now < 2) {
    time5.classList.add('future');
}


//3 PM
var time6 = document.getElementById('time6');
if (now > 3) {
    time6.classList.add('past');
}
if (now === 3) {
    time6.classList.add('present');
}
if (now < 3) {
    time6.classList.add('future');
}


//4 PM
var time7 = document.getElementById('time7');
if (now > 4) {
    time7.classList.add('past');
}
if (now === 4) {
    time7.classList.add('present');
}
if (now < 4) {
    time7.classList.add('future');
}


//5 PM
var time8 = document.getElementById('time8');
if (now > 5) {
    time8.classList.add('past');
}
if (now === 5) {
    time8.classList.add('present');
}
if (now < 5){
    time8.classList.add('future');
}





// ==================================================================
 





//the save function that the onclick event is calling
//preventDefault() stops the submit buttons from automatically reloading the page
function saveContent(i) {
    form.addEventListener('submit', (Event) => {
        Event.preventDefault();
    })
    

//then I defined the input variable's value as whatever the user types,
//by adding it to the index, or i
//setting the text input('input'), plus the index AS the user input (or submitting the form)
   var input = document.getElementById('input' + i).value;
   localStorage.setItem('input' + i, input); 
}



//the load function that the body tag is calling
//this makes it so that whenever the page is refreshed,
//the most recent changes to each input field remain
//using i < 9 because I'm logging up to 9 hours
//the value will equal what we pull from local storage
function onLoad() {
    for(i = 0; i < 9; i++) {
        document.getElementById('input' + i).value = localStorage.getItem('input' + i);
       }
    
}


    