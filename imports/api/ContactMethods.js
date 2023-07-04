import { Meteor } from 'meteor/meteor'
import { Contacts } from './ContactsCollection'

Meteor.methods({
    "insertContact"(contact) {
        Contacts.insert(contact);
      },
      deleteContact(contactId) {
        // check(organizationId, String);
    
        const contact = Contacts.findOne(contactId);
        if (!contact) {
          throw new Meteor.Error('not-found', 'Organization not found');
        }
    
        Contacts.remove(contactId);
    
        return 'Contact deleted successfully';
      },
      updateContact(id, name, email, phone) {
        const organization = Contacts.findOne(id);
        if (!contact) {
          throw new Meteor.Error('not-found', 'Organization not found');
        }
        Contacts.update(id, {
          $set: {
            organizationName: name,
            organizationEmail: email,
            organizationPhone: phone,
          },
        });
        return 'Contact updated successfully';
      },
    });