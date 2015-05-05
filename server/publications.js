Meteor.publish('paintings', function () {
  return Paintings.find()
});

Meteor.publish('ilustrations', function () {
  return Ilustrations.find()
});