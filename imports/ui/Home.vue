<template>
    <nav class="fixed top-0 z-50 w-full bg-purple-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <a href="/" class="flex ml-2 md:mr-24">
                        <img src="https://www.keela.co/wp-content/uploads/logo.png" class="h-8 mr-3" alt="keela Logo" />
                    </a>
                </div>
                <div class="flex items-center text-center">
                    <b class="text-xl font-black uppercase">
                        {{ user.org }}
                    </b>
                </div>
                <div class="flex items-center justify-end">
                    <div class=" p-2">
                        Welcome, <span class="font-semibold">
                            {{ user.fname }} {{ user.lname }}
                        </span>
                    </div>
                    <button
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        v-on:click="logout"> Logout</button>
                </div>
            </div>
        </div>
    </nav>
    <aside v-if="user.org" id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <a @click="tab = 'ContactList'"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path
                                d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                        </svg>
                        <span class="ml-3">Contacts</span>
                    </a>
                </li>
                <li>
                    <a @click="tab = 'TagList'"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Tags</span>
                    </a>
                </li>
                <li v-if="user.role === 'admin'">
                    <a @click="tab = 'UserList'"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="ml-3">Users</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
    <div v-if="user.org" class="mt-16 sm:ml-64">
        <section class="h-full p-3 sm:p-5">
            <div class="mx-auto px-4 lg:px-12">
                <component :is="tab" />
            </div>
        </section>
    </div>

    <div v-if="!user.org" class="h-full mt-20 justify-items-center mx-auto">
        <img class="mx-auto w-1/4" src="welcome.svg" alt="">
        <div class="px-6 py-4 font-semibold text-center">
            <br>
            <h1>Welcome to Keela.</h1> <br>
            No Organization associated with your account. Please ask the Admin to associate one.
        </div>
    </div>
</template>

<script>
import ContactList from './ContactList.vue';
import TagList from './TagList.vue'
import OrganizationList from './OrganizationList.vue'
import UserList from './UserList.vue';

export default {
    name: "home",
    data() {
        return {
            user: null,
            tab: 'ContactList'
        }
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            const user = Meteor.user();
            if (user) {
                this.user = {
                    fname: user.profile.firstName,
                    lname: user.profile.lastName,
                    org: user.profile.organizationName,
                    role: user.profile.role,
                };
            }
        },
        logout() {
            Meteor.logout();
            window.location.reload();
            this.$router.push({ name: "login" });

        },
    },
    components: { ContactList, TagList, OrganizationList, UserList }
}
</script>