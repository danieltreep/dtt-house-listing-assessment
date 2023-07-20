<template>
    <main>
        <div class="back-button-desktop">
            <BackButtonDesktop />
        </div>
        
        <section class="listing-section">
            <div class="listing-hero">
                <img class="hero-image" src="@/assets/images/img_placeholder_house@3x.png" alt="">
                <BackButtonMobile color="white"/>
                <div class="listing-options-mobile">
                    <button>
                        <img src="@/assets/icons/ic_edit_white@3x.png" alt="">
                    </button>
                    <button>
                        <img @click="modalActive = true" src="@/assets/icons/ic_delete_white@3x.png" alt="">
                    </button>
                </div>
            </div>
            <div class="listing-information">
                <h1>Stokvisstraat 132</h1>
    
                <div class="listing-options-desktop">
                    <button>
                        <img src="@/assets/icons/ic_edit@3x.png" alt="">
                    </button>
                    <button>
                        <img @click="modalActive = true" src="@/assets/icons/ic_delete@3x.png" alt="">
                    </button>
                </div>
    
                <div class="listing-details">
                    <img src="@/assets/icons/ic_location@3x.png">
                    <p>1011 AA Amsterdam</p>
                
                    <br>
                
                    <img src="@/assets/icons/ic_price@3x.png">
                    <p>500.000</p>
                
                    <img src="@/assets/icons/ic_size@3x.png">
                    <p>120 m2</p>
    
                    <img src="@/assets/icons/ic_construction_date@3x.png">
                    <p>Built in 1990</p>
    
                    <br>
                
                    <img src="@/assets/icons/ic_bed@3x.png">
                    <p>1</p>
    
                    <img src="@/assets/icons/ic_bath@3x.png">
                    <p>1</p>
    
                    <img src="@/assets/icons/ic_garage@3x.png">
                    <p>Yes</p>
                </div>
    
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet repellat nemo aut labore corporis suscipit non neque, voluptatem illo! Nulla, autem itaque recusandae doloremque cumque dolores quis illo fugit.</p>
            </div>
        </section>
        <RecommendedSection />
        <BaseModal v-if="modalActive" @delete="handleDelete" @close-modal="modalActive = false"/>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import RecommendedSection from '../components/RecommendedSection.vue'
import BackButtonDesktop from '../components/navigation/BackButtonDesktop.vue';
import BackButtonMobile from '../components/navigation/BackButtonMobile.vue';
import BaseModal from '../components/BaseModal.vue';

const modalActive = ref(false);

const handleDelete = () => {
    console.log('deleted')
};

</script>

<style lang="css" scoped>
    main {
        padding: 0;
    }
    .listing-hero {
        position: relative;
    }
    .hero-image {
        z-index: -1;
        width: 100%;
        filter: brightness(80%);
    }
    .listing-options-desktop {
        display: none;
    }
    .listing-options-mobile {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        display: flex;
        gap: 1.5rem;
    }
    .listing-options-mobile img {
        height: 18px;
    }
    
    .listing-information {
        background-color: var(--background-color-2);
        padding: 1.5rem;
        border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
        translate: 0 -50px;
        margin-bottom: -50px;
    }
    .listing-information img {
        height: 14px;
        margin-right: .5rem;
    }
    .listing-details {
        margin-block: .5rem;
    }
    .listing-details p {
        line-height: 2rem;
        display: inline; 
        margin-right: 1.5rem;
        font-weight: 600;
        color: var(--text-color-secondary);
    }
    .description {
        color: var(--text-color-secondary);
        line-height: 1.5;
    }

    button {
        background-color: transparent;
        border: none;
    }
    .back-button-desktop {
        grid-column: 1 / span 2;
    }
    
    @media (min-width: 1024px) {
        main {
            display: grid;
            grid-template-columns: 3fr 2fr;
            padding-inline: 1rem;
        }
        .listing-information {
            background-color: var(--background-color-2);
            padding: 1.5rem;
            border-radius: 0;
            translate: 0;
            margin-bottom: 0;
        }
        .listing-options-desktop {
            display: flex;
            position: absolute;
            top: 2rem;
            right: 2rem;
            gap: 1rem;
        }       
        .listing-options-desktop img {
            height: 18px;
        }
        .listing-options-mobile {
            display: none;
        }
    }
</style>