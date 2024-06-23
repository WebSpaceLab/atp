
<script lang="ts" setup>
definePageMeta({
  middleware: () => {
    const { loggedIn } = useUserSession()

    if (loggedIn.value) {
      navigateTo('/dashboard', { replace: true })
    }
  }
})
</script>

<template>
  <div class="min-h-screen container mx-auto flex justify-center items-center">
   
    <FormLogin />
  </div>
</template>
