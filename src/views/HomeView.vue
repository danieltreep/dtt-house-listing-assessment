<template>
  <header>
    <h1>Houses</h1>
    <router-link :to="{name: 'NewListing'}">
      <img src="@/assets/icons/ic_plus_grey@3x.png" alt="Add a house listing">
    </router-link>
    <SearchBar />
    <SortBar />
  </header>
  <main>
    <section>
      <HouseListingList />
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import SortBar from '../components/SortBar.vue';
import HouseListingList from '../components/houseList/HouseListingList.vue';
// import getHouseListings from '../composables/getHouseListings';

onMounted(() => {
    // getHouseListings()
});
</script>

<style scoped>
  header a {
    position: absolute;
    right: 0;
    top: 0;
  }
  header img {
    height: 18px;
  }
</style>
