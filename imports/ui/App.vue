<script setup>
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import AppMenu from './AppMenu.vue'
import { createHydrationRenderer, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

<template>
  <div class="w-full">
    <!-- <AppMenu /> -->
    <router-view />
  </div>
</template>
