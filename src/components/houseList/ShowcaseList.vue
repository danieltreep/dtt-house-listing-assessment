<template>
    <ul>
        <ShowcaseListItem 
            v-for="listing in recentListings.slice(1, 4)" 
            :listing="listing" 
            :key="listing.id"
        />
        <!-- Limit to 3 listings and not the most recent because that's the one the user visits now -->
    </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import ShowcaseListItem from '@/components/houseList/ShowcaseListItem.vue';


import { useRecentListingsStore } from '@/stores/recentListings';

const { recentListings } = storeToRefs(useRecentListingsStore())
const { getRecentListingsFromStorage } = useRecentListingsStore()

// Possible because of parent suspense component
await getRecentListingsFromStorage()

</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>