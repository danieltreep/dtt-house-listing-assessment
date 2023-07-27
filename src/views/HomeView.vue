<template>
    <main>
        <MainHeaderSection title="Houses"/>

        <section>
            <Suspense>
                <HouseListingList :list="matchingResults"/>
                
                <template #fallback>
                    <SuspenseList :amount="5" />
                </template>
            </Suspense>
        </section>
    </main>
</template>
  
<script setup>
// External
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

// Components
import HouseListingList from '@/components/houseList/HouseListingList.vue';
import MainHeaderSection from '@/components/sections/MainHeaderSection.vue';
import SuspenseList from '@/components/suspense/SuspenseList.vue';

// Stores
import { useFilteredListingsStore } from '@/stores/filteredListings';
import { useSingleListingStore } from '@/stores/singleListing'
import { useFavoritesStore } from '../stores/favorites';

const { resetSingleListing } = useSingleListingStore()
const { matchingResults } = storeToRefs(useFilteredListingsStore())
const { getFavoritesFromStorage } = useFavoritesStore()

// Reset single listing store when going back to home page
onMounted(() => {
    resetSingleListing()
    getFavoritesFromStorage()
});

</script>

<style scoped>
main {
    padding-bottom: 4rem;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 2rem;
    }
}
</style>
