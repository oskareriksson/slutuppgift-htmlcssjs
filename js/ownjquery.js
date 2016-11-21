//My own jQuery

//Hamburger menu toggle function
var menu = function() {
$("#hamburger").click(function(){
	$(".dropdown-menu").toggle("slow");
});

$("li a").click(function(){
	$(".dropdown-menu").toggle("slow");
});

};

//Form input-checking function
var formSubmit = function() {
	$(".btn").on("click", function(){
		var firstName = $("#firstname").val();
		var lastName = $("#lastname").val();
		var email = $("#email").val();

		if(firstName === "") {
			$(".firstname-error").text("Please enter your first name.")
		};

		if(firstName.length > 0){
			$(".firstname-error").empty();
		};

		if(lastName === "") {
			$(".lastname-error").text("Please enter your last name.")
		};

		if(lastName.length > 0){
			$(".lastname-error").empty();
		};

		if(email === "") {
			$(".email-error").text("Please enter your email.")
		};

		if(email.length > 0){
			$(".email-error").empty();
		};

		if(firstName.length > 0 && lastName.length > 0 && email.length > 0) {
			$(".submit-success").text("Thank you! Alan will contact you shortly.")

			$("#firstname").val("");
			$("#lastname").val("");
			$("#email").val("");
		} else {
			$(".submit-success").empty();
		};

		return false;
	});
};

//Thumbnail hover function
var tnhover = function(){
	$(".thumbnail").hover(function(){
		$(this).toggleClass("thumbnail-hover");
	});
};

//Thumbnail click-function
var tnclick = function() {
	$(".thumbnail").click(function(){
		$(this).toggleClass("thumbnail-highlight");
	});
};

$(document).ready(menu);
$(document).ready(tnhover);
$(document).ready(tnclick);
$(document).ready(formSubmit);