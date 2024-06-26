<script lang="ts" setup>
const {
  authModal,
  closeLoginModal,
  toggleRegisterToLogin
} = useAuthModal()

const alert = ref<boolean>(false)
</script>

<template>
  <UModal v-model="authModal.isOpenLogin">
    <UCard class="w-120 relative flex flex-col justify-center pt-16 px-8 pb-8">
      <div class="absolute top-2 right-2">
        <XBtnCloseToOpen :switcher="authModal.isOpenLogin" @click="closeLoginModal()" />
      </div>

      <div class="text-center pb-8">
        <Icon name="i-line-md-person-filled" class="text-7xl text-center text-primary" />
        <h2 class="text-center text-3xl font-semibold">Welcome back!</h2>

        <div class="flex justify-center items-center">
  
          <p>Don't have an account?</p>
  
          <UButton variant="link" label="Sign Up" @click="toggleRegisterToLogin()" />
        </div>
      </div>

      <div v-if="useAuthStore().error" class="mb-6">
        <UAlert
          color="red"
          variant="solid"
          :title="useAuthStore().error?.statusMessage"
        >
          <template #icon>
            <Icon name="i-game-icons-unlit-bomb" class="text-red-900 text-2xl" />
          </template>
        </UAlert>
      </div>

      <div v-if="alert" class="mb-6">
        <UAlert
          color="red"
          variant="solid"
          title="Google login is not available."
        >
          <template #icon>
            <Icon name="i-game-icons-unlit-bomb" class="text-red-900 text-2xl" />
          </template>
        </UAlert>
      </div>

      <FormLogin />

      <UDivider label="OR" class="py-4" />

      <div class="space-y-4 flex flex-col justify-center">
        <UButton @click="alert = !alert" color="red"   block>
          <p class="text-white text-md text-bold">Login with Google</p>
          <Icon name="i-logos-google-icon" class="text-xl" />
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>