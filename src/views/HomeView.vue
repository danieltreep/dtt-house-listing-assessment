<template>
  <header>
    <div class="row-1">
      <h1>Houses</h1>
      <CreateListingButton />
    </div>
    <div class="row-2">
      <SearchBar />
      <SortBar />
    </div>
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
import CreateListingButton from '../components/CreateListingButton.vue';
// import getHouseListings from '../composables/getHouseListings';

onMounted(() => {
    // getHouseListings()
});
</script>

<style scoped>
  @media (min-width: 768px) {
    .row-1, .row-2 {
      display: flex;
    }
    .row-1 {
      margin: 2rem 0;
    }
    h1 {
      display: inline;
    }
  }
</style>
