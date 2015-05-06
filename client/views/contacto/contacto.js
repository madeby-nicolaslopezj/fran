Template.contacto.onRendered(function() {
  Session.set('contactSent', false);
})

Template.contacto.helpers({
  contactSent: function () {
    return Session.get('contactSent');
  }
});

AutoForm.addHooks('contactForm', {
  onSuccess: function(formType, result) {
    Session.set('contactSent', true)
  },
});