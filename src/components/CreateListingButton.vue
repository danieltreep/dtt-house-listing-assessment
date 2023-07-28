<template>
    <button class="mobile-button">
        <router-link :to="{name: 'NewListing'}">
            <img src="@/assets/icons/ic_plus_grey@3x.png" alt="Add a house listing">
        </router-link>
    </button>
    <!-- / Only rendered on mobile -->

    <button class="desktop-button">
        <router-link :to="{name: 'NewListing'}">
            <img src="@/assets/icons/ic_plus_white@3x.png" alt="Add a house listing">
            <p>CREATE NEW</p>
        </router-link>
    </button>
    <!-- / Only rendered on desktop -->
</template>

<script setup>

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
    display: none;
}
.desktop-button a {
    display: flex;
    align-items: center;
    padding: .6rem;
    gap: .5rem;
}
.desktop-button p {
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

@media (min-width: 768px) {
    .desktop-button {
        display: inline;
        margin-left: auto;
    }
    .mobile-button {
        display: none;
    }
}
</style>