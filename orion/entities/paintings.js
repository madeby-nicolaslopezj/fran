orion.addEntity('paintings', {
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
    sidebarName: 'Pinturas y Dibujos',
    pluralName: 'Pinturas y Dibujos',
    singularName: 'Pintura o Dibujo',
    defaultIndexTableFields: [
        orion.adminIndexAttributeViews.image('image', 'Image'),
        { key: 'name', label: 'Name' }
    ]
});