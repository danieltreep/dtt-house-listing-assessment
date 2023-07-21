<template>
    <main>
        <div class="back-button-desktop">
            <BackButtonDesktop />
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
import RecommendedSection from '../components/RecommendedSection.vue'
import BackButtonDesktop from '../components/navigation/BackButtonDesktop.vue';
import SingleListing from '@/components/SingleListing.vue'

defineProps({
    id: String
});
</script>

<style lang="css" scoped>
    main {
        padding: 0;
    }
    
    .back-button-desktop {
        grid-column: 1 / span 2;
    }
    
    @media (min-width: 1024px) {
        main {
            display: grid;
            grid-template-columns: 3fr 2fr;
            padding-inline: 1rem;
        }
    }
</style>