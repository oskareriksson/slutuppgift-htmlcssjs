// My own JavaScript

//p-element defined and styled
var tip = document.createElement("p");
tip.style.backgroundColor = "#c99a76";
tip.style.fontSize = "14px";
tip.style.textAlign = "center";
tip.style.margin = "auto";
tip.style.width = "55%";

//Text added to p-element
var txt = document.createTextNode("Psst! You can also find Alan on various social media.")
tip.appendChild(txt);

//Added an event listener that runs the function socialMedia when the submit-button is clicked
var submit = document.querySelector("button");
submit.addEventListener("click", socialMedia);

function socialMedia() {
	//Defines the currently hidden p-element (the form success-message) that will later be filled with text via jQuery
	var ptag = document.getElementById("success");
	//ptag.parentNode returns that the parent of ptag is <form>, then runs the method .insertBefore on that
	//result, which means that it inserts the newNode (tip) as a child of <form>. And since ptag.nextSibling
	//is the referenceNode of our method, it searches for the next sibling of ptag. But since there currently is none it will return null.
	//But the .insertBefore still does its job and inserts tip before ptag.nextSibling(which doesnt exist) and therefore tip itself becomes the
	//next sibling of ptag, i.e last child of <form> and placed after the form success message.
	ptag.parentNode.insertBefore(tip, ptag.nextSibling);
};