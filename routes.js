var afterAction = function() {
	if (!Meteor.isClient) {
		return;
	}
	SEO.set({
		title: orion.dictionary.get('seoTitle'),
		link: {
			icon: orion.dictionary.get('seoFavIcon.url'),
		},
		meta: {
			'description': orion.dictionary.get('seoDescription')
		},
		og: {
			'title': orion.dictionary.get('seoTitle'),
			'description': orion.dictionary.get('seoDescription'),
			'image': orion.dictionary.get('seoImage.url')
		}
	});
}

Router.route('/', {
	name: 'pinturas',
	template: 'home',
	loadingTemplate: 'adminLoading',
	onAfterAction: afterAction,
	waitOn: function() {
		return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'paintings')]
	},
	data: function() {
		return {
			items: orion.entities.paintings.collection.find()
		}
	}
});

Router.route('/ilustraciones', {
	name: 'ilustraciones',
	template: 'home',
	loadingTemplate: 'adminLoading',
	onAfterAction: afterAction,
	waitOn: function() {
		return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'ilustrations')]
	},
	data: function() {
		return {
			items: orion.entities.ilustrations.collection.find()
		}
	}
});

Router.configure({
    trackPageView: true
});