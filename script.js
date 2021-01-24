var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn).innerHTML = "Delete";
	li.setAttribute("id","listnode");
	btn.setAttribute("id","delete");
	ul.appendChild(li);
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// ui tag control the event 
function uiClick(event){
	console.log(e);
	if(event.target.tagName === "LI"){
		toggleList(event);
	}
	if(event.target.id === "delete"){
		deleteListElement();
	}
}
function toggleList(event){
	event.target.classList.toggle("doneColor");
}
function deleteListElement() {
	var list = document.getElementById("listnode");
	list.remove(list[0]);
}

ul.addEventListener("click", uiClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
