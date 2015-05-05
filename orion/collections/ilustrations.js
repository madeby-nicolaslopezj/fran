Ilustrations = new orion.collection('ilustrations', {
    pluralName: 'Ilustraciones',
    singularName: 'Ilustración',
    tabular: {
        columns: [ 
            { data: 'lugar', title: 'Lugar' },
            orion.attributeColumn('file', 'thumb', 'Foto')
        ]
    }
})

Ilustrations.attachSchema(new SimpleSchema({
    lugar: {
        type: Number,
        label: 'Lugar'
    },
    image: orion.attribute('file', {
        label: 'Fotito'
    }), 
    thumb: orion.attribute('file', {
        label: 'Fotito Chiquitita'
    }),
    createdAt: orion.attribute('createdAt')
}));