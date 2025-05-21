<script setup>
import { ref } from 'vue'
import FlatField from '@/components/actions/fields/FlatField.vue'
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'
import DefaultNotification from '@/components/ui/DefaultNotification.vue';
import { useAuth } from '@/composables/useAuth'

//Codigos do modal de notificacao
const notificationMessage = ref('');
const showNotification = ref(false);

const hideNotification = () => {
    showNotification.value = false;
};

//Codigos da Transacao
const emit = defineEmits(['nova-transacao'])

const description = ref('')
const amount = ref(null)
const date = ref('')
const type = ref('')
const category = ref('')

const { user } = useAuth()

async function adicionarTransacao() {
    if (!amount.value || !date.value || !type.value || !category.value) {
        notificationMessage.value = "Por favor, preencha todos os campos.";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
        return
    }

    const novaTransacao = {
        description: description.value,
        amount: Number(amount.value),
        date: date.value,
        type: type.value,
        category: category.value,
        user_id: user.id,
    }

    console.log("Usuário:", user)
    console.log("Nova transação:", novaTransacao)


    try {
        const resposta = await fetch('http://localhost:8081/api/v1/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaTransacao),
        })

        if (!resposta.ok) throw new Error('Erro ao salvar a transação')

        emit('nova-transacao', novaTransacao)

        description.value = ''
        amount.value = null
        date.value = ''
        type.value = ''
        category.value = ''
    }
    catch (erro) {
        console.log("Erro no envio da transação");
    }


}

</script>

<template>
    <div class="transacoes-container">
        <form @submit.prevent="adicionarTransacao" class="formulario">
            <FlatField v-model="type" info="Tipo de Transação" tag="select">
                <template #adicional>
                    <option value="" selected disabled>Tipo</option>
                    <option value="income">Receita</option>
                    <option value="expense">Despesa</option>
                </template>
            </FlatField>
            <FlatField v-model.number="amount" info="Valor (R$)" tag="input" type="number" placeholder="R$ 0,00" />
            <FlatField v-model="category" info="Categorias" tag="select">
                <template #adicional>
                    <option value="" selected disabled>Categorias</option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="transporte">Transporte</option>
                    <option value="moradia">Moradia</option>
                    <option value="educacao">Educação</option>
                    <option value="lazer">Lazer</option>
                    <option value="saude">Saúde</option>
                    <option value="investimento">Investimentos</option>
                    <option value="salario">Salário</option>
                    <option value="outros">Outros</option>
                </template>
            </FlatField>
            <FlatField v-model="date" info="Data" tag="input" type="date" />
            <FlatField v-model="description" info="Descrição" tag="textarea"
                placeholder="Digite sua mensagem aqui..." />
            <PrimaryButton label="Adicionar" />
        </form>
    </div>
    <DefaultNotification :message="notificationMessage" :visible="showNotification"
        @update:visible="showNotification = $event" />
</template>

<style scoped>
.transacoes-container {
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background: var(--color-light);
    border-radius: 12px;

    & h2 {
        font-size: 1.25rem;
        color: var(--color-dark-purble);
    }
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & button {
        margin-top: 1em;
    }
}
</style>