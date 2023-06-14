import { Meteor } from 'meteor/meteor'
import { Contacts } from './ContactsCollection'

Meteor.methods({
    "insertContact"(contact) {
        Contacts.insert(contact);
      }
    });