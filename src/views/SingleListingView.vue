<template>
    <main>
        <div class="back-button-desktop">
            <BackButtonDesktop text="Back to overview" route="Houses"/>
        </div>
        
        <Suspense>
            <SingleListing :id="id" />
            <template #fallback>
                <div>
                    <p>loading...</p>
                </div>
            </template>
        </Suspense>

        <RecommendedSection />
    </main>
</template>

<script setup>
import RecommendedSection from '@/components/RecommendedSection.vue'
import BackButtonDesktop from '@/components/navigation/BackButtonDesktop.vue';
import SingleListing from '@/components/SingleListing.vue'

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
}
</style>