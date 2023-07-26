<template>
    <main>
        <MainHeaderSection title="My Listings"/>

        <section>
            <Suspense>
                <HouseListingList :list="listingsMadeByMe"/>
                
                <template #fallback>
                    <div>
                    <p>Loading</p>
                    </div>
                </template>
            </Suspense>
        </section>
    </main>
</template>
  
<script setup>
// External
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'

// Components
import HouseListingList from '@/components/houseList/HouseListingList.vue';
import MainHeaderSection from '@/components/sections/MainHeaderSection.vue';

// Stores
import { useSingleListingStore } from '@/stores/singleListing'
import { useFilteredListingsStore } from '@/stores/filteredListings'

const { resetSingleListing } = useSingleListingStore()
const { listingsMadeByMe } = storeToRefs(useFilteredListingsStore());

// Reset single listing store when going back to home page
onMounted(() => {
    resetSingleListing()
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
