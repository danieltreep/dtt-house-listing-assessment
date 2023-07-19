<template>
    <ul>
        <HouseListingListItem />
        <HouseListingListItem />
        <HouseListingListItem />
    </ul>
</template>

<script setup>
import HouseListingListItem from './HouseListingListItem.vue';

</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>