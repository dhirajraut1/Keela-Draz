<script>
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { createHydrationRenderer, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

export default {
  data() {
    return {
      user: null,
    }
  },
  created() {
    Tracker.autorun(()=>{
      this.user = Meteor.user();
      console.log(this.user);
    }) 
  },
}
</script>

<template>
  <div class="w-full">
    <router-view />
    <router-view name="asideMenu" />


  </div>
</template>
