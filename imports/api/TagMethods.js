import { Meteor } from 'meteor/meteor'
import { Tags } from './TagsCollection'

Meteor.methods({
  insertTag(tag) {
    const userDetails = Meteor.user();
    Tags.insert({
      ...tag,
      createdByUserId: userDetails._id,
      organizationName: userDetails.profile.organizationName,
      organizationId: userDetails.profile.organizationId
    });
    console.log('Tag created successfully.')
  },

  deleteTag(tagId) {

    const tag = Tags.findOne(tagId);
    if (!tag) {
      throw new Meteor.Error('not-found', 'Tag not found');
    }
    Tags.remove(tagId);
    return 'Tag deleted successfully';
  },

  updateTag(tag) {
    Tags.update(tag._id, {
      $set: {
        tagName: tag.tagName,
        modifiedAt: new Date(),
      },
    });
  },
});