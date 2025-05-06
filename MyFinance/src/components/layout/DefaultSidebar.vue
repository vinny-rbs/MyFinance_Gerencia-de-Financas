<script setup lang="ts">
import LinkButton from '../actions/buttons/LinkButton.vue';
import ProfileSidebar from '../ui/ProfileSidebar.vue';


</script>
<template>
    <div class="sidebar">
        <ProfileSidebar />
        <div class="menu">
            <LinkButton icon="ri-line-chart-line" text="Movimento" />
            <router-link to="/">
                <LinkButton icon="ri-home-4-fill" text="Inicio" />
            </router-link>
            <LinkButton icon="ri-question-fill" text="Ajuda" />
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    box-shadow: 1px 0px 12px rgba(150, 150, 150, 0.25);
    border-radius: 0px 16px 16px 0px;
    background-color: var(--color-light);
}

.sidebar__image {
    padding: 1em;
}

img {
    max-width: 2em;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em;
}
</style>