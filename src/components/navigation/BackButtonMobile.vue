<template>
    <button class="mobile" @click.prevent="goBack" >
        <img :src="imageUrl" alt="Go back to overview" >
    </button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    color: {
        type: String,
        default: 'grey'
    }
});

const imageUrl = ref(new URL(`/src/assets/icons/ic_back_${props.color}@3x.png`, import.meta.url).href)

const router = useRouter()

// I added prevent to the click handler because of unwanted submission, describe better
const goBack = () => router.go(-1);

</script>

<style lang="css" scoped>
button {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    border: none;
    background-color: transparent;
    align-self: center;
}
button p {
    font-weight: bold;
    font-weight: 16px;
    font-family: 'Montserrat', sans-serif;
}
button img {
    height: 18px;
}

@media (min-width: 1024px) {
    .mobile {
        display: none;
    }
}
</style>