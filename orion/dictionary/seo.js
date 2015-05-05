orion.dictionary.addDefinition('title', 'seo', {
	type: String,
	label: "Title of the page",
});

orion.dictionary.addDefinition('description', 'seo', {
	type: String,
	label: "Description",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('image', 'seo',  
	orion.attribute('file', {
        label: "Image",
    	optional: true
    })
);

orion.dictionary.addDefinition('favicon', 'seo',  
	orion.attribute('file', {
        label: "Fav Icon",
    	optional: true
    })
);