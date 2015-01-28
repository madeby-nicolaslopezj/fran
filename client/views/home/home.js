var MathMap = function(x, a, b, c, d) {
	return (x-a)/(b-a) * (d-c) + c;
}

var isTouchDevice = function() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}

Template.home.helpers({
	items: function () {
		return this.items.map(function(document, index){
			document.index = index;
			return document;
		});
	},
	isCero: function(index) {
    	return index == 0;
    }
});

Template.home.events({
	'click .item': function (event, template) {
		if (!isTouchDevice()) {
			$(event.currentTarget)
			.toggleClass('zoom')
			.find('.imagensita')
			.css("background-position", "center");
		}
	}
});

Template.home.rendered = function () {
	var resizeItem = function() {
		var itemHeight = $(window).height() - $(".headersito").outerHeight() - $(".indicators").outerHeight() - $(".iconitos").outerHeight() - 100;
		$(".imagensita").height(itemHeight);
	}
	resizeItem();
	$(window).resize(function() {
		resizeItem();
	})
	Deps.autorun(function () {
		Router.current();
		Meteor.setTimeout(resizeItem, 0);
	});

	if (isTouchDevice()) {
		$("#carousel").swiperight(function() {  
			$(this).carousel('prev');  
		});  
		$("#carousel").swipeleft(function() {  
			$(this).carousel('next');  
		}); 
	}

	$(window).mousemove(function(e){
		var posX = MathMap(e.pageX, 0, $(window).width(), 0, 100);
		var posY = MathMap(e.pageY, 0, $(window).height(), 0, 100);
		$(".zoom .imagensita").css('background-position', posX + "% " + posY + "%")
	});
};