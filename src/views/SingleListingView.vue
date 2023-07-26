<template>
    <main>
        <div class="back-button-desktop">
            <BackButtonDesktop text="Back to overview" route="Houses"/>
        </div>
        
        <Suspense>
            <SingleListingSection :id="id" />
            <template #fallback>
                <SuspenseSingleListing />
            </template>
        </Suspense>

        <aside>
            <RecommendedSection />
            <RecentlyViewedSection />
        </aside>

    </main>
</template>

<script setup>
import RecommendedSection from '@/components/sections/RecommendedSection.vue'
import BackButtonDesktop from '@/components/navigation/BackButtonDesktop.vue';
import SingleListingSection from '@/components/sections/SingleListingSection.vue'
import RecentlyViewedSection from '@/components/sections/RecentlyViewedSection.vue';
import SuspenseSingleListing from '../components/suspense/SuspenseSingleListing.vue';

defineProps({
    id: String
});

</script>

<style lang="css" scoped>
main {
    padding: 0;
    margin-bottom: 4rem;
}

.back-button-desktop {
    display: none;
    grid-column: 1 / span 2;
    margin-bottom: 1rem;
}

@media (min-width: 1024px) {
    main {
        display: grid;
        grid-template-columns: 3fr 2fr;
        padding-inline: 1rem;
        margin: 1.5rem auto 4rem;
    }
    aside {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .back-button-desktop {
        display: block;
    }
}
</style>