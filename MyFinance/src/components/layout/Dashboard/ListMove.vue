<script setup lang="ts">
defineProps<{
    transacoes: {
        descricao: string
        valor: number
        data: string
        tipo: string
        categoria: string
    }[]
}>()

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
            <li v-for="(transacao, index) in transacoes" :key="index" :class="transacao.tipo">
                <span class="icone-categoria">
                    <i :class="['ri', iconesPorCategoria[transacao.categoria]]"></i>
                </span>
                <div class="lista-main">
                    <div class="lista-text">
                        <span class="titulo-categoria"> {{ transacao.categoria }}</span>
                        <span class="descricao">{{ transacao.descricao }}</span>
                    </div>
                    <div class="lista-info">
                        <span class="data">{{ formatarData(transacao.data) }}</span>
                        <span class="valor" :class="transacao.tipo">
                            {{ transacao.tipo === 'receita' ? '+' : '-' }} R$ {{ transacao.valor.toFixed(2) }}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.ListMove {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    background: var(--color-light);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    & h2 {
        font-size: 1.25rem;
        color: var(--color-dark-purble);
    }
}

.lista-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.lista-text,
.lista-info {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 0.25em;
}

.lista-transacoes {
    list-style: none;
    padding: 0;
}

.lista-transacoes li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #ccc;
    padding: 1em 0;
    gap: 1.5em;
}

.lista-transacoes .titulo-categoria {
    flex: 1;
    font-weight: bold;
    text-transform: capitalize;
}

.lista-transacoes .descricao {
    flex: 1;
    font-weight: 400;
    color: var(--color-gray);
}

.lista-transacoes .data {
    color: var(--color-gray);
    font-size: 0.9rem;
    margin-right: 1rem;
}

.lista-transacoes .valor.receita {
    color: green;
    font-weight: bold;
}

.lista-transacoes .valor.despesa {
    color: red;
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
</style>
