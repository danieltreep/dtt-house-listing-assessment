<template>
    <section>
        <h2>Recommended for you</h2>
        <Suspense>
            <ShowcaseList :list="recommendedListings"/>
            <template #fallback>
                <SuspenseList :amount="3"/>
            </template>
        </Suspense>
    </section>
</template>

<script setup>
// External
import { storeToRefs } from 'pinia';

// Stores
import { useRecommendedStore } from '@/stores/recommended';

// Components
import ShowcaseList from '@/components/houseList/ShowcaseList.vue'
import SuspenseList from '@/components/suspense/SuspenseList.vue';

const { recommendedListings } = storeToRefs(useRecommendedStore());

</script>

<style lang="css" scoped>
section {
    padding: 1.5rem;
}
@media (min-width: 1024px) {
    section {
        margin-left: auto;
        min-width: 350px;
        padding: 0;
    }
}
</style>