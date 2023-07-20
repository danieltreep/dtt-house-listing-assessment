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
        .listing-information {
            background-color: var(--background-color-2);
            padding: 1.5rem;
            border-radius: 0;
            translate: 0;
            margin-bottom: 0;
        }
        .listing-options-desktop {
            display: flex;
            position: absolute;
            top: 2rem;
            right: 2rem;
            gap: 1rem;
        }       
        .listing-options-desktop img {
            height: 18px;
        }
        .listing-options-mobile {
            display: none;
        }
    }
</style>