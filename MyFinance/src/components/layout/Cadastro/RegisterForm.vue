<script setup lang="ts">
import DefaultField from '@/components/actions/fields/DefaultField.vue';
import TermField from '@/components/actions/fields/TermField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import DefaultNotification from '@/components/ui/DefaultNotification.vue';

const router = useRouter()

const formData = reactive({
    nome_Cliente: '',
    email_Cliente: '',
    senha: '',
    confirmarSenha: ''
})

watch(() => formData.email_Cliente, (novoValor) => {
    formData.email_Cliente = novoValor.toLowerCase();
});

const notificationMessage = ref('');
const showNotification = ref(false);

const hideNotification = () => {
    showNotification.value = false;
};


async function enviarFormulario() {
    // Verifica se qualquer campo está vazio
    if (
        !formData.nome_Cliente.trim() ||
        !formData.email_Cliente.trim() ||
        !formData.senha.trim() ||
        !formData.confirmarSenha.trim()
    ) {
        console.log("Por favor, preencha todos os campos.");
        notificationMessage.value = "Por favor, preencha todos os campos.";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
        return;
    }

    // Verifica se as senhas coincidem
    if (formData.senha !== formData.confirmarSenha) {
        console.log("As senhas não conferem.");
        notificationMessage.value = "As senhas não conferem.";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
        return;
    }

    // Envia os dados se tudo estiver correto
    try {
        const resposta = await fetch('http://localhost:8080/cliente/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!resposta.ok) throw new Error('Erro ao enviar formulário.');

        const resultado = await resposta.json();
        console.log('Registro realizado com sucesso:', resultado);
        router.push('/login'); // Redireciona após sucesso

    } catch (erro) {
        console.error('Erro no envio:', erro);
        console.log("As senhas não conferem.");
        notificationMessage.value = "Erro no envio: email já cadastrado ou servidor fora do ar...";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
    }
}

</script>
<template>
    <div class="RegisterForm">
        <form class="form" @submit.prevent="enviarFormulario">
            <div class="form__title">
                <h3>Criar Conta</h3>
                <p>Comece a controlar suas finanças hoje mesmo</p>
            </div>
            <div class="form__fields">
                <DefaultField v-model="formData.nome_Cliente" icon="ri-user-fill" type="text"
                    placeholder="Digite seu nome completo" />
                <DefaultField v-model="formData.email_Cliente" icon="ri-mail-fill" type="email"
                    placeholder="Digite seu e-mail" />
                <DefaultField v-model="formData.senha" icon="ri-lock-fill" type="password"
                    placeholder="Digite sua senha" />
                <DefaultField v-model="formData.confirmarSenha" icon="ri-lock-fill" type="password"
                    placeholder="Confirme sua senha" />
                <TermField />
                <PrimaryButton label="Registrar-se" />
                <div class="form__login">
                    <p>Já possui conta?
                        <router-link to="/login">
                            <strong class="form__login--reffer">Faça login</strong>
                        </router-link>
                    </p>
                </div>
            </div>
        </form>
        <DefaultNotification :message="notificationMessage" :visible="showNotification"
            @update:visible="showNotification = $event" />
    </div>
</template>

<style scoped>
.RegisterForm {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5em;
}

.form {
    min-height: 82vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 2em;
}

.form__title {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.form__fields {
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    gap: 1em;
}

.form__login {
    margin: 1em;
}

.form__login--reffer {
    color: var(--color-purple);
}
</style>