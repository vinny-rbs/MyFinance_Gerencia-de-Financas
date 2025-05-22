<script setup lang="ts">
import LinkButton from '../actions/buttons/LinkButton.vue';
import ProfileSidebar from '../ui/ProfileSidebar.vue';
import BlockButton from '../actions/buttons/BlockButton.vue';
import PrimaryButton from '../actions/buttons/PrimaryButton.vue';
import DefaultButton from '../actions/buttons/DefaultButton.vue';
import DefaultModal from '@/components/ui/DefaultModal.vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { ref } from 'vue';

const { clearUser } = useAuth()
const router = useRouter();
const modalAtivo = ref()

const isSidebarVisible = ref(true);

function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}

const logout = () => {
    clearUser()
    router.push('/')
}

</script>
<template>
    <div class="sidebar" :class="{ hidden: !isSidebarVisible }">
        <div class="menu">
            <ProfileSidebar />
            <router-link to="/dashboard">
                <LinkButton icon="ri-line-chart-line" text="Movimento" />
            </router-link>
            <router-link to="/">
                <LinkButton icon="ri-home-4-fill" text="Pagina inicial" />
            </router-link>
            <LinkButton icon="ri-question-fill" text="Ajuda" />
        </div>
        <div class="logout">
            <LinkButton icon="ri-logout-box-r-line" text="Sair da conta" @click="modalAtivo = 'logoutConfirm'" />
            <Teleport to="body">
                <DefaultModal v-if="modalAtivo === 'logoutConfirm'" titulo="Sair da conta" @fechar="modalAtivo = null">
                    <template #descricao>
                        <div class="modal__info">
                            <div class="buttons">
                                <DefaultButton label="Cancelar" @click="modalAtivo = null" />
                                <PrimaryButton label="Confirmar" @click="logout()" />
                            </div>
                        </div>
                    </template>
                </DefaultModal>
            </Teleport>
        </div>
        <BlockButton :icon="isSidebarVisible ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'"
            @click="toggleSidebar()" />
    </div>
</template>

<style scoped>
.sidebar {
    height: 100%;
    max-height: 100dvh;
    display: flex;
    max-width: 5em;
    justify-content: space-between;
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

.menu,
.logout {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em;
}

.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h3 {
        color: var(--color-gray);
        font-size: 1.25rem;
    }
}

.modal__description {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.buttons {
    display: flex;
}

.modal__description button {
    position: static;
    margin-top: 0;
}
</style>