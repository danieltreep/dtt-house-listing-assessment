<template>
    <div class="filter-bar">

        <FilterSelect 
            v-model="bedrooms"
            :options="['1', '2', '3', '4']"
            :values="['1', '2', '3', '4']"
            img="bed"
        />

        <FilterSelect 
            v-model="bathrooms"
            :options="['1', '2', '3', '4']"
            :values="['1', '2', '3', '4']"
            img="bath"
        />

        <FilterSelect 
            v-model="size"
            :options="['50 m2', '100 m2', '150 m2', '200 m2']"
            :values="['50', '100', '150', '200']"
            img="size"
        />

        <button @click="resetFilters" v-if="bedrooms || bathrooms || size">
            <img src="@/assets/icons/ic_reset@3x.png" alt="">
            <p>Reset</p>
        </button>
    </div>
</template>

<script setup>
// External
import { storeToRefs } from 'pinia';

// Stores
import { useFilteredListingsStore } from '@/stores/filteredListings'

// Components
import FilterSelect from '@/components/filterListings/FilterSelect.vue';

const { bedrooms, bathrooms, size } = storeToRefs(useFilteredListingsStore())
const { resetFilters } = useFilteredListingsStore();

</script>

<style lang="css" scoped>
.filter-bar {
    border-bottom: 1px solid rgb(216, 216, 216);
    margin: 1rem 0;
    padding-bottom: 1rem;
    display: flex;
    gap: .5rem;
}
select {
    border: none;
    background-color: transparent;
    font-family: 'Open Sans', sans-serif;
    border-right: 5px solid transparent;
    padding-right: .5rem;
}
img {
    height: 18px;
}
button {
    border: none;
    background-color: transparent;
    padding: 0;
    display: flex;
    gap: .5rem;
    display: none;
    align-items: center;
    font-size: 12px;
    color: var(--text-color-secondary);
}

@media (min-width: 768px) {
    button {
        display: flex;
    }
    button p {
        font-size: 14px;
    }
    .filter-bar {
        justify-content: start;
        gap: 1rem;
    }
}
</style>