<template>
    <header>
        <img class="logo" src="@/assets/images/img_logo_dtt@3x.png" alt="Doing Things Together logo">
        <nav>
            <router-link :to="{name: 'Houses'}">Houses</router-link>
            <router-link :to="{name: 'About'}">About</router-link>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="css" scoped>
    header {
        background-color: var(--background-color-2);
        margin: 0;
        padding: 1rem;
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
            display: flex;
        }
    }
</style>