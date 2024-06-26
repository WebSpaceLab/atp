<script lang="ts" setup>
const { authModal, closeRegisterModal, toggleRegisterToLogin } = useAuthModal()
</script>

<template>
  <UModal v-model="authModal.isOpenRegister">
    <div class="w-120 relative flex flex-col justify-center pt-12 px-8 pb-6">
      <div class="absolute top-2 right-2">
        <XBtnCloseToOpen :switcher="authModal.isOpenRegister" @click="closeRegisterModal()" />
      </div>

      <div class="text-center pb-8">
        <Icon name="i-line-md-person-add-filled" class="text-7xl text-center text-primary" />
        <h2 class="text-center text-3xl font-semibold">Register</h2>

        <div class="flex justify-center items-center">
  
          <p>You already have an account?</p>

          <UButton variant="link" label="Log in" @click="toggleRegisterToLogin()" />
        </div>
      </div>

      <div v-if="useRegisterStore().error" class="mb-6">
        <UAlert
          color="red"
          variant="solid"
          :title="useRegisterStore().error?.statusMessage"
        >
          <template #icon="{ icon }">
            <Icon name="i-game-icons-unlit-bomb" class="text-red-900 text-2xl" />
          </template>
        </UAlert>
      </div>

      <FormRegister />
    </div>
  </UModal>
</template>