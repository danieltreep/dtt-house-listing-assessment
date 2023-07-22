<template>
    <main>
        <div class="form-page">
            <form @submit.prevent="handleSubmit">
                
                <BackButtonDesktop />
                <BackButtonMobile />
                <h1>Create new listing</h1>
                
                <BaseInput 
                    label="Street name*"
                    placeholder="Enter the street name"
                    name="street"
                    v-model="newListing.location.street"
                />
    
                <div class="grid-layout">
                    <BaseInput 
                        type="number"
                        label="House number*"
                        placeholder="Enter house number"
                        name="house-number"
                        v-model="newListing.location.houseNumber"
                    />

                    <BaseInput 
                        label="Addition (optional)"
                        placeholder="e.g. A."
                        name="addition"
                        v-model="newListing.location.houseNumberAddition"
                    />
                </div>
    
                <BaseInput 
                    label="Postal code*"
                    placeholder="e.g. 1000 AA"
                    name="postal-code"
                    v-model="newListing.location.zip"
                />

                <BaseInput 
                    label="City*"
                    placeholder="e.g. Utrecht"
                    name="city"
                    v-model="newListing.location.city"
                />

                <BaseFileInput 
                    label="Upload picture (PNG or JPG)*"
                    name="image"
                    accept="image/png, image/jpeg"
                />

                <BaseInput 
                    type="number"
                    label="Price*"
                    placeholder="e.g. &euro; 150.000"
                    name="price"
                    v-model="newListing.price"
                />
    
                <div class="grid-layout">

                    <BaseInput 
                        type="number"
                        label="Size*"
                        placeholder="e.g. 60 m2"
                        name="size"
                        v-model="newListing.size"
                    />

                    <div class="input-wrapper">
                        <label for="garage">Garage*</label>
                        <select name="garage" id="garage" placeholder="select" v-model="newListing.hasGarage">
                            <option selected disabled>Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <BaseInput 
                        type="number"
                        label="Bedrooms*"
                        placeholder="Enter amount"
                        name="bedrooms"
                        v-model="newListing.rooms.bedrooms"
                    />

                    <BaseInput 
                        type="number"
                        label="Bathrooms*"
                        placeholder="Enter amount"
                        name="bathrooms"
                        v-model="newListing.rooms.bathrooms"
                    />
                </div>

                <!-- Min 1901 -->
                <BaseInput 
                    label="Construction year*"
                    placeholder="e.g. 1990"
                    name="construction-year"
                    v-model="newListing.constructionYear"
                />
               
                <label for="description">Description*</label>
                <textarea name="description" id="description" cols="30" rows="5" placeholder="Enter description"
                    v-model="newListing.description"
                ></textarea>
                
                <button type="submit" >POST</button>
            </form>
        </div>
    </main>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import BaseFileInput from '../components/formElements/BaseFileInput.vue';
import BaseInput from '../components/formElements/BaseInput.vue';
import BackButtonDesktop from '../components/navigation/BackButtonDesktop.vue'
import BackButtonMobile from '../components/navigation/BackButtonMobile.vue'
import { useNewListingStore } from '../stores/newListing';
import createListing from '../composables/createListing';

const { newListing } = storeToRefs(useNewListingStore());
import { useRouter } from 'vue-router'
const router = useRouter()

const handleSubmit = async () => {
    const newListingId = await createListing()
    console.log(newListingId)
    router.push({name: 'SingleListing', params: {id: newListingId}})
};

</script>

<style lang="css" scoped>
    main {
        background-image: url('../assets/images/img_background@3x.png');
        background-position: 0 100%;
        background-size: 70vh;
        background-repeat: no-repeat;
        margin-bottom: 60px;
        padding: 0;
        max-width: none;                    /* Overwrite styles from main.css too show picture on the full background*/
    }
    .input-wrapper {
        display: flex;
        flex-direction: column;
    }
    h1 {
        text-align: center;
    }
    .form-page {
        max-width: 1100px;
        margin: 0 auto;
        padding-block: 1.5rem;
        /* position: relative; */
    }
    /* This dims the background */
    main::before {
        content: '';
        position: absolute;
        background-color: var(--background-color-1);
        height: 70vh;
        width: 100%;
        bottom: 0;
        left: 0;
        opacity: .6;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        position: relative;
        max-width: 400px;
        margin: 0 auto;
    }
    select,
    textarea {
        font-family: 'Open Sans';
        font-size: 12px;
        border: none;
        padding: .8rem 0 .8rem 1rem;
        border-radius: var(--border-radius-s);
        z-index: 1;
    }
    select {
        color: var(--text-color-secondary);
        border-right: .5rem solid transparent;
    }
    button[type='submit'] {
        background-color: var(--element-color-primary);
        border: none;
        padding: .5rem 1rem;
        color: white;
        font-size: 12px;
        font-weight: bold;
        font-family: 'Montserrat';
        border-radius: var(--border-radius-s);
        margin-top: 2rem;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 1rem;
    }

    @media (min-width: 768px) {
        label, 
        input,
        .error {
            font-size: 14px;
        }
        h1 {
            font-size: 18px;
        }
        main {
            margin-bottom: 0;
            /* background-size: 800px; */
            background-position: 150px 120%;
        }
    }
    
    @media (min-width: 1024px) {
        main {
            background-size: 80%;
            background-position: bottom right;
            
            padding: 0;
        }
        main::before {
            display: none;
        }
        h1 {
            text-align: start;
            font-size: 32px;
        }
        form {
            margin-left: 0;
            padding: 0;
        }
    }
</style>