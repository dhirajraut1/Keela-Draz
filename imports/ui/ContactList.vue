<template>
    <!-- <div class="mt-16 sm:ml-64">
        <section class="h-full bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12"> -->
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
            <div
                class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button @click="openModal" type="button"
                    class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    Add Contact
                </button>
                <div v-if="showModal" class="w-full md:w-auto flex flex-col md:flex-row items-center"></div>

                <div v-if="showModal" id="contactModal" tabindex="-1" aria-hidden="true"
                    class="flex justify-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 mt-12 w-full max-w-md max-h-full">
                        <!-- Add Contact Modal -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" @click="closeModal"
                                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="contactModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                    Add a contact
                                </h3>
                                <form class="space-y-6" @submit.prevent="submitContact">
                                    <div>
                                        <label for="fname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                            Name</label>
                                        <input type="text" name="text" id="fname" v-model="fname"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="William" required />
                                    </div>
                                    <div>
                                        <label for="lname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                            Name</label>
                                        <input type="text" name="lname" id="lastName" v-model="lname" placeholder="Doe"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email" v-model="email"
                                            placeholder="will@smith.com"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="phone"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                        <input type="text" name="phone" id="phone" v-model="phone"
                                            placeholder="+1 768-2712-212 "
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="company"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                        <input type="text" name="company" id="company" v-model="company"
                                            placeholder="Apple Inc."
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="priorities"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                        <select id="priotities" v-model="priority"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <button
                                        class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- <AddContact /> -->
                </div>
            </div>
        </div>
        <!-- <div class="w-full"> -->
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 py-3">Full Name</th>
                    <th scope="col" class="px-4 py-3">Email</th>
                    <th scope="col" class="px-4 py-3">Phone</th>
                    <th scope="col" class="px-4 py-3">Company</th>
                    <th scope="col" class="px-4 py-3">Tags</th>
                    <th scope="col" class="px-4 py-3">Actions</th>

                </tr>
            </thead>
            <tbody v-if="this.showContacts.length > 0">
                <!-- <tbody> -->
                <tr class="border-b dark:border-gray-700" v-for="contact in showContacts" :key="contact._id">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                        `${contact.firstName} ${contact.lastName}` }}</th>
                    <td class="px-4 py-3">{{ contact.email }}</td>
                    <td class="px-4 py-3">{{ contact.phone }}</td>
                    <td class="px-4 py-3">{{ contact.company }}</td>
                    <td>
                        <VueMultiselect v-model="selectedTags" :options="tags" :multiple="true" :close-on-select="true" placeholder="Select Tags"
            label="tagName" track-by="_id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </td>


                    <td class="px-4 py-3 ">
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                        <button type="button" v-on:click="deleteContact(contact._id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr class="items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td colspan="6" class="px-4 py-3">
                        <img class="mx-auto w-1/4" src="void.svg" alt="">
                        <div class="px-6 py-4 font-semibold text-center">

                            It's so empty here. Click on Add Contact to create a new one.
                        </div>
                    </td>

                </tr>
            </tbody>

        </table>
        
        <!-- </div> -->
        <!-- <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                        aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Showing
                            <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                            of
                            <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                        </span>
                        <ul class="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page"
                                    class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav> -->
    </div>
    <!-- </div>
        </section>
    </div> -->
</template>

<script>
import { Contacts } from "../api/ContactsCollection"
import { Tags } from "../api/TagsCollection"
import VueMultiselect from 'vue-multiselect'

// import AddContact from './AddContact.vue';

export default {
    name: "contacts",
    data() {
        return {
            showModal: false,
            fname: "",
            lname: "",
            email: "",
            phone: "",
            company: "",
            priority: "",
            selectedTags: [],
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitContact() {
            const userId = Meteor.userId();
            const contact = {
                firstName: this.fname,
                lastName: this.lname,
                email: this.email,
                phone: this.phone,
                company: this.company,
                priority: this.priority,
                createdByUserId: userId
            };
            // console.log(contact);
            Meteor.call("insertContact", contact, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Contact submitted successfully");
                    this.fname = "";
                    this.lname = "";
                    this.email = "";
                    this.phone = "";
                    this.company = "";
                    this.priority = "Low";
                    // this.$emit("close-modal")
                }
            });
            this.closeModal();

        },
        deleteContact(contactId) {
            console.log(contactId)
            Meteor.call('deleteContact', contactId, function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                    // Reload the page to update the table
                    // location.reload();
                }
            });
        },
        updateContact(contactId) {
            Meteor.call('updateContact', contactId, this.name, this.email, this.phone, (error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                }
            });
        },
    },
    meteor: {
        $subscribe: {
            contacts: [],
            tags: [],
        },
        showContacts() {
            const userId = Meteor.userId();
            const adminId = 'BXBvNPQwnnq2PFi64';
            if (userId !== adminId) {
                // if (Meteor.user().role !== 'keelaAdmin') {
                return Contacts.find({ createdByUserId: userId }).fetch();
            } else {
                return Contacts.find({}).fetch();
            }
        },

        tags() {
            const userId = Meteor.userId();
            if (userId) {
                return Tags.find({ createdByUserId: userId }).fetch();
            }
        },
    },
        components: { VueMultiselect }
    }
</script>
