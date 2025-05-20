<script setup lang="ts">
import { ref } from 'vue'
import DefaultSidebar from '@/components/layout/DefaultSidebar.vue'
import CallingCard from '@/components/ui/CallingCard.vue'
import ControlFinance from '@/components/layout/Dashboard/ControlFinance.vue'
import ListMove from '@/components/layout/Dashboard/ListMove.vue'
import BlockButton from '@/components/actions/buttons/BlockButton.vue'
import DefaultModal from '@/components/ui/DefaultModal.vue'

const modalAtivo = ref(null)
</script>

<template>
    <div class="dashboard__principal">
        <DefaultSidebar />

        <article>
            <CallingCard />

            <div class="dashboard__hero">
                <ListMove />
            </div>
        </article>

        <BlockButton icon="ri-add-line" @click="modalAtivo = 'openTransacao'" />

        <Teleport to="body">
            <DefaultModal v-if="modalAtivo === 'openTransacao'" titulo="Nova Transação" @fechar="modalAtivo = null">
                <template #descricao>
                    <ControlFinance />
                </template>
            </DefaultModal>
        </Teleport>
    </div>
</template>

<style scoped>
.dashboard__principal {
    height: auto;
    display: flex;
    position: relative;
}

article {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: clamp(1em, 5vw, 2em);
    gap: 2em;
    padding-left: clamp(6em, 25vw, 7em);
}

.dashboard__hero {
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2em;
    overflow-y: auto;
}

button {
    bottom: 2em;
    right: 2em;
    position: fixed;
}

@media (max-width: 884px) and (max-height: 1280px) {
    .dashboard__hero {
        flex-direction: column;
    }
}
</style>
