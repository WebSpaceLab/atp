<script setup lang="ts">
let previewPassword = ref(false)
</script>

<template>
<UForm :schema="loginSchema" :state="useAuthStore().state" class="w-full space-y-6" @submit="useAuthStore().signIn" >
  <UFormGroup required label="Email" name="email">
    <UInput color="primary" v-model="useAuthStore().state.email" type="email" />
  </UFormGroup>

  <UFormGroup required class="w-full relative" label="Password" name="password">
    <UButton class="absolute -top-8 right-0" variant="link" label="Forgot password?" />

    <UButtonGroup size="sm" class="w-full" orientation="horizontal">
      <UInput color="primary" v-model="useAuthStore().state.password" :type="previewPassword ? 'text' : 'password'" class="w-full"/>

      <UButton variant="solid" color="gray"   @click="previewPassword = !previewPassword">
        <Icon v-if="previewPassword" name="i-ion-eye" class="text-lg" />
        <Icon v-else name="i-ion-eye-off" class="text-lg" />
      </UButton>
    </UButtonGroup>
  </UFormGroup>

  <div class="flex items-center space-x-2">
    <UCheckbox v-model="useAuthStore().state.rememberMe" color="primary" />
    <span class="text-sm">Remember me</span>
  </div>

  <UButton :loading="useAuthStore().loading" type="submit" color="primary" variant="solid" block class="text-bold">
    Log in
  </UButton>
</UForm>
</template>

