<template>
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
const { matchingResults } = storeToRefs(useSearchStore())

await fetchListings()

</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>