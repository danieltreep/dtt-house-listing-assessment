<template>
    <h2 v-if="searchTerm">{{ matchingResults.length }} results found </h2>
    <!-- / How many results -->

    <div class="no-results" v-if="matchingResults.length === 0">
        <img src="@/assets/images/img_empty_houses@3x.png" alt="No listings match your search">
    </div>
    <!-- No results image -->
    
    <ul>
        <HouseListingListItem 
            v-for="listing in matchingResults" 
            :listing="listing" 
            :key="listing.id"
        />
    </ul>
</template>

<script setup>
import HouseListingListItem from './HouseListingListItem.vue';
import { storeToRefs } from 'pinia'
import { useListingsStore } from '@/stores/listings';
import { useSearchStore } from '@/stores/search';

const { fetchListings } = useListingsStore()
const { matchingResults, searchTerm } = storeToRefs(useSearchStore())

// Possible because parent container has a suspense component
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