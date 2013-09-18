/*
    Finally, let's add some interactions on the page:
    1. When the user hovers over a menu link, lewer the opacity a little.
    2. Make it so that the portfolio item's descriptive text is only visible after the user clicks the title.
    3. Think about other interactions that may make sense in this context. Code them and note your reason behind those functionalities.    

    ADVANCED:
    4. Display only one portfolio item at a time, but allow the user to navigate to the next/previous item (like a slideshow). Change the html/css around if you think it'll help make the script easier to build. 

*/



$(document).ready(function() {

	// fade out menu link slightly on hover (#1)
	$("#menu li")
		.mouseenter(function() {
			$(this).animate({"opacity":.5});
		})
		.mouseleave(function() {
			$(this).animate({"opacity":1});
		});

	// show/hide descriptive text on click (#2)
	$("#main h2 a")
		.on("click",function() {
			$(this).parent().next().toggle();
			return false;
		});

	// slideshow functionality for portfolio item (#4)
	$("#main .item:first").show().addClass("active");
	$("#portfolio-nav-next").on("click", function() {
		if ($("#main .active").next().attr("class") == "item") {
			$("#main .active").hide().removeClass("active").next().show().addClass("active");
			$("#container .disable").removeClass("disable");
		} else {
			$(this).addClass("disable");
		};
	});
	$("#portfolio-nav-prev").on("click", function() {
		if ($("#main .active").prev().attr("class") == "item") {
			$("#main .active").hide().removeClass("active").prev().show().addClass("active");
			$("#container .disable").removeClass("disable");
		} else {
			$(this).addClass("disable");
		};
	});

});