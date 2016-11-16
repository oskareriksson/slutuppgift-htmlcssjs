//My own jQuery
var menu = function() {
$("#hamburger").click(function(){
	$(".dropdown-menu").toggle("slow");
});

$("li a").click(function(){
	$(".dropdown-menu").toggle("slow");
});

};

$(document).ready(menu);