Ilustrations = new orion.collection('ilustrations', {
    pluralName: 'Ilustraciones',
    singularName: 'Ilustración',
    tabular: {
        columns: [
            orion.attributeColumn('file', 'thumb', 'Foto')
        ]
    }
})

Ilustrations.attachSchema(new SimpleSchema({
    image: orion.attribute('file', {
        label: 'Fotito'
    }), 
    thumb: orion.attribute('file', {
        label: 'Fotito Chiquitita'
    }),
    createdAt: orion.attribute('createdAt')
}));