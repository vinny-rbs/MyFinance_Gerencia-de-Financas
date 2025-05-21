// src/composables/useAuth.ts
import { reactive } from 'vue'

const storedUser = localStorage.getItem('user')
const user = reactive({
  id: null as number | null,
  nome: '',
  email: '',
})

if (storedUser) {
  try {
    const parsedUser = JSON.parse(storedUser)
    user.id = parsedUser.id
    user.nome = parsedUser.nome
    user.email = parsedUser.email
  } catch (e) {
    console.error('Erro ao carregar usuário do localStorage', e)
  }
}

export function useAuth() {
  const setUser = (data: { id: number; nome: string; email: string }) => {
    user.id = data.id
    user.nome = data.nome
    user.email = data.email

    localStorage.setItem('user', JSON.stringify(data))
  }

  const clearUser = () => {
    user.id = null
    user.nome = ''
    user.email = ''
    localStorage.removeItem('user')
  }

  return {
    user,
    setUser,
    clearUser,
  }
}
