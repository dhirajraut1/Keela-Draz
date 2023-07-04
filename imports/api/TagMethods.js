import { Meteor } from 'meteor/meteor'
import { Tags } from './TagsCollection'

Meteor.methods({
    "insertTag"(tag) {
        Tags.insert(tag);
      },
      deleteTag(tagId) {
        // check(organizationId, String);
    
        const tag = Tags.findOne(tagId);
        if (!tag) {
          throw new Meteor.Error('not-found', 'Tag not found');
        }
    
        Tags.remove(tagId);
    
        return 'Tag deleted successfully';
      },
      // updateOrganization(id, name, email, phone) {
      //   const organization = Organizations.findOne(id);
      //   if (!organization) {
      //     throw new Meteor.Error('not-found', 'Organization not found');
      //   }
      //   Organizations.update(id, {
      //     $set: {
      //       organizationName: name,
      //       organizationEmail: email,
      //       organizationPhone: phone,
      //     },
      //   });
      //   return 'Organization updated successfully';
      // },
    });