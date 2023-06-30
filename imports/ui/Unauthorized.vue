<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                    It seems like you're UNAUTHORIZED.</h2>
                <div class="items-center p-4 m-6 w-4/5 space-y-4 md:space-y-6 sm:p-8">
                    <img :src="imagePath" class="" alt="login">
                </div>
                <router-link to="/"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Return Home
            </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "unauthorized",
    data() {
        return {
            imagePath : 'access-denied.svg'
        }
    }
}
</script>