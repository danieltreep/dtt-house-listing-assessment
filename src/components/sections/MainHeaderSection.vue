<template>
    <section>
        <div class="row-1">
            <div class="random-listing">
                <RandomListing />
            </div>
            <h1>{{ title }}</h1>
            <CreateListingButton />
        </div>

        <div class="row-2">
            <SearchBar />
            <SortBar />
        </div>

        <FilterBar />
        
    </section>
</template>

<script setup>
// Components
import SearchBar from '@/components/filterListings/SearchBar.vue';
import SortBar from '@/components/filterListings/SortBar.vue';
import CreateListingButton from '@/components/CreateListingButton.vue';
import FilterBar from '@/components/filterListings/FilterBar.vue';
import RandomListing from '@/components/RandomListing.vue';

defineProps({
    title: String
});

</script>

<style lang="css" scoped>
.row-1 {
    margin: 2rem 0;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: space-between;
}
.row-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.random-listing {
    margin-left: 0;
}

@media (min-width: 768px) {
    .row-1, .row-2 {
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        gap: 1rem;
    }
    .random-listing {
        display: none;
    }
}
</style>