<script setup lang="ts">
  useSeoMeta({
    title: 'ATP - Advanced Training Platform',
    description: 'ATP (Advanced Training Platform) is a comprehensive and modern fitness platform designed to help users create personalized training plans, analyze their progress, and maintain a workout journal. Our mission is to support users in achieving their fitness goals by providing precise and effective tools.'
  })

  const loading = ref<boolean>(false)
</script>

<template>
  <x-app :loading="loading"
    class="min-h-screen bg-background dark:bg-background-dark text-basic dark:text-basic-dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </x-app>
</template>
