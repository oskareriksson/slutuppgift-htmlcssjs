// My own JavaScript

var tip = document.createElement("p");
tip.style.backgroundColor = "#c99a76";
tip.style.textAlign = "center";
tip.style.margin = "auto";
tip.style.width = "60%";

var txt = document.createTextNode("Psst! You can also find Alan on various social media.")
tip.appendChild(txt);

var submit = document.querySelector("button");
submit.addEventListener("click", socialMedia);

function socialMedia() {

	var ptag = document.getElementById("success");
	ptag.parentNode.insertBefore(tip, ptag.nextSibling);
};