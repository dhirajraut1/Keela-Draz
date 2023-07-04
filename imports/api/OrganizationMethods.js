import { Meteor } from 'meteor/meteor'
import { Organizations } from './OrganizationsCollection';

Meteor.methods({
  "insertOrganization"(organization) {
    Organizations.insert(organization);
  },

  deleteOrganization(organizationId) {
    // check(organizationId, String);

    const organization = Organizations.findOne(organizationId);
    if (!organization) {
      throw new Meteor.Error('not-found', 'Organization not found');
    }

    Organizations.remove(organizationId);

    return 'Organization deleted successfully';
  },
  updateOrganization(id, name, email, phone) {
    const organization = Organizations.findOne(id);
    if (!organization) {
      throw new Meteor.Error('not-found', 'Organization not found');
    }
    Organizations.update(id, {
      $set: {
        organizationName: name,
        organizationEmail: email,
        organizationPhone: phone,
      },
    });
    return 'Organization updated successfully';
  },
});