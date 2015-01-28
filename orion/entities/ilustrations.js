orion.addEntity('ilustrations', {
    image: orion.attribute('file', {
        label: 'Fotito'
    }), 
    thumb: orion.attribute('file', {
        label: 'Fotito Chiquitita'
    })
}, {
    icon: 'pencil',
    sidebarName: 'Ilustraciones',
    pluralName: 'Ilustraciones',
    singularName: 'Ilustración',
    tableColumns: [
        orion.attributeColumn('file', 'thumb', 'Foto'),
    ]
});