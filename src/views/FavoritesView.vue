<template>
    <main>
        <h1>Favorites</h1>

        <section>
            <Suspense>
                <HouseListingList :list="favorites"/>
                
                <template #fallback>
                    <SuspenseList :amount="5" />
                </template>
            </Suspense>
        </section>
    </main>
</template>

<script setup>
// External
import { storeToRefs } from 'pinia';

// Components
import HouseListingList from '@/components/houseList/HouseListingList.vue';
import SuspenseList from '@/components/suspense/SuspenseList.vue';

// Stores
import { useFavoritesStore } from '@/stores/favorites';

const { favorites } = storeToRefs(useFavoritesStore());

</script>

<style lang="css" scoped>
h1 {
    text-align: center;
    margin-block: 2rem;
}
main {
    padding-bottom: 4rem;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 2rem;
    }
}   
</style>