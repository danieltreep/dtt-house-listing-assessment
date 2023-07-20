<template>
    <div class="input-wrapper" >
        <label>{{ label }}</label>
        <label for="fileInput" class="upload-picture" tabindex="0" v-show="!imageUrl">
            <img src="@/assets/icons/ic_upload@3x.png" alt="Upload a picture of the listing">
        </label>
        <input 
            type="file"
            id="fileInput"
            ref="fileInput"
            hidden
            v-bind="$attrs"
            @change="handleChange"
        >
        <p v-if="error">Error</p>
    </div>

    <div class="image-preview-container" v-if="imageUrl">
        <img class="image-preview" :src="imageUrl" >
        <img 
            class="reset-image" 
            src="@/assets/icons/ic_clear_white@3x.png" 
            alt="Reset image"
            @click="handleReset"    
        >
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    label: {
        type: String,
        default: ''
    }
});

defineEmits(['update:modelValue'])
const error = ref(null);

const imageUrl = ref('')
const fileInput = ref('fileInput')

// Still a bug when uploading the same image
const handleReset = () => {
    fileInput.value.files = null
    // event.target.files = null
    imageUrl.value = ''
}

const handleChange = (event) => {
    const selected = event.target.files[0]

    if (selected) {
        imageUrl.value = URL.createObjectURL(selected)
        // updateRecipeImage(selected)
    } else {
        imageUrl.value = ''
    }
};

</script>

<style lang="css" scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}
label {
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin: 1rem 0 .7rem;
    z-index: 1;
}

.upload-picture {
    border: 2px dashed var(--element-color-quartenary);
    aspect-ratio: 1 / 1;
    width: fit-content;
    padding: 2rem;
    margin-block: .2rem;
    text-align: center;
}
.upload-picture img {
    height: 28px;
}
.image-preview-container {
    position: relative;
    width: fit-content;
}
.image-preview {
    width: 100px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: var(--border-radius-s);
}
.reset-image {
    height: 32px;
    position: absolute;
    top: -.6rem;
    right: -.6rem;
}
</style>