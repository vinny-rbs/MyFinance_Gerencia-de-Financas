<script setup lang="ts">
import TheHeader from '../components/layout/TheHeader.vue';
import Hero from '../components/layout/LaddingPageComponents/Hero.vue';
import UserExperience from '../components/layout/LaddingPageComponents/UserExperience.vue';
import UserBenefits from '../components/layout/LaddingPageComponents/UserBenefits.vue';
import TheFooter from '@/components/layout/LaddingPageComponents/TheFooter.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'
import DefaultButton from '@/components/actions/buttons/DefaultButton.vue'

import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()

const isLoggedIn = computed(() => !!user.id)

</script>

<template>
  <div>
    <TheHeader>
      <template #botoes>
        <!-- Bloco condicional dentro de um único slot -->
        <div v-if="!isLoggedIn">
          <router-link to="/login">
            <DefaultButton label="Entrar" />
          </router-link>
          <router-link to="/cadastro">
            <PrimaryButton label="Cadastrar" />
          </router-link>
        </div>
        <div v-else>
          <router-link to="/dashboard">
            <PrimaryButton label="Dashboard" />
          </router-link>
        </div>
      </template>
    </TheHeader>

    <Hero />
    <UserExperience />
    <UserBenefits />
    <TheFooter />
  </div>
</template>

<style scoped>
div {
  display: contents;
}
</style>