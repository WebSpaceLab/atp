import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import type { ErrorMessage } from '~~/types/errors'

export const useRegisterStore = defineStore('Register', () => {
  type RegisterSchema = z.output<typeof registerSchema>
  const { toggleRegisterToLogin } = useAuthModal()
  const toasts = useToast()

  const state = reactive<RegisterSchema>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAgree: false,
  })

  const loading = ref<boolean>(false)
  const error = ref<ErrorMessage | null>(null)

  async function register(event: FormSubmitEvent<RegisterSchema>) {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: event.data
    }).then(async (res: any) => {
      clear()

      //TODO - CHange toggleRegisterToLogin to a toggleRegisterToVerification after send email to user. For now I call the toggleRegisterToLogin method to switch the form from register to login.   
      toggleRegisterToLogin()
      toasts.add(res.message)
    }).catch((err: any) => {
      if (err.statusCode === 409) {
        error.value = err
      } else {
        console.error(error)
        toasts.add({
          title: 'Error',
          description: err.statusMessage,
          color: 'red'
        })
      }
    }).finally(() => {
      loading.value = false
      setTimeout(() => {
        error.value = null
      }, 5000)
    })
  }

  function clear() {
    state.username = ''
    state.firstName = ''
    state.lastName = ''
    state.email = ''
    state.password = ''
    state.confirmPassword = ''
    state.isAgree = false
  }

  return {
    state,
    error,
    loading,
    register,
    clear
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRegisterStore, import.meta.hot))
}