<template>
    <section class="bg-purple-100 dark:bg-purple-900">
        <!-- toast -->

        <!-- warning toast  -->
        <div id="toast-warning" v-if="showToast"
            class="fixed flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Warning icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">Please enter another email. This email is already taken.</div>
            <button type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-warning" aria-label="Close" @click="hideToast">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <!-- end toast  -->
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-48 mr-2" src="https://www.keela.co/wp-content/uploads/logo.png" alt="logo">
            </a>
            <div
                class="md:w-3/5 lg:h-auto bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <div class="lg:items-center grid lg:grid-cols-2">
                        <div class="items-center p-4 space-y-4 md:space-y-6 sm:p-8">
                            <img :src="imagePath" class="" alt="login">
                        </div>
                        <form class="p-4 space-y-4 md:space-y-6" @submit.prevent="signUp">
                            <div>
                                <label for="fname"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" v-model="firstName" name="fname" id="fname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required="">
                            </div>
                            <div>
                                <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                    Name</label>
                                <input type="text" v-model="lastName" name="lname" id="lname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe" required="">
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" v-model="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="john@company.com" required="">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" v-model="password" name="password" id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="">
                            </div>
                            <div>
                                <label for="confirm-password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input type="password" v-model="confirmPassword" name="confirm-password"
                                    id="confirm-password" placeholder="••••••••" :class="confirmPasswordClass" required="">
                                <p class="error text-red-600 dark:text-red-500" v-if="passwordError">{{ passwordError }}</p>
                            </div>
                            <button
                                class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Create
                                an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <router-link to="/login"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here
                                </router-link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles'

export default {
    name: "SignUp",
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordError: '',
            showToast: false,
            imagePath: 'signup.svg'
        }
    },
    computed: {
        confirmPasswordClass() {
            return this.passwordError ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
        }
    },

    watch: {
        confirmPassword(newValue) {
            if (this.password !== newValue) {
                this.passwordError = 'Password and confirm password do not match.';
            } else {
                this.passwordError = '';
            }
        }
    },
    methods: {
        showWarningToast() {
            this.showToast = true;
            setTimeout(() => {
                this.hideToast();
            }, 5000);
        },
        hideToast() {
            this.showToast = false;
        },
        signUp() {

            if (this.password !== this.confirmPassword) {
                this.passwordError = 'Password and confirm password do not match.';
                return;
            }

            const options = {
                email: this.email,
                password: this.password,
                profile: {
                    firstName: this.firstName,
                    lastName: this.lastName
                },
                role: 'user'
            };
            console.log(options)
            Accounts.createUser(options, (error) => {
                if (error) {
                    console.log(error.reason);
                    this.showWarningToast();
                } else {
                    console.log('Signup successful');
                    this.$router.push({ name: 'login' });
                }
            });
        },
    },
}
</script>