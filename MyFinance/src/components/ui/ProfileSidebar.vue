<script setup lang="ts">



</script>
<template>
    <div class="profilesidebar">
        <div class="profile__image">
            <div class="image__placeholder">
                <img src="../../assets/imgs/ProfilePlaceholder.jpg" alt="">
            </div>
        </div>
        <div class="profile__title">
            <p>NamePlaceholder</p>
            <p>Test</p>
        </div>
    </div>
</template>


<style scoped>
.profilesidebar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 0.75em;
}

.profile__image {
    max-width: 3em;
    width: clamp(2.5em, 10vw, 3em);

    & img {
        max-width: 3em;
        border-radius: 50%;
        object-fit: contain;
        padding: 0.25em;
    }
}

.profile__title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 0.5em;

    & p {
        color: var(--color-dark-purble);
    }
}

.image__placeholder {
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: var(--color-dark-purble);
}
</style>