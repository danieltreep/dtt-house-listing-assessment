<template>
    <ul>
        <ShowcaseListItem 
            v-for="listing in list.slice(0, 3)" 
            :listing="listing" 
            :key="listing.id"
        />
        <!-- Limit to 3 listings and not the most recent because that's the one the user visits now -->
    </ul>
</template>

<script setup>
import ShowcaseListItem from '@/components/houseList/ShowcaseListItem.vue';

import { useRecentListingsStore } from '@/stores/recentListings';
import { useListingsStore } from '../../stores/listings';

const { getRecentListingsFromStorage } = useRecentListingsStore()
const { fetchListings } = useListingsStore()

await getRecentListingsFromStorage()
await fetchListings()

defineProps({
    list: Array
});
</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>