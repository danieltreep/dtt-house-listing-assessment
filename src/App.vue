<template>
  <DesktopNavHeader />
  <RouterView />
  <MobileNavTabs />
</template>

<script setup>
import { RouterView } from 'vue-router'
import MobileNavTabs from './components/navigation/MobileNavTabs.vue';
import DesktopNavHeader from './components/navigation/DesktopNavHeader.vue';
</script>


<style scoped>

</style>
