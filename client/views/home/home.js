Template.home.helpers({
	homeImages: function () {
		return orion.entities.homeImages.collection.find().map(function(document, index){
			document.index = index;
			return document;
		});
	},
	isCero: function(index) {
    	return index == 0;
    }
});