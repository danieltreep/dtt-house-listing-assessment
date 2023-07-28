<template>
    <section>
        <h2>Recommended for you</h2>
        <Suspense>
            <ShowcaseList />
            <template #fallback>
                <div >
                    <p>loading</p>
                </div>
            </template>
        </Suspense>
    </section>
</template>

<script setup>
import ShowcaseList from '@/components/houseList/ShowcaseList.vue'
import { useRecommendedStore } from '@/stores/recommended';
import { storeToRefs } from 'pinia';

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