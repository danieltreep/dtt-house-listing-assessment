<template>
    <nav>
        <router-link :to="{name: 'Houses'}">
            <img v-if="page === 'Houses'" src="@/assets/icons/ic_mobile_navigation_home_active@3x.png" alt="Go to the home page">
            <img v-else src="@/assets/icons/ic_mobile_navigation_home@3x.png" alt="Go to the home page">
        </router-link>

        <router-link :to="{name: 'MyListings'}">
            <img v-if="page === 'MyListings'" src="@/assets/icons/ic_mobile_navigation_mylistings_active@3x.png" alt="Go to the about page">
            <img v-else src="@/assets/icons/ic_mobile_navigation_mylistings@3x.png" alt="Go to the about page"> 
        </router-link>

        <router-link :to="{name: 'Favorites'}">
            <img v-if="page === 'Favorites'" src="@/assets/icons/ic_mobile_navigation_favorites_active@3x.png" alt="Go to the about page">
            <img v-else src="@/assets/icons/ic_mobile_navigation_favorites@3x.png" alt="Go to the about page"> 
        </router-link>
        
        <router-link :to="{name: 'About'}">
            <img v-if="page === 'About'" src="@/assets/icons/ic_mobile_navigation_info_active@3x.png" alt="Go to the about page">
            <img v-else src="@/assets/icons/ic_mobile_navigation_info@3x.png" alt="Go to the about page"> 
        </router-link>

    </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

// Update the page ref when the route changes to load the active image
const page = ref('Houses');
const route = useRoute();

watchEffect(() => {
    page.value = route.name;
});

</script>

<style lang="css" scoped>
nav {
    position: fixed;
    inset: auto 0 0 0;
    display: flex;
    justify-content: space-around;
    background-color: var(--background-color-2);
    box-shadow: 0 -4px 10px #00000010;
    z-index: 1;
}
nav a {
    padding: 1rem;
    text-align: center;
}
nav img {
    height: 24px;
    margin: o auto;
}

@media (min-width: 768px) {
    nav {
        display: none;
    }
}
</style>