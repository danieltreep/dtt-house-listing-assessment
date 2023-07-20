<template>
    <ul>
        <HouseListingListItem 
            v-for="listing in listings" 
            :listing="listing" 
            :key="listing.id"
        />
    </ul>
</template>

<script setup>
import HouseListingListItem from './HouseListingListItem.vue';
import { storeToRefs } from 'pinia'
import { useListingsStore } from '@/stores/listings';

const { fetchListings } = useListingsStore()
const { listings } = storeToRefs(useListingsStore())

await fetchListings()

</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>