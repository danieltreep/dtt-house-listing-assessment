<template>
    <main>
        <div class="form-page">
            <form @submit.prevent="console.log('submitted')">
                
                <BackButtonDesktop />
                <BackButtonMobile />
                <h1>Create new listing</h1>
                
                <label for="street">Street name*</label>
                <input type="text" name="street" id="street" placeholder="Enter the street name">
    
                <BaseInput 
                    label="Street name*"
                    placeholder="Enter the street name"
                />
    
                <div class="grid-layout">
                    <label for="house-number">House number*</label>
                    <label for="addition">Addition (optional)</label>
    
                    <input type="number" name="house-number" id="house-number" placeholder="Enter house number">
                    <input type="text" name="addition" id="addition" placeholder="e.g. A.">
                </div>
    
                <label for="postal-code">Postal code*</label>
                <input type="text" name="postal-code" id="postal-code" placeholder="e.g. 1000 AA">
    
                <label for="city">City*</label>
                <input type="text" name="city" id="city" placeholder="e.g. Utrecht">
    
                <label for="picture">Upload picture (PNG or JPG)*</label>
                <label for="picture" class="upload-picture" tabindex="0">
                    <img src="@/assets/icons/ic_upload@3x.png" alt="Upload a picture of the listing">
                </label>
                <input hidden type="file" accept="image/png, image/jpeg" name="picture" id="picture">
    
                <label for="price">Price*</label>
                <input type="text" name="price" id="price" placeholder="e.g. &euro; 150.000">
    
                <div class="grid-layout">
                    <label for="size">Size*</label>
                    <label for="garage">Garage*</label>
    
                    <input type="text" name="size" id="size" placeholder="e.g. 60 m2">
                    <select name="garage" id="garage" placeholder="select">
                        <option selected disabled>Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
        
                    <label for="bedrooms">Bedrooms*</label>
                    <label for="bathrooms">Bathrooms*</label>
    
                    <input type="text" name="bedrooms" id="bedrooms" placeholder="Enter amount">
                    <input type="text" name="bathrooms" id="bathrooms" placeholder="Enter amount">
                </div>
    
                <label for="construction-date">Construction date*</label>
                <input type="text" name="construction-date" id="construction-date" placeholder="e.g. 08/04/1990">
    
                <label for="description">Description*</label>
                <textarea name="description" id="description" cols="30" rows="5" placeholder="Enter description"></textarea>
                
                <button type="submit" disabled>POST</button>
            </form>
        </div>
    </main>
</template>

<script setup>
import BaseInput from '../components/BaseInput.vue';
import BackButtonDesktop from '../components/navigation/BackButtonDesktop.vue'
import BackButtonMobile from '../components/navigation/BackButtonMobile.vue'

</script>

<style lang="css" scoped>
    main {
        background-image: url('../assets/images/img_background@3x.png');
        background-position: 0 100%;
        background-size: 70vh;
        background-repeat: no-repeat;
        margin-bottom: 60px;
        padding: 0;
        max-width: none;                    /* Overwrite styles from main.css */
        width: 100vw;
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
    label {
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        margin: 1rem 0 .5rem;
        z-index: 1;
    }
    input,
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

    .upload-picture {
        border: 2px dashed var(--element-color-quartenary);
        aspect-ratio: 1 /1;
        width: fit-content;
        padding: 2rem;
        margin-block: .2rem;
        text-align: center;
    }
    .upload-picture img {
        height: 28px;
    }
    :focus {
        outline-color: var(--element-color-primary);
    }
    :disabled {
        opacity: .5;
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
        }
    }
</style>