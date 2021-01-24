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

function uiClick(e){
	console.log(e);
	if(e.target.tagName === "LI"){
		console.log("strike is work");
		e.target.classList.toggle("doneColor");
	}
	if(e.target.id === "delete"){
		console.log("delete is work");
		var list = document.getElementById("listnode");
		list.remove(list[0]);
	}
}
function deleteListAfterClick() {
	deleteListElement();
}
function deleteListElement() {
	console.log("delete is work");
	var list = document.getElementById("list1");
	list.removeChild(list.childNodes[0]);
}
ul.addEventListener("click", uiClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
