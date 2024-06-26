import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

export const useUsersStore = defineStore('Users', () => {
  type UserSchema = z.output<typeof userSchema>

  const toasts = useToast()

  const users = ref<UserSchema[]>([])
  const loading = ref(true)

  const fetchUsers = async () => {
    await $fetch('/api/users').then((res: any) => {
      users.value = res.users as UserSchema[]
    }).catch((error: any) => {
      console.error('Error:', error)

      toasts.add({
        color: 'red',
        title: 'Error',
        description: error.statusMessage
      })
    }).finally(() => {
      loading.value = false
    })
  }

  return {
    users,
    loading,
    fetchUsers
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}
