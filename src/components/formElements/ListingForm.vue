<template>        
    <form @submit.prevent="handleSubmit">

        <BackButtonDesktop :text="text" :route="route"/>
        <BackButtonMobile />
        
        <h1>{{ title }} listing</h1>
        
        <BaseInput 
            label="Street name*"
            placeholder="Enter the street name"
            name="street"
            v-model="singleListing.location.street"
        />

        <div class="grid-layout">
            <BaseInput 
                type="number"
                label="House number*"
                placeholder="Enter house number"
                name="house-number"
                v-model="singleListing.location.houseNumber"
            />

            <BaseInput 
                label="Addition (optional)"
                placeholder="e.g. A."
                name="addition"
                v-model="singleListing.location.houseNumberAddition"
                :required="false"
            />
        </div>

        <BaseInput 
            label="Postal code*"
            placeholder="e.g. 1000 AA"
            name="postal-code"
            v-model="singleListing.location.zip"
            class="zip"
        />

        <BaseInput 
            label="City*"
            placeholder="e.g. Utrecht"
            name="city"
            v-model="singleListing.location.city"
        />

        <BaseFileInput 
            label="Upload picture (PNG or JPG)*"
            name="image"
            accept="image/png, image/jpeg"
            :image-url="singleListing.image"
            v-model="singleListing.image"
        />

        <BaseInput 
            type="number"
            label="Price*"
            placeholder="e.g. &euro; 150.000"
            name="price"
            v-model="singleListing.price"
        />

        <div class="grid-layout">

            <BaseInput 
                type="number"
                label="Size*"
                placeholder="e.g. 60 m2"
                name="size"
                v-model="singleListing.size"
            />

            <div class="input-wrapper">
                <label for="garage">Garage*</label>
                <select 
                    class="validateInput"
                    name="garage" 
                    id="garage" 
                    placeholder="select" 
                    v-model="singleListing.hasGarage"
                >
                    <option disabled value="select">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <BaseInput 
                type="number"
                label="Bedrooms*"
                placeholder="Enter amount"
                name="bedrooms"
                v-model="singleListing.rooms.bedrooms"
            />

            <BaseInput 
                type="number"
                label="Bathrooms*"
                placeholder="Enter amount"
                name="bathrooms"
                v-model="singleListing.rooms.bathrooms"
            />
        </div>

        <BaseInput 
            type="number"
            label="Construction year*"
            placeholder="e.g. 1990"
            name="construction-year"
            v-model="singleListing.constructionYear"
            class="construction-year-input"
        />
        
        <label for="description">Description*</label>
        <textarea 
            name="description" 
            id="description" 
            cols="30" 
            rows="5" 
            placeholder="Enter description"
            v-model="singleListing.description"
            class="validateInput"
        ></textarea>
        
        <button 
            type="submit" 
            :disabled="!allRequiredFieldsFilledIn"
        >POST</button>
    </form>  
</template>

<script setup>
// External
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

// Components
import BaseFileInput from '@/components/formElements/BaseFileInput.vue';
import BaseInput from '@/components/formElements/BaseInput.vue';
import BackButtonDesktop from '@/components/navigation/BackButtonDesktop.vue'
import BackButtonMobile from '@/components/navigation/BackButtonMobile.vue'

// Composables
import checkFormInputs from '@/composables/checkFormInputs'
import validateForm from '@/composables/validateForm'
import editListing from '@/composables/editListing';
import createListing from '@/composables/createListing';

// Stores
import { useSingleListingStore } from '@/stores/singleListing'

const { singleListing } = storeToRefs(useSingleListingStore())
const { resetSingleListing } = useSingleListingStore()

const router = useRouter()
const props = defineProps({
    title: String,
    route: String,
    text: String
})

// Enable input at the start if all required fields are already filled in
const allRequiredFieldsFilledIn = ref(checkFormInputs())

// When single listing changes, check if all required inputs have a value
watch(singleListing.value, () => {
    
    if (checkFormInputs()) {
        allRequiredFieldsFilledIn.value = true
    } else {
        allRequiredFieldsFilledIn.value = false
    }
});

const handleSubmit = async () => {

    let listingId = singleListing.value.id;

    if (!validateForm()) {
        return
    } else if (props.title === 'Create') {
        listingId = await createListing()
        resetSingleListing()
    } else if (props.title === 'Edit') {
        await editListing(listingId)
    }
    
    router.push({name: 'SingleListing', params: {id: listingId}})
    
};
</script>

<style lang="css" scoped>
    .input-wrapper {
        display: flex;
        flex-direction: column;
    }
    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
    /* This dims the background */
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
        border-radius: var(--border-radius-s);
        margin-top: 2rem;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 1rem;
    }

    @media (max-width: 370px) {
        .grid-layout {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 1116px) {
        h1 {
            text-align: start;
            margin-block: 1rem;
        }
        form {
            margin-left: 0rem;
            padding: 0;
        }
        button[type='submit'] {
            width: calc(50% - 1rem);
            margin-left: auto;
        }
    }
</style>