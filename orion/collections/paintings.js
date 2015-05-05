Paintings = new orion.collection('paintings', {
    pluralName: 'Pinturas',
    singularName: 'Pintura',
    tabular: {
        columns: [
            orion.attributeColumn('file', 'thumb', 'Foto'),
            { data:'description', title: 'Descripción' },
        ]
    }
})

Paintings.attachSchema(new SimpleSchema({
    description: {
        type: String,
        label: "Descripcionsita"
    }, 
    image: orion.attribute('file', {
        label: 'Fotito'
    }), 
    thumb: orion.attribute('file', {
        label: 'Fotito Chiquitita'
    }),
    createdAt: orion.attribute('createdAt')
}));