<template>
    <header>
        <div class="header-content">
            <img class="logo" src="@/assets/images/img_logo_dtt@3x.png" alt="Doing Things Together logo">
            <nav>
                <router-link :to="{name: 'Houses'}" :class="route.path.includes('houses') ? 'router-link-active' : ''">Houses</router-link>
                <router-link :to="{name: 'MyListings'}">My Listings</router-link>
                <router-link :to="{name: 'About'}">About</router-link>
            </nav>
        </div>
    </header>
</template>

<script setup>

// Add active router class to all links that include houses
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style lang="css" scoped>
header {
    background-color: var(--background-color-2);
    padding-block: 1rem;
    display: none;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 10px #00000010;
}
.header-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    gap: 3rem;
    display: none;
}
.logo {
    height: 40px;
}
nav a {
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 18px;
    margin-right: 3rem;
    color: #999;
    font-weight: normal;
}
.router-link-active {
    color: var(--text-color-primary);
    font-weight: bold;
}

@media (min-width: 768px) {
    header {
        display: block;
    }
    .header-content {
        display: flex;
        position: sticky;
        top: 0;
        z-index: 1;
        padding-inline: 1rem;
    }
}
</style>