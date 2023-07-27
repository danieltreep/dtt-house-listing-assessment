<template>
    <div class="filter-bar">
        
            <p>Filter by: </p>
            <select v-model="bedrooms">
                <option value="">Bedrooms</option>
                <option value="1">1 bedroom</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4+ bedrooms</option>
            </select>
            <select v-model="bathrooms">
                <option value="">bathrooms</option>
                <option value="1">1 bathroom</option>
                <option value="2">2 bathrooms</option>
                <option value="3">3 bathrooms</option>
                <option value="4">4+ bathrooms</option>
            </select>  
            <select v-model="size">
                <option value="">Size</option>
                <option value="50">&gt; 50 m2</option>
                <option value="100">&gt; 100 m2</option>
                <option value="150">&gt; 150 m2</option>
                <option value="200">&gt; 200 m2</option>
                <option value="250">&gt; 250 m2</option>
            </select> 

            <div @click="resetFilters">reset</div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFilteredListingsStore } from '@/stores/filteredListings'

const { bedrooms, bathrooms, size } = storeToRefs(useFilteredListingsStore())
const { resetFilters } = useFilteredListingsStore();


</script>

<style lang="css" scoped>
.filter-bar {
    border-bottom: 1px solid rgb(207, 207, 207);
    margin: 1rem 0;
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
}
</style>