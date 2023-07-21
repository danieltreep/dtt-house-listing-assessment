<template>
    <button class="desktop" @click="router.push({name: 'Houses'})" >
        <img src="@/assets/icons/ic_back_grey@3x.png" alt="Go back to overview">
        <p>Back to overview</p>
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style lang="css" scoped>
button {
    display: none;
}

@media (min-width: 1024px) {
    button {
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: 1rem 0;
    }
    button p {
        font-weight: bold;
        font-weight: 16px;
        font-family: 'Montserrat', sans-serif;
    }
    button img {
        height: 18px;
    }
}
</style>