orion.addEntity('homeImages', {
    image: {
        type: orion.attributes.image,
        label: "Image"
    }
}, {
    sidebarName: 'Home',
    pluralName: 'Images',
    singularName: 'Image',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image')
    ]
});