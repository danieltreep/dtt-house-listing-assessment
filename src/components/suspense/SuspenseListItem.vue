<template>
    <li class="list-item" >
        <div class="image placeholder"></div>
        
        <div class="listing-information">
            
            <div class="details placeholder"></div>
            <div class="details placeholder"></div>
            <div class="details placeholder"></div>
            
        </div>
    </li>
</template>

<script setup>

</script>

<style lang="css" scoped>
.list-item {
    background-color: var(--background-color-2);
    padding: .7rem;
    margin-bottom: 1rem;
    border-radius: var(--border-radius-s);
    display: grid;
    grid-template-columns: 95px 1fr;
    gap: .7rem;
    box-shadow: 0 0 10px #00000010;

}
.image {
    height: 95px;
    aspect-ratio: 1 / 1;
    border-radius: var(--border-radius-s);
    background-color: var(--background-color-1);
}
.listing-information {
    margin: .2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.details {
    height: 14px;
}
.details:first-of-type {
    height: 22px;
}
.placeholder {
    background-color: var(--background-color-1);
    background-image: linear-gradient(
        to right,
        var(--background-color-1) 0%,
        rgb(231, 231, 231) 15%,
        var(--background-color-1) 30%,
        var(--background-color-1) 100%
    );
    background-size: 200% 100%;
    animation: bg-animate 1.5s ease-in-out infinite;
    border-radius: var(--border-radius-s);
}

@media (min-width: 768px) {
    .list-item {
        grid-template-columns: 140px 1fr;
        padding: 1rem;
        gap: 1rem;
    }
    .image {
        height: 140px;
    }
    .details {
        height: 18px;
        background-color: var(--background-color-1);
    }
    .details:first-of-type {
        height: 32px;
    }
}

@keyframes bg-animate {
    0% {
        background-position: 50% 0;
    }
    100% {
        background-position: -100% 0;
    }
}
</style>