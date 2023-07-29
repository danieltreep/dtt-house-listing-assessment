<template>
    <button class="mobile-button" @click="router.push({name: 'NewListing'})">
        <img src="@/assets/icons/ic_plus_grey@3x.png" alt="Add a house listing">
    </button>
    <!-- / Only rendered on mobile -->

    <button class="desktop-button" @click="router.push({name: 'NewListing'})">
        <img src="@/assets/icons/ic_plus_white@3x.png" alt="Add a house listing">
        <p>CREATE NEW</p>
    </button>
    <!-- / Only rendered on desktop -->
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="css" scoped>
.mobile-button {
    border: none;
    background-color: transparent;
}
img {
    height: 14px;
}
.mobile-button img {
    height: 18px;
}
.desktop-button {
    background-color: var(--element-color-primary);
    border: none;
    border-radius: var(--border-radius-s);
    align-items: center;
    padding: .6rem;
    gap: .5rem;
    display: none;
}

.desktop-button p {
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

@media (min-width: 768px) {
    .desktop-button {
        display: flex;
        margin-left: auto;
    }
    .mobile-button {
        display: none;
    }
}
</style>