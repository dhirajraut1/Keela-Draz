import { Meteor } from 'meteor/meteor'
import { Contacts } from './ContactsCollection'

Meteor.methods({
  insertContact(contact) {
    const userDetails = Meteor.user();
    Contacts.insert({
      ...contact,
      createdByUserId: userDetails._id,
      organizationName: userDetails.profile.organizationName,
      organizationId: userDetails.profile.organizationId
    });
    console.log('Contact Created Successfully.')
  },

  deleteContact(contactId) {
    // check(organizationId, String);

    const contact = Contacts.findOne(contactId);
    if (!contact) {
      throw new Meteor.Error('not-found', 'Contact not found');
    }

    Contacts.remove(contactId);
    return 'Contact deleted successfully';
  },

  updateContact(contact) {
    const userDetails = Meteor.user();
    Contacts.update(contact._id, {
      $set: {
        ...contact,
        modifiedBy: userDetails._id
      },
    });
    return 'Contact updated successfully';
  },
});