<template>
    <section>
        <h2>Recently viewed</h2>
        <Suspense>
            <ShowcaseList :list="recentListings.slice(1, 4)"/>
            <template #fallback>
                <SuspenseList :amount="3"/>
            </template>
        </Suspense>
    </section>
</template>

<script setup>
import ShowcaseList from '@/components/houseList/ShowcaseList.vue'
import SuspenseList from '../suspense/SuspenseList.vue';
import { storeToRefs } from 'pinia';

import { useRecentListingsStore } from '@/stores/recentListings';
const { recentListings } = storeToRefs(useRecentListingsStore());

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