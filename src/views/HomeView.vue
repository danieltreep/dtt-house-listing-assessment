<template>
    <main>
        <div class="row-1">
            <h1>Houses</h1>
            <CreateListingButton />
        </div>

        <div class="row-2">
            <SearchBar />
            <SortBar />
        </div>

        <section>
            <Suspense>
                <HouseListingList />
                
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

// COmponents
import SearchBar from '../components/SearchBar.vue';
import SortBar from '../components/SortBar.vue';
import HouseListingList from '../components/houseList/HouseListingList.vue';
import CreateListingButton from '../components/CreateListingButton.vue';

// Stores
import { useSingleListingStore } from '@/stores/singleListing'

const { resetSingleListing } = useSingleListingStore()

// Reset single listing store when going back to home page
onMounted(() => {
    resetSingleListing()
});

</script>

<style scoped>
main {
    padding-bottom: 4rem;
}
.row-1 {
    margin: 2rem 0;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
}
.row-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 2rem;
        }
    .row-1, .row-2 {
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        gap: 1rem;
    }
}
</style>
