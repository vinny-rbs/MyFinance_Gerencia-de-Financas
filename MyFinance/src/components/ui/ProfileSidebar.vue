<script setup lang="ts">



</script>
<template>
    <div class="profilesidebar">
        <div class="profile__image">
            <div class="image__placeholder"></div>
        </div>
        <div class="profile__title">
            <p>Fulano de tal</p>
            <p>Lorem</p>
        </div>
    </div>
</template>


<style scoped>
.profilesidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    border-bottom: 2px solid var(--color-gray);
}

.profile__image {
    max-width: 3em;
    width: clamp(2.5em, 10vw, 3em);

    & img {
        filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(339deg) brightness(115%) contrast(100%);
        max-width: 3em;

    }
}

.profile__title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 1em;
}

.image__placeholder {
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: var(--color-gray);
}
</style>