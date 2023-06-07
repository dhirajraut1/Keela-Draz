import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { LinksCollection } from '/imports/api/links'

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() })
}



Meteor.startup(async () => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
})
