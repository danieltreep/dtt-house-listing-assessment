<template>
    <main>
        <div class="form-page">
            <ListingForm title="Edit" text="Back to detail page" route="SingleListing"/>
        </div>
    </main>
</template>

<script setup>
import ListingForm from '../components/formElements/listingForm.vue';
</script>

<style lang="css" scoped>
main {
    background-image: url('../assets/images/img_background@3x.png');
    background-position: 20px 100%;
    background-size: 150%;
    background-repeat: no-repeat;
    padding: 0;
    padding-bottom: 60px;
    max-width: none;                    /* Overwrite styles from main.css too show picture on the full background*/
}
.form-page {
    max-width: 1100px;
    margin: 0 auto;
    padding-block: 1.5rem;
}

@media (min-width: 768px) {
    main {
        padding-bottom: 0;
    }
}

@media (min-width: 1116px) {
    main {
        background-size: 80%;     
        background-position: bottom right;   
        padding: 0;
    }
}
</style>