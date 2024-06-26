<script lang="ts" setup>
const { clear } = useAuthStore()
const toasts = useToast()

const logout = async () => {
  await clear()
  
  navigateTo('/' , { replace: true })
  toasts.add({
    title: 'Logout',
    description: 'You have been logged out.',
    color: 'primary'
  })
}
</script>

<template>
  <UButton color="primary" variant="solid" size="sm" @click="logout">
    <Icon class="text-2xl" name="i-line-md-log-out" /> Logout
  </UButton>
</template>