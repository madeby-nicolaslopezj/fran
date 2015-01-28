orion.addEntity('paintings', {
    description: {
        type: String,
        label: "Descripcionsita"
    }, 
    image: orion.attribute('file', {
        label: 'Fotito'
    }), 
    thumb: orion.attribute('file', {
        label: 'Fotito Chiquitita'
    })
}, {
    icon: 'photo',
    sidebarName: 'Pinturas',
    pluralName: 'Pinturas',
    singularName: 'Pintura',
    tableColumns: [
        orion.attributeColumn('file', 'thumb', 'Foto'),
        { data:'description', title: 'Descripción' },
    ]
});