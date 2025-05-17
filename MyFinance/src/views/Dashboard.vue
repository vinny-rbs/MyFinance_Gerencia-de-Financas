<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import DefaultSidebar from '@/components/layout/DefaultSidebar.vue'
import CallingCard from '@/components/ui/CallingCard.vue'
import ControlFinance from '@/components/layout/Dashboard/ControlFinance.vue'
import ListMove from '@/components/layout/Dashboard/ListMove.vue'
import BlockButton from '@/components/actions/buttons/BlockButton.vue'
import DefaultModal from '@/components/ui/DefaultModal.vue'

interface Transacao {
    descricao: string
    valor: number
    data: string
    tipo: 'receita' | 'despesa'
    categoria: string;
}

const transacoes = ref<Transacao[]>([])

function adicionarTransacao(transacao: Transacao) {
    transacoes.value.push(transacao)
}

// Salvando as transações no localStorage, posteriormente vai ser retirado na implementação do backend e banco de dados
onMounted(() => {
    const dados = localStorage.getItem('transacoes')
    if (dados) {
        transacoes.value = JSON.parse(dados)
    }
})

watch(transacoes, (novas) => {
    localStorage.setItem('transacoes', JSON.stringify(novas))
}, { deep: true })

const saldo = computed(() => {
    return transacoes.value.reduce((acc, transacao) => {
        return transacao.tipo === 'receita'
            ? acc + transacao.valor
            : acc - transacao.valor
    }, 0)
})

function removerTransacao(index: number) {
    transacoes.value.splice(index, 1)
}

const modalAtivo = ref<string | null>(null)
</script>

<template>
    <div class="dashboard__principal">
        <DefaultSidebar />

        <article>
            <CallingCard :saldo="saldo" />

            <div class="dashboard__hero">
                <ListMove :transacoes="transacoes" @remover="removerTransacao" />
            </div>
        </article>

        <BlockButton icon="ri-add-line" @click="modalAtivo = 'openTransacao'" aria-label="Adicionar nova transação" />

        <Teleport to="body">
            <DefaultModal v-if="modalAtivo === 'openTransacao'" titulo="Nova Transação" @fechar="modalAtivo = null">
                <template #descricao>
                    <ControlFinance @nova-transacao="adicionarTransacao" />
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
