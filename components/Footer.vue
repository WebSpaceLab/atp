<script lang="ts" setup>

</script>

<template>
 <XFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2024-{{ new Date().getFullYear() }} ATP - <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton to="https://github.com/WebSpaceLab/atp" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
  </XFooter>
</template>


<style>

</style>
