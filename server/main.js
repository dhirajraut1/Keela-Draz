import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Contacts } from '../imports/api/ContactsCollection'
import ContactMethods from '../imports/api/ContactMethods'

import { Tags } from '../imports/api/TagsCollection'
import TagMethods from '../imports/api/TagMethods'

import { Organizations } from '../imports/api/OrganizationsCollection'
import OrganizationMethods from '../imports/api/OrganizationMethods'

import UserMethods from '../imports/api/UserMethods'


Meteor.startup(() => {
  if (!Accounts.findUserByEmail('admin@keela.com')) {
    Accounts.createUser({
      email: 'admin@keeela.com',
      password: 'admin',
      profile: {
        firstName: 'Keela',
        lastName: 'Admin',
            role: 'keelaAdmin',
            organizationId: '009',
            organizationname: 'KEELA'
      },
    });
  }

})

Meteor.publish('contacts', function () {
  return Contacts.find();
});

Meteor.publish('organizations', function () {
  return Organizations.find();
});

Meteor.publish('tags', function () {
  return Tags.find();
});

Meteor.publish('users', function () {
  return Meteor.users.find({});
});