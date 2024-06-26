import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import type { ErrorMessage } from '~~/types/errors'

export const useAuthStore = defineStore('Auth', () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession()
  const toasts = useToast()
  const { closeLoginModal } = useAuthModal()

  type LoginSchema = z.output<typeof loginSchema>

  const state = reactive<LoginSchema>({
    email: '',
    password: '',
    rememberMe: false
  })

  const loading = ref<boolean>(false)
  const error = ref<ErrorMessage | null>(null)

  async function signIn(event: FormSubmitEvent<LoginSchema>) {
    loading.value = true

    await $fetch('/api/auth/login', {
      method: 'POST',
      body: event.data
    }).then(async (res: any) => {
      await fetch()
      navigateTo('/dashboard')
      toasts.add(res.message)
      closeLoginModal()
    }).catch((err: any) => {
      if (err.statusCode === 403) {
        error.value = err
      } else {
        console.error('Error: ', err)
        toasts.add({
          color: 'red',
          title: 'Error',
          description: err.statusMessage
        })
      }
    }).finally(() => {
      loading.value = false
      setTimeout(() => {
        error.value = null
      }, 5000)
    })
  }

  function clearState() {
    state.email = ''
    state.password = ''
    state.rememberMe = false
  }

  return {
    state,
    error,
    loading,
    signIn,
    loggedIn,
    user,
    session,
    clear,
    fetch,
    clearState
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}