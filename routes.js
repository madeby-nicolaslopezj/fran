Router.map(function() {

	this.route('home', {
		path: '/',
		layoutTemplate: 'baseLayout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'homeImages')]
		},
	});

	this.route('paintings', {
		path: '/pinturas-y-dibujos',
		template: 'gallery',
		layoutTemplate: 'baseLayout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'paintings')]
		},
		data: function() {
			return {
				items: orion.entities.paintings.collection.find().map(function(document, index){
					document.index = index;
					return document;
				})
			}
		}
	});

	this.route('ilustrations', {
		path: '/ilustraciones',
		template: 'gallery',
		layoutTemplate: 'baseLayout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'ilustrations')]
		},
		data: function() {
			return {
				items: orion.entities.ilustrations.collection.find().map(function(document, index){
					document.index = index;
					return document;
				})
			}
		}
	});

});
