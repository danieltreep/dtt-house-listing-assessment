<template>
    <section class="listing-section">

        <div class="listing-hero">
            <div class="image"></div>

            <BackButtonMobile color="white"/>

        </div>

        <div class="listing-information">

            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            
        </div>
    </section>
</template>

<script setup>

import BackButtonMobile from '@/components/navigation/BackButtonMobile.vue';

</script>

<style lang="css" scoped>
.listing-hero {
    position: relative;
}
.image {
    z-index: -1;
    width: 100%;
    height: 400px;
    background-color: rgb(207, 207, 207);
}
.listing-information {
    background-color: var(--background-color-2);
    padding: 1.5rem;
    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
    translate: 0 -25px;
    margin-bottom: -25px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.placeholder {
    background-color: var(--background-color-1);
    height: 18px;
    border-radius: var(--border-radius-s);
}
.placeholder:first-of-type {
    height: 32px;
}

@media (min-width: 1024px) {
    .listing-information {
        background-color: var(--background-color-2);
        padding: 1.5rem;
        border-radius: 0;
        translate: 0;
        margin-bottom: 0;
    }
}
</style>