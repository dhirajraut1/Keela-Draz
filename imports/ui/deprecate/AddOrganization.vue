<template>
    <!-- Main modal -->
    <div class="relative w-full max-w-md max-h-full">
        <!-- Add Org Modal -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"
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
                        <label for="org-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization
                            Name</label>
                        <input type="text" name="text" id="org-name" v-model="orgName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Help the Needy" required />
                    </div>
                    <div>
                        <label for="org-email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization's Email</label>
                        <input type="email" name="email" id="org-email" v-model="orgEmail" placeholder="help@theneedy.com"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>
                    <div>
                        <label for="org-phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" name="phone" id="org-phone" v-model="orgPhone" placeholder="+1 768-2712-212 "
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
</template>

<script>
export default {
    name: "addOrganization",
    data() {
        return {
            orgName: "",
            orgEmail: "",
            orgPhone: "",
        };
    },
    methods: {
        submitOrg() {
            const userId = Meteor.userId();
            const organization = {
                organizationName: this.orgName,
                organizationEmail: this.orgEmail,
                organizationPhone: this.orgPhone,
            };
            console.log(organization);
            Meteor.call("insertOrganization", organization, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Organization created successfully");
                    this.orgName = "";
                    this.orgEmail = "";
                    this.orgPhone = "";
                }
            });
        },
    },
};
</script>
