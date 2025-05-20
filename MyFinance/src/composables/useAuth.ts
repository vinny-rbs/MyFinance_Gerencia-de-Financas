import { reactive } from 'vue'

const user = reactive({
  id: null as number | null,
  nome: '',
  email: '',
})

export function useAuth() {
  const setUser = (data: { id: number; nome: string; email: string }) => {
    user.id = data.id
    user.nome = data.nome
    user.email = data.email
  }

  const clearUser = () => {
    user.id = null
    user.nome = ''
    user.email = ''
  }

  return {
    user,
    setUser,
    clearUser,
  }
}
