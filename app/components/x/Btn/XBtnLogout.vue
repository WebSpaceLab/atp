<script lang="ts" setup>
const { clear } = useUserSession()

const logout = async () => {
  await clear()
  navigateTo('/' , { replace: true })
}
</script>

<template>
  <UButton color="red" variant="outline" size="sm" @click="logout">
    <Icon class="text-2xl" name="i-line-md-log-out" /> Logout
  </UButton>
</template>