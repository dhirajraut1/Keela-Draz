<template>
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
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
                <button @click="openModal" type="button"
                    class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    Add Organization
                </button>
                <div v-if="showModal" class="fixed inset-0 bg-black opacity-50 z-50 w-full ml-0"></div>
                <div v-if="showModal" id="organizationModal" tabindex="-1" aria-hidden="true"
                    class="flex justify-center fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <!-- <AddOrganization /> -->
                    <div class="relative w-full max-w-md max-h-full">
                        <!-- Add Org Modal -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" @click="closeModal"
                                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="organizationModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                    Add an Organization
                                </h3>
                                <form class="space-y-6" @submit.prevent="submitOrg">
                                    <div>
                                        <label for="org-name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization
                                            Name</label>
                                        <input type="text" name="text" id="org-name" v-model="doc.organizationName"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Help the Needy" required />
                                    </div>
                                    <div>
                                        <label for="org-email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization's
                                            Email</label>
                                        <input type="email" name="email" id="org-email" v-model="doc.organizationEmail"
                                            placeholder="help@theneedy.com"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="org-phone"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                        <input type="text" name="phone" id="org-phone" v-model="doc.organizationPhone"
                                            placeholder="+1 768-2712-212 "
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <!-- <div class="flex justify-between"></div> -->
                                    <button
                                        class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showEditModal" class="fixed inset-0 bg-black opacity-50 z-50 w-full ml-0"></div>
            <div v-if="showEditModal" id="editOrgModal" tabindex="-1" aria-hidden="true"
                class="flex justify-center fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <!-- Main modal -->
                <div class="relative w-full max-w-md max-h-full">
                    <!-- Edit Org Modal -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" @click="closeEditModal(org)"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Add an Organization
                            </h3>
                            <form class="space-y-6" @submit.prevent="editOrganization">
                                <div>
                                    <label for="org-name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization
                                        Name</label>
                                    <input type="text" name="text" id="org-name" v-model="doc.organizationName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Help the Needy" required />
                                </div>
                                <div>
                                    <label for="org-email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization's
                                        Email</label>
                                    <input type="email" name="email" id="org-email" v-model="doc.organizationEmail"
                                        placeholder="help@theneedy.com"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required />
                                </div>
                                <div>
                                    <label for="org-phone"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                    <input type="text" name="phone" id="org-phone" v-model="doc.organizationPhone"
                                        placeholder="+1 768-2712-212 "
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required />
                                </div>
                                <!-- <div class="flex justify-between"></div> -->
                                <button
                                    class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 py-3">Organization Name</th>
                    <th scope="col" class="px-4 py-3">Organization Email</th>
                    <th scope="col" class="px-4 py-3">Organization Phone</th>
                    <th scope="col" class="px-4 py-3">Actions </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b dark:border-gray-700" v-for="organization in showOrganizations" :key="organization._id">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        organization.organizationName }}</th>
                    <td class="px-4 py-3">{{ organization.organizationEmail }}</td>
                    <td class="px-4 py-3">{{ organization.organizationPhone }}</td>
                    <td class="px-4 py-3 ">
                        <button type="button" @click="openEditModal(organization)"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>

                        <button type="button" v-on:click="deleteOrganization(organization._id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { Organizations } from '../api/OrganizationsCollection';
// import AddOrganization from './AddOrganization.vue'

const orgData = {
    organizationName: '',
    organizationEmail: '',
    organizationPhone: '',

};

export default {
    name: 'organizations',
    data() {
        return {
            showModal: false,
            showEditModal: false,
            doc: { ...orgData },
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        openEditModal(orgData) {
            this.showEditModal = true;
            this.doc = { ...orgData }
        },
        closeModal() {
            this.showModal = false;
            this.doc = { ...orgData }

        },
        closeEditModal() {
            this.showEditModal = false;
            this.doc = { ...orgData }
        },
        submitOrg() {
            const userId = Meteor.userId();
            console.log({ ...this.doc });
            Meteor.call("insertOrganization", { ...this.doc }, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Organization created successfully");
                    alert("Organization Created Successfully.")

                    this.doc = ''
                }
            });
            this.closeModal();
        },
        deleteOrganization(organizationId) {
            console.log(organizationId)
            Meteor.call('deleteOrganization', organizationId, function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                }
            });
            alert("Organization deleted Successfully.")
        },

        editOrganization() {
            Meteor.call('updateOrganization', { ...this.doc }, (error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                    alert("Organization updated Successfully.")
                }
            });
            this.showEditModal = false;
        },
    },
    meteor: {
        $subscribe: {
            organizations: [],
            users: []
        },
        showOrganizations() {
            const userId = Meteor.userId();
            if (userId) {
                return Organizations.find({}).fetch();
            }
        },
        
        showAllUsers() {
            const userId = Meteor.userId();
            if (userId) {
                return Meteor.users.find({}).fetch();
            }
        }
    },
    // components: { AddOrganization }

}

</script>
