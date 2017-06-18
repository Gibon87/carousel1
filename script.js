$(function(){
	var carouselList = $("#carousel ul");

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({left:''});
	}

	function changeSlideRight(){
		carouselList.animate({'left':-400}, 500, moveFirstSlide);
	}

	setInterval(changeSlideRight, 3000);
});