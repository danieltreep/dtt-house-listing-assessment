<template>
    <h2 v-if="searchTerm">{{ list.length }} results found </h2>
    <!-- / How many results, only shown if there is search input -->

    <div class="no-results" v-if="list.length === 0">
        <img src="@/assets/images/img_empty_houses@3x.png" alt="No listings match your search">
    </div>
    <!-- No results image -->
    
    <ul>
        <HouseListingListItem 
            v-for="listing in list" 
            :listing="listing" 
            :key="listing.id"
        />
    </ul>
    <!-- Loop over the computed list passed in as prop -->
</template>

<script setup>
// External
import { storeToRefs } from 'pinia'

// Components
import HouseListingListItem from './HouseListingListItem.vue';

// Stores
import { useListingsStore } from '@/stores/listings';
import { useFilteredListingsStore } from '@/stores/filteredListings';

const { fetchListings } = useListingsStore()
const { searchTerm } = storeToRefs(useFilteredListingsStore())

defineProps({
    list: {
        type: Array
    }
});

// Fetch here so the suspense component in the parent component will load
await fetchListings()

</script>

<style lang="css" scoped>
ul {
    list-style: none;
    padding-left: 0;
    margin-block: 1rem;   
}
.no-results {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;
}
img {
    width: 100%;
    max-width: 400px;    
}
h2 {
    margin: 2rem 0 1rem;
}
</style>