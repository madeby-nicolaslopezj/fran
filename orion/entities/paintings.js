orion.addEntity('paintings', {
    description: {
        type: String,
        label: "Descripcionsita"
    }, 
    image: orion.attribute('file', {
        label: 'Fotito'
    })
}, {
    icon: 'photo',
    sidebarName: 'Pinturas',
    pluralName: 'Pinturas',
    singularName: 'Pintura',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Foto'),
        { data:'description', title: 'Descripción' },
    ]
});