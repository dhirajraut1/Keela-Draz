import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { Contacts } from '../imports/api/ContactsCollection'
import ContactMethods from '../imports/api/ContactMethods'
import { Tags } from '../imports/api/TagsCollection'
import { Organizations } from '../imports/api/OrganizationsCollection'
import OrganizationMethods from '../imports/api/OrganizationMethods'

Meteor.startup( () => {

})

Meteor.publish('contacts', function() {
  return Contacts.find();
});

Meteor.publish('organizations', function() {
  return Organizations.find();
});
