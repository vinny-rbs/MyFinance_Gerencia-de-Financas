<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import DefaultField from '@/components/actions/fields/DefaultField.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import DefaultNotification from '@/components/ui/DefaultNotification.vue';

const notificationMessage = ref('');
const showNotification = ref(false);

const hideNotification = () => {
    showNotification.value = false;
};

const router = useRouter();

const formData = reactive({
    //Lembrar de mudar nomes das variaveis quando trocar de API
    email_Cliente: '',
    senha: ''
});

watch(() => formData.email_Cliente, (novoValor) => {
    formData.email_Cliente = novoValor.toLowerCase();
});

async function login() {
    // Verificação de campos vazios
    if (!formData.email_Cliente.trim() || !formData.senha.trim()) {
        console.log("Por favor, preencha todos os campos.");
        notificationMessage.value = "Por favor, preencha todos os campos.";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
        return;
    }

    console.log("Dados enviados:", formData);

    try {
        const resposta = await fetch('http://localhost:8080/cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!resposta.ok) throw new Error('Credenciais inválidas.');

        const resultado = await resposta.json();
        console.log('Login bem-sucedido:', resultado);

        // Redireciona após sucesso
        router.push('/'); // ajuste essa rota conforme sua aplicação

    } catch (erro) {
        console.error('Erro ao fazer login:', erro);
        notificationMessage.value = "Erro ao fazer login. Verifique se está correto o email ou a senha.";
        showNotification.value = true;
        setTimeout(hideNotification, 3000);
    }
}
</script>
<template>
    <div class="LoginForm">
        <form class="form" @submit.prevent="login">
            <div class="form__title">
                <h3>Login</h3>
                <p>Acesse sua conta para gerenciar suas finanças</p>
            </div>
            <div class="form__fields">
                <DefaultField v-model="formData.email_Cliente" icon="ri-mail-fill" type="email"
                    placeholder="Digite seu e-mail" />
                <DefaultField v-model="formData.senha" icon="ri-lock-fill" type="password"
                    placeholder="Digite sua senha" />
                <div class="forgot_password">
                    <p><strong class="forgot_password--reffer">Esqueceu sua senha?</strong></p>
                </div>
                <PrimaryButton label="Entrar" />
                <div class="form__login">
                    <p>Não tem uma conta?
                        <router-link to="/cadastro">
                            <strong class="form__login--reffer">Criar conta</strong>
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
.LoginForm {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    gap: 1em;
}

.forgot_password {
    text-align: start;
}

.forgot_password strong {
    font-weight: 500;
    font-size: 0.85rem;
    color: var(--color-dark);
}

.form__login {
    margin: 1em;
}

.form__login--reffer {
    color: var(--color-purple);
}
</style>

<style>
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--color-light) inset !important;
    transition: background-color 9999s ease-in-out 0s;
}
</style>