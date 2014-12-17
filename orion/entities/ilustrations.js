orion.addEntity('ilustrations', {
    image: {
        type: orion.attributes.image,
        label: "Image"
    },
    name: {
        type: String,
        label: "Name"
    },
    size: {
        type: String,
        label: "Size"
    },
    date: {
        type: String,
        label: "Date"
    }
}, {
    sidebarName: 'Ilustraciones',
    pluralName: 'Ilustraciones',
    singularName: 'Ilustración',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'name', label: 'Name' }
    ]
});