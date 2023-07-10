import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  insertUser(user) {
    if (!Accounts.findUserByEmail(user.email)) {
      Accounts.createUser(user);
    } else {
      throw new Meteor.Error('Email already exists')
    }
  },

  deleteUser(userId) {
    Meteor.users.remove(userId);
    return 'User deleted successfully';
  },

  updateUser(user) {
    const userDetails = Meteor.user();
    Meteor.users.update(
      { _id: user.userId },
      {
        $set: {
          'profile.firstName': user.updates['profile.firstName'],
          'profile.lastName': user.updates['profile.lastName'],
          'profile.role': user.updates['profile.role'],
          modifiedBy: userDetails._id
        },
      }
    )
  }
})
