var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var h1 = document.querySelector("h1");

function inputLength() {
	return input.value.length;
}

addButtons();

function addButtons(){
	for(var i=0; i < li.length; i++){
		if(li[i].children.length > 0){
			console.log("Already has a Button");
		} else{
			addDoneButtons(i);
			addDeleteButton(i)
		}
	}
}

function addDoneButtons(i){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done!"));
	li[i].appendChild(button);
	button.onclick=buttonClicked;
	console.log("Done Button Added");
}

function addDeleteButton(i){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li[i].appendChild(deleteButton);
	deleteButton.onclick=deleteClicked;
	console.log("Delete Button Added");
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	addButtons();
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

function deleteClicked(e){
	var target = e.target;
	target.parentNode.remove();
}

function buttonClicked(e){
	var target =e.target;
	target.parentNode.classList.toggle("done");
}

// Adds Strikethrough when List Item clicked on
function listItemClicked(e){
	var target = e.target;
	target.classList.toggle("done");
}

function headerClicked(){
	h1.classList.toggle("coolTitle");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listItemClicked);

h1.addEventListener("click", headerClicked);