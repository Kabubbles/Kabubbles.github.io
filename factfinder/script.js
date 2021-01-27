var display = document.querySelector("#output");
var form = document.querySelector("form");

form.fact1.addEventListener("click", factOne);
form.fact2.addEventListener("click", factTwo);
form.fact3.addEventListener("click", factThree);
form.fact4.addEventListener("click", factFour);
form.fact5.addEventListener("click", factFive);

function factOne(){
	display.innerHTML = "<h1>Only two mammals like spicy food, humans and tree shrews</h1> <img src = 'images/treeshrew.jpg' alt ='Image of a cute Tree Shrew.'>";
}

function factTwo(){
	display.innerHTML = "<h1>In 1998 a dozen bodies were found in Benjamin Franklin's basement while they were renovating.</h1>";
}

function factThree(){
	display.innerHTML = "<h1> The Comic Sans font originates from the Watchmen comic series.";
}

function factFour(){
	display.innerHTML = "<h1> The Unicorn is the national animal of Scotland, despite being just a myth.</h1>"
}

function factFive(){
	display.innerHTML = "<h1>Some planets rain diamonds!</h1>"
}