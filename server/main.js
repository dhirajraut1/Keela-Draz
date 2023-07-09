import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

import { Contacts } from '../imports/api/ContactsCollection'
import ContactMethods from '../imports/api/ContactMethods'

import { Tags } from '../imports/api/TagsCollection'
import TagMethods from '../imports/api/TagMethods'

import { Organizations } from '../imports/api/OrganizationsCollection'
import OrganizationMethods from '../imports/api/OrganizationMethods'

import UserMethods from '../imports/api/UserMethods'


Meteor.startup( () => {

})

Meteor.publish('contacts', function() {
  return Contacts.find();
});

Meteor.publish('organizations', function() {
  return Organizations.find();
});

Meteor.publish('tags', function() {
  return Tags.find();
});

Meteor.publish('users', function (){ 
  return Meteor.users.find({});
});