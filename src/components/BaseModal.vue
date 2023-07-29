<template>
    <Teleport to="body">
        <Transition name="open">
            <div 
                v-if="modalActive" 
                class="modal-background" 
                @keydown.esc="modalActive = false" 
            >
                <dialog open>
                    <div v-if="!confirmDeletion" class="delete-listing-dialog" >
                        <h2>Delete listing</h2>
                        <p>Are you sure you want to delete this listing? <br> This action cannot be undone.</p>

                        <p class="error-message" v-if="error">Something went wrong...</p>
                        
                        <button @click="handleDelete" class="delete">{{ isPending ? 'Deleting...' : 'YES, DELETE'}}</button>
                        <button @click="modalActive = false" class="return">GO BACK</button>
                    </div>

                    <div class="confirmDeletion" v-if="confirmDeletion">
                        <h2>The listing has been deleted</h2>
                        <button @click="handleConfirm" class="return">GO BACK</button>
                    </div>
                </dialog>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// Stores
import { useListingsStore } from '@/stores/listings'
import { useModalStore } from '@/stores/modal'
import { useRecentListingsStore } from '@/stores/recentListings';
import { useFavoritesStore } from '@/stores/favorites';

// Composables
import deleteListing from '@/composables/deleteListing';
import { ref } from 'vue';

const { modalActive, toDeleteListingId } = storeToRefs(useModalStore())
const { deleteListingStore } = useListingsStore();
const { deleteRecentListing } = useRecentListingsStore()
const { deleteFavorite } = useFavoritesStore()

const router = useRouter();

const error = ref(false)
const confirmDeletion = ref(false)
const isPending = ref(false)

// Delete listing from store, recent listings, favorites if deletion from API is succesful
const handleDelete = async () => {
    isPending.value = true
    error.value = await deleteListing(toDeleteListingId.value)

    if (error.value) {
        isPending.value = false
        return
    } else {
        deleteListingStore(toDeleteListingId.value)
        deleteRecentListing(toDeleteListingId.value)
        deleteFavorite(toDeleteListingId.value)
        confirmDeletion.value = true
        isPending.value = false
    }
};

const handleConfirm = () => {
    modalActive.value = false
    router.push({name: 'Houses'})
};

</script>

<style lang="css" scoped>
.modal-background {
    position: fixed;
    display: flex;
    align-items: center;
    inset: 0 0 0 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.25);
}
dialog {
    padding: 2rem 2.5rem;
    border-radius: var(--border-radius-m);
    border: none;
    margin: 0 auto;
    text-align: center;
    
}
.delete-listing-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
h2 {
    font-size: 18px;
    margin-bottom: 1rem;
}
button {
    padding: .5rem;
    width: 250px;
    border: none;
    border-radius: var(--border-radius-s);
    color: white;
    font-size: 14px;
}
button.delete {
    background-color: var(--element-color-primary);
}
button.return {
    background-color: var(--element-color-secondary);
}
p {
    color: var(--text-color-secondary);
}

@media (min-width: 768px) {
    dialog {
        padding: 4rem 4.5rem;
    }
    h2 {
        font-size: 24px;
    }
}

/* Transition effects of modal if no preference for reduced motion */
@media (prefers-reduced-motion: no-preference) {
     
    .open-enter-from,
    .open-leave-to {
        scale: 1.1;
        opacity: 0;
    }
    .open-enter-active,
    .open-leave-active {
        transition: all .3s ease;
    }
}
</style>