import { Meteor } from 'meteor/meteor'
import { Contacts } from '../imports/api/ContactsCollection'
import ContactMethods from '../imports/api/ContactMethods'
import { Tags } from '../imports/api/TagsCollection'

const insertTag = tagText => Tags.insert({ text: tagText })


Meteor.startup( () => {
if (Tags.find().count() === 0) {
    [
      'Tag1',
      'Tag2',
    ].forEach(insertTag)
  }
})

Meteor.publish('contacts', function() {
  return Contacts.find();
});
