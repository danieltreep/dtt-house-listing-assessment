<template>
    <div>
        <header>
            <router-link :to="{name: 'Houses'}">
                <img src="@/assets/icons/ic_back_grey@3x.png" alt="Go back to the previous page">
            </router-link>
            <h1>Create new listing</h1>
        </header>
        <form @submit.prevent="console.log('submitted')">
            <label for="street">Street name*</label>
            <input type="text" name="street" id="street" placeholder="Enter the street name">

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
            <input type="text" name="price" id="price" placeholder="e.g. &euro;150.000">

            <div class="grid-layout">
                <label for="size">Size*</label>
                <label for="garage">Garage*</label>

                <input type="text" name="size" id="size" placeholder="e.g. 60m2">
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
            <input type="text" name="construction-date" id="construction-date" placeholder="e.g. 1990">

            <label for="description">Description*</label>
            <textarea name="description" id="description" cols="30" rows="5" placeholder="Enter description"></textarea>
            
            <button type="submit" disabled>POST</button>
        </form>
    </div>
</template>

<script setup>


</script>

<style lang="css" scoped>
    header img {
        position: absolute;
        height: 18px;
        left: 0;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        margin-bottom: 60px;
        background-image: url('../assets/images/img_background@3x.png');
        background-position: right bottom;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
    }

    /* This dims the background */
    form::before {
        content: '';
        position: absolute;
        background-color: var(--background-color-1);
        height: 400px;
        width: 100%;
        bottom: 0;
        left: 0;
        opacity: .6;
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
        margin-top: 1rem;
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
</style>