<template>
    <section>
        <div class="row-1">
            <h1>{{ title }}</h1>
            <CreateListingButton />
        </div>

        <div class="row-2">
            <SearchBar />
            <SortBar />
        </div>
    </section>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
import SortBar from '@/components/SortBar.vue';
import CreateListingButton from '@/components/CreateListingButton.vue';

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
    justify-content: center;
}
.row-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    .row-1, .row-2 {
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        gap: 1rem;
    }
}
</style>