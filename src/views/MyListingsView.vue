<template>
    <main>
        <MainHeaderSection title="My Listings"/>

        <section>
            <Suspense>
                <HouseListingList :list="listingsMadeByMe"/>
                
                <template #fallback>
                    <SuspenseList :amount="5"/>
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
import SuspenseList from '@/components/suspense/SuspenseList.vue';

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
.no-listings {
    text-align: center;
}
.no-listings h2 {
    margin: 3rem 0 1rem;
}
button {
    border: 2px solid var(--element-color-primary);
    background-color: transparent;
    padding: .5rem 1rem;
    border-radius: var(--border-radius-s);
    font-size: 14px;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 2rem;
    }
}
</style>
