<template>
    <main>
        <MainHeaderSection title="Houses"/>

        <section>
            <Suspense>
                <HouseListingList :list="filteredResults"/>
                
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

const { resetSingleListing } = useSingleListingStore()
const { filteredResults } = storeToRefs(useFilteredListingsStore())

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
