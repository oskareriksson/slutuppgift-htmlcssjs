// My own JavaScript

var tip = document.createElement("p");
var txt = document.createTextNode("Psst! You can also find Alan on various social media.")
tip.appendChild(txt);

var submit = document.querySelector("button");
submit.addEventListener("click", socialMedia);

function socialMedia() {

	var ptag = document.getElementById("success");
	ptag.parentNode.insertBefore(tip, ptag.nextSibling);
};