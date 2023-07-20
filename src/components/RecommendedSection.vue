<template>
    <section class="recommended-section">
        <h2>Recommended for you</h2>
        <HouseListingList />
    </section>
</template>

<script setup>
import HouseListingList from '@/components/houseList/HouseListingList.vue'
</script>

<style lang="css" scoped>
.recommended-section {
    padding: 1.5rem;
}
@media (min-width: 1024px) {
    .recommended-section {
        margin-left: auto;
        min-width: 350px;
        padding: 0;
    }
}
</style>