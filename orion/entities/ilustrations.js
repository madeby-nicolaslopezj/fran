orion.addEntity('ilustrations', {
    image: orion.attribute('file', {
        label: 'Fotito'
    })
}, {
    icon: 'pencil',
    sidebarName: 'Ilustraciones',
    pluralName: 'Ilustraciones',
    singularName: 'Ilustración',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Foto'),
    ]
});