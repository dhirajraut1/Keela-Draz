import { Meteor } from 'meteor/meteor'
import { Organizations } from './OrganizationsCollection';

Meteor.methods({
    "insertOrganization"(organization) {
        Organizations.insert(organization);
      }
    });