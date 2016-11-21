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

		if(firstName === "") {
			$(".firstname-error").text("Please enter your first name.")

			return false;
		};

		if(firstName.length > 0){
			$(".firstname-error").empty();
		};
	});

	$(".btn").on("click", function(){
		var lastName = $("#lastname").val();

		if(lastName === "") {
			$(".lastname-error").text("Please enter your last name.")

			return false;
		};

		if(lastName.length > 0){
			$(".lastname-error").empty();
		};
	});

	$(".btn").on("click", function(){
		var email = $("#email").val();

		if(email === "") {
			$(".email-error").text("Please enter your email.")

			return false;
		};

		if(email.length > 0){
			$(".email-error").empty();
		};
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