<template>
    <!-- Main modal -->
    <div class="relative w-full max-w-md max-h-full">
        <!-- Add Org Modal -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="org-modal">
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
                    Update Organization
                </h3>
                <form class="space-y-6" @submit.prevent="updateOrg">
                    <div>
                        <label for="org-name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization
                            Name</label>
                        <input type="text" name="text" id="org-name" v-model="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>
                    <div>
                        <label for="org-email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization's
                            Email</label>
                        <input type="email" name="email" id="org-email" v-model="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>
                    <div>
                        <label for="org-phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" name="phone" id="org-phone" v-model="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>
                    <!-- {{ orgData }}ooo -->
                    <!-- <div class="flex justify-between"></div> -->
                    <button 
                        class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                    </button>
                </form>
            </div>
        </div>
        <!-- <p>{{ organizations.name }}</p> -->
    </div>
</template>

<script>
import { reactive } from 'vue';
import { Meteor } from 'meteor/meteor';
import { subscribe } from 'vue-meteor-tracker';

export default {

    name: "updateOrganization",

    setup() {
    const organizations = reactive({ name: '' });

    subscribe('organizations', (data) => {
      organizations.name = data.organizationName;
    });

    return {
      organizations,
    };
  },
    // props: ['organization'],
    data() {
        return {
            subscribedOrg: {},
            email: '',
            name: '',
            phone: 'www'
        };
    },
    methods: {

        // subscribeOrg(id) {
        //     // Meteor.subscribe('organizations', (data) =>{
        //     //     this.orgData = data
        //     // })
        //     Meteor.subscribe('organizations', (orgs) => {
        //         for (const org of orgs) {
        //             if (org._id === id) {
        //                 this.subscribedOrg = org;
        //             }
        //         }
        //     });
        // },
        updateOrg() {
            const organization = {
                organizationName: this.organization.name,
                organizationEmail: this.organization.email,
                organizationPhone: this.organization.phone,
            };
            console.log(organization);
            Meteor.call("updateOrganization", organization, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Organization updated successfully");
                    this.orgName = "";
                    this.orgEmail = "";
                    this.orgPhone = "";
                }
            });
        },
        fillEditModal() {
            this.email = 'asd',
            this.name = 'asd',
            this.phone = 'asd'
        }
    },
    mounted() {
        this.subscribeOrg()
    }
    // meteor: {
    //     $subscribe: {
    //         organizations: []
    //     },
    //     showSelectedOrganization() {
    //         const userId = Meteor.userId();
    //         if (userId) {
    //             return Organizations.find({"_id":organization._id}).fetch();
    //         }
    //     }
    // },
};
</script>
