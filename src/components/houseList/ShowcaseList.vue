<template>
    <ul>
        <ShowcaseListitem 
            v-for="listing in recentListings.slice(0, 3)" 
            :listing="listing" 
            :key="listing.id"
        />
        <!-- Limit to 3 listings -->
    </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import ShowcaseListitem from '@/components/houseList/ShowcaseListitem.vue';


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
    img {
        width: 100%;
        max-width: 400px;        
    }
    h2 {
        margin: 2rem 0 1rem;
    }
</style>