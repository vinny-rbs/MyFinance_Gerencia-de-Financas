<script setup lang="ts">
import LinkButton from '../actions/buttons/LinkButton.vue';
import ProfileSidebar from '../ui/ProfileSidebar.vue';
import BlockButton from '../actions/buttons/BlockButton.vue';

import { ref } from 'vue';

const isSidebarVisible = ref(true);

function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}

</script>
<template>
    <div class="sidebar" :class="{ hidden: !isSidebarVisible }">
        <ProfileSidebar />
        <div class="menu">
            <router-link to="/dashboard">
                <LinkButton icon="ri-line-chart-line" text="Movimento" />
            </router-link>
            <router-link to="/">
                <LinkButton icon="ri-home-4-fill" text="Pagina inicial" />
            </router-link>
            <LinkButton icon="ri-question-fill" text="Ajuda" />
        </div>
        <BlockButton :icon="isSidebarVisible ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'"
            @click="toggleSidebar()" />
    </div>
</template>

<style scoped>
.sidebar {
    height: 100%;
    min-height: 100dvh;
    display: flex;
    max-width: 5em;
    flex-direction: column;
    gap: 1em;
    box-shadow: 1px 0px 12px rgba(150, 150, 150, 0.25);
    border-radius: 0px 16px 16px 0px;
    background-color: var(--color-light);
    position: fixed;
    transition: max-width 750ms cubic-bezier(0.77, 0, 0.175, 1), padding 500ms cubic-bezier(0.77, 0, 0.175, 1);

    z-index: 999;
}

.sidebar.hidden {
    max-width: 100%;
    padding: 2em 0.5em;
}

button {
    top: 50%;
    right: -1.75em;
    position: absolute;

}

.router-link-active {
    font-weight: bold;
    background-color: #EFEFFE;
    border-radius: 12px;
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