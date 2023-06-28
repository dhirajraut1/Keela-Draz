import { Meteor } from 'meteor/meteor'
import { Contacts } from '../imports/api/ContactsCollection'
import ContactMethods from '../imports/api/ContactMethods'
import { Tags } from '../imports/api/TagsCollection'
import { Organizations } from '../imports/api/OrganizationsCollection'
import OrganizationMethods from '../imports/api/OrganizationMethods'

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

Meteor.publish('organizations', function() {
  return Organizations.find();
});

Meteor.methods({
  makeAdmin: function() {
    const userId = 'BXBvNPQwnnq2PFi64';
    check(userId, String);
    var user = Meteor.users.findOne(userId);
    console.log("console from server methods draz");
    if (user) {
      user.isAdmin = true;
      Meteor.users.update(userId, { $set: { isAdmin: true } });
      return true;
    } else {
      return false;
    }
  }
});