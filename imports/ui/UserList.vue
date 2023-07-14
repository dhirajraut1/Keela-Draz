<template>
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <!-- search bar  -->
            <div class="w-full md:w-1/3">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Search" required="">
                    </div>
                </form>
            </div>
            <div class="w-full md:w-auto flex flex-col md:flex-row items-center">
                <button type="button" @click="openModal"
                    class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    Add User
                </button>
                <div v-if="showModal" class="fixed inset-0 bg-black opacity-50 z-50 w-full ml-0"></div>
                <div v-if="showModal" id="userModal" tabindex="-1" aria-hidden="true"
                    class="flex justify-center fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="fixed mt-16 bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" @click="closeModal"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                {{
                                    mode === 'add'
                                    ? 'Create User'
                                    : 'Update User'
                                }}
                            </h3>
                            <form class="space-y-6" @submit.prevent="handleUser">
                                <div>
                                    <label for="fname"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                        Name</label>
                                    <input type="text" v-model="firstName" name="fname" id="fname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John" required="">
                                </div>
                                <div>
                                    <label for="lname"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                        Name</label>
                                    <input type="text" v-model="lastName" name="lname" id="lname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Doe" required="">
                                </div>
                                <div v-if="mode !== 'edit'">
                                    <label for="userEmail"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User
                                        Email</label>
                                    <input type="email" name="userEmail" id="userEmail" v-model="doc.email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="ram@email.com" required />
                                </div>
                                <div v-if="mode !== 'edit'">
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" v-model="doc.password"
                                        placeholder="**********"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required />
                                </div>
                                <div>
                                    <label for="role"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                    <select type="text" name="role" id="role" v-model="selectedRole"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required>
                                        <option value='admin'>Admin</option>
                                        <option value="coordinator">Coordinator</option>

                                    </select>
                                </div>
                                <div v-if="mode !== 'edit'">
                                    <label for="organization"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
                                    <select v-model="selectedOrganization"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required>
                                        <option v-for="organization in showOrganizations" v-bind:value="organization"
                                            v-bind:key="organization._id">
                                            {{ organization.organizationName }}
                                        </option>
                                    </select>
                                </div>

                                <button
                                    class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {{ mode === 'add' ? 'Create' : 'Update' }}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- table  -->
        <div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">Full Name</th>
                        <th scope="col" class="px-4 py-3">User Email</th>
                        <th scope="col" class="px-4 py-3">Organization</th>
                        <th scope="col" class="px-4 py-3">Role</th>
                        <th scope="col" class="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody v-if="this.showUsers.length > 0">
                    <tr class="border-b dark:border-gray-700" v-for="user in showUsers" :key="user._id">
                        <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.profile.firstName }} {{ user.profile.lastName }}</td>
                        <td class="px-4 py-3">{{ user.emails[0].address }}</td>
                        <td class="px-4 py-3">{{ user.profile.organizationName }}</td>
                        <td class="px-4 py-3">{{ user.profile.role }}</td>

                        <td class="px-4 py-3 ">
                            <button type="button" v-on:click="openEditModal(user)"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                            <button v-if="currentUser.id !== user._id" type="button" v-on:click="deleteUser(user._id)"
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr class="items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td colspan="3" class="px-4 py-3">
                            <img class="mx-auto w-1/4" src="void.svg" alt="">
                            <div class="px-6 py-4 font-semibold text-center">
                                It's so empty here. Click on Add Users to create a new one.
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
            <!-- <p v-if="currentUser.role=='admin'">User role: {{ currentUser.role }}</p> -->
        </div>
    </div>
</template>

<script>
import { Organizations } from "../api/OrganizationsCollection"

const userData = {
    email: '',
    password: '',
}

export default {
    name: "users",
    data() {
        return {
            mode: 'add',
            showModal: false,
            doc: { ...userData },
            firstName: '',
            lastName: '',
            selectedOrganization: '',
            selectedRole: '',
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        openModal() {
            this.mode = 'add';
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.firstName = '';
            this.lastName = '';
            this.selectedRole = '';
        },
        openEditModal(data) {
            this.mode = 'edit';
            this.showModal = true;
            this.doc = { ...data };
            this.firstName = data.profile.firstName;
            this.lastName = data.profile.lastName;
            this.selectedRole = data.profile.role;
        },
        async handleUser() {
            const options = {
                ...this.doc,
                profile: {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    role: this.selectedRole,
                    organizationName: this.selectedOrganization.organizationName,
                    organizationId: this.selectedOrganization._id,
                }
            }

            const userId = Meteor.userId();
            try {
                if (this.mode === 'add') {
                    console.log(options)
                    await Meteor.call('insertUser', options, (error) => {
                        if (error) {
                            console.log(error.error);
                        } else {
                            // console.log('User creation successful');
                            alert('User Created Successfully');
                        }
                    })

                } else if (this.mode === 'edit') {
                    const updates = {
                        'profile.firstName': this.firstName,
                        'profile.lastName': this.lastName,
                        'profile.role': this.selectedRole,
                    };
                    console.log(this.firstName, this.lastName, this.selectedRole, this.doc._id, this.doc)
                    await Meteor.call('updateUser', {
                        userId: this.doc._id,
                        updates: updates
                    }, (error) => {
                        if (error) {
                            console.log(error);
                        } else {
                            // console.log('User creation successful');
                            alert('User Updated Successfully');
                        }
                    });
                }
            } catch (error) {
                alert(error.message);
            }
            this.closeModal();
        },
        deleteUser(userId) {
            console.log(userId)
            Meteor.call('deleteUser', userId, function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                }
            });
            alert("User deleted Successfully.")
        },
        getUser() {
            const currentUser = Meteor.user();
            if (currentUser) {
                this.currentUser = {
                    org: currentUser.profile.organizationName,
                    role: currentUser.profile.role,
                    id: currentUser._id,
                    orgId: currentUser.profile.organizationId
                };
            }
        },
    },

    meteor: {
        $subscribe: {
            users: [],
            organizations: [],
        },
        showOrganizations() {
            const orgId = Meteor.user().profile.organizationId;
            const role = Meteor.user().profile.role;
            console.log(role)
            if (role === 'keelaAdmin') {
                return Organizations.find({}).fetch();
            } else {
                return Organizations.find({ _id: orgId }).fetch();
            }
        },
        showUsers() {
            const user = Meteor.user();
            const orgId = Meteor.user().profile.organizationId;
            const role = user.profile.role;
            if (role === 'keelaAdmin') {
                return Meteor.users.find({});
            } else {
                return Meteor.users.find({ 'profile.organizationId': orgId }).fetch();
            }
        },
    },
}
</script>
