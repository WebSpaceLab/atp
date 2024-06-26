type AuthModalState = {
  isOpenRegister: boolean
  isOpenLogin: boolean
}

export const useAuthModal = () => {
  const authModal = useState<AuthModalState>('auth_modal', () => ({
    isOpenRegister: false,
    isOpenLogin: false
  }))

  const closeRegisterModal = () => {
    authModal.value.isOpenRegister = false
    useRegisterStore().clear()
  }

  const openRegisterModal = () => { authModal.value.isOpenRegister = true }

  const closeLoginModal = () => {
    authModal.value.isOpenLogin = false
    useAuthStore().clearState()
  }

  const openLoginModal = () => { authModal.value.isOpenLogin = true }

  const toggleRegisterToLogin = () => {
    authModal.value.isOpenRegister = computed(() => !authModal.value.isOpenRegister).value
    authModal.value.isOpenLogin = computed(() => !authModal.value.isOpenLogin).value

    if (authModal.value.isOpenRegister) {
      useRegisterStore().clear()
    } else {
      useAuthStore().clearState()
    }
  }

  // TODO - Add toggleRegisterToVerification method

  return { authModal, closeRegisterModal, openRegisterModal, toggleRegisterToLogin, closeLoginModal, openLoginModal }
}
