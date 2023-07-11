//must be in the server side

import { Roles } from 'meteor/alanning:roles';

Roles.createRole('keelaAdmin');
Roles.createRole('orgAdmin');
Roles.createRole('coordinator');
Roles.createRole('ORGS_VIEW');
Roles.createRole('CONTACT_VIEW');
Roles.createRole('TAG_VIEW');


Roles.addRolesToParent('ORGS_VIEW', 'keelaAdmin');
Roles.addRolesToParent('CONTACT_VIEW', 'orgAdmin');
Roles.addRolesToParent('CONTACT_VIEW', 'coordinator');
Roles.addRolesToParent('TAG_VIEW', 'orgAdmin');
Roles.addRolesToParent('TAG_VIEW', 'coordinator');

Roles.addUsersToRoles('BXBvNPQwnnq2PFi64','keelaAdmin');