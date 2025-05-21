<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()

interface Transacao {
    id: number
    description: string
    amount: number
    date: string
    type: string
    category: string
}

const transacoes = ref<Transacao[]>([])

onMounted(async () => {
    try {
        const resposta = await fetch(`http://localhost:8081/api/v1/transactions/${user.id}`)
        const dados = await resposta.json()
        transacoes.value = dados
        console.log(transacoes.value)
    } catch (erro) {
        console.error('Erro ao buscar transações:', erro)
    }
})


async function removerTransacao(id: number) {
    try {
        await fetch(`http://localhost:8081/api/v1/transactions/${id}`, {
            method: 'DELETE'
        })

        transacoes.value = transacoes.value.filter(transacao => transacao.id !== id)

        console.log(`Transação ${id} removida com sucesso!`)
    } catch (erro) {
        console.error('Erro ao deletar transação:', erro)
    }
}

const iconesPorCategoria: Record<string, string> = {
    alimentacao: 'ri-restaurant-line',
    transporte: 'ri-bus-line',
    moradia: 'ri-home-2-line',
    educacao: 'ri-book-open-line',
    lazer: 'ri-gamepad-line',
    saude: 'ri-heart-pulse-line',
    investimento: 'ri-line-chart-line',
    salario: 'ri-wallet-3-line',
    outros: 'ri-more-line'
}

function formatarData(dataStr: string) {
    const [ano, mes, dia] = dataStr.split('-')
    return `${dia}/${mes}/${ano}`
}
</script>

<template>
    <div class="ListMove">
        <h2>Movimentações Recentes</h2>
        <ul class="lista-transacoes">
            <li v-for="(transacao, index) in transacoes" :key="index" :class="transacao.type">
                <div class="icon-delete">
                    <button @click="removerTransacao(transacao.id)">⨯</button>
                </div>
                <div class="body-transacoes">
                    <span class="icone-categoria">
                        <i :class="['ri', iconesPorCategoria[transacao.category]]"></i>
                    </span>
                    <div class="lista-main">
                        <div class="lista-text">
                            <span class="titulo-categoria">{{ transacao.category }}</span>
                            <span class="descricao">{{ transacao.description }}</span>
                        </div>
                        <div class="lista-info">
                            <div class="info">
                                <span class="data">{{ formatarData(transacao.date) }}</span>
                                <span class="valor" :class="transacao.type">
                                    {{ transacao.type === 'income' ? '+' : '-' }} R$
                                    {{ transacao.amount.toFixed(2) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.body-transacoes {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
}

.icon-delete {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.icon-delete button {
    height: 1.5em;
    width: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light-gray);
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-gray);
    transition: 300ms all ease-in-out;

    &:hover {
        color: var(--color-dark);
    }
}

.ListMove {
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: clamp(0.5em, 5vw, 2em);
    background: var(--color-light);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ListMove h2 {
    font-size: 1.25rem;
    color: var(--color-dark-purble);
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}

.lista-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.lista-info {
    display: flex;
    flex-direction: row;
    gap: 2em;
}

.lista-text,
.lista-info .info {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 0.25em;
}

.lista-transacoes {
    list-style: none;
    padding: 0;
    overflow: auto;
}

.lista-transacoes li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #ccc;
    padding: 1em 0;
    gap: 1.25em;
}

.lista-transacoes .titulo-categoria {
    font-weight: bold;
    text-transform: capitalize;
}

.lista-transacoes .descricao {
    font-weight: 400;
    color: var(--color-gray);
}

.lista-transacoes .data {
    color: var(--color-gray);
    font-size: 0.9rem;
    margin-right: 1rem;
}

.lista-transacoes .valor.income {
    color: var(--color-green);
    font-weight: bold;
}

.lista-transacoes .valor.expense {
    color: var(--color-red);
    font-weight: bold;
}

.icone-categoria {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
}

.icone-categoria i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: var(--color-gray);
    color: var(--color-light);
    padding: 0.5em;
    border-radius: 8px;
}

@media (max-width: 550px) and (max-height: 1000px) {
    .lista-main {
        flex-direction: column;
        gap: 0.25em;
    }
}
</style>
