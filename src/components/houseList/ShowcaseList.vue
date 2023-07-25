<template>
    <ul>
        <ShowcaseListitem 
            v-for="listing in listings.slice(0, 3)" 
            :listing="listing" 
            :key="listing.id"
        />
        <!-- Limit to 3 listings -->
    </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListingsStore } from '@/stores/listings';
import ShowcaseListitem from '@/components/houseList/ShowcaseListitem.vue';

const { fetchListings } = useListingsStore()
const { listings } = storeToRefs(useListingsStore())

// Possible because of parent suspense component
await fetchListings()

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