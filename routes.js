var afterAction = function() {
	if (!Meteor.isClient) {
		return;
	}
	SEO.set({
		title: orion.dictionary.get('seo.title'),
		link: {
			icon: orion.dictionary.get('seo.favicon.url'),
		},
		meta: {
			'description': orion.dictionary.get('seo.description')
		},
		og: {
			'title': orion.dictionary.get('seo.title'),
			'description': orion.dictionary.get('seo.description'),
			'image': orion.dictionary.get('seo.image.url')
		}
	});
}

Router.route('/', {
	name: 'pinturas',
	template: 'home',
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	onAfterAction: afterAction,
	fastRender: true,
	waitOn: function() {
		return Meteor.subscribe('paintings');
	},
	data: function() {
		return {
			items: Paintings.find({}, { sort: { lugar: 1 } })
		}
	}
});

Router.route('/ilustraciones', {
	name: 'ilustraciones',
	template: 'home',
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	onAfterAction: afterAction,
	fastRender: true,
	waitOn: function() {
		return Meteor.subscribe('ilustrations');
	},
	data: function() {
		return {
			items: Ilustrations.find({}, { sort: { lugar: 1 } })
		}
	}
});