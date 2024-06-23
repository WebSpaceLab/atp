<script setup lang="ts">
definePageMeta({
  layout: 'authorization',
  middleware: "auth"
})
</script>

<template>
  <XDashboardPage>
    <template #header-panel>

    </template>

    <template #main>
      <h1>
        Dashboard
    </h1>
    <div class="w-full h-screen"></div>
    </template>

    <template #sidebar>

    </template>
  </XDashboardPage>
</template>
