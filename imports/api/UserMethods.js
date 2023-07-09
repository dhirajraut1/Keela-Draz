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
    console.log("From method:", user)
    if (!Accounts.findUserByEmail(user.email)) {
      Meteor.users.update(user._id), {
        $set: {
          ...user,
        },
      }
    } else {
      console.log('Error has occured')
      throw new Meteor.Error('Email already exists');
    }
},
});