<script lang="ts" setup>
  const lang = ref<string>('en')
</script>

<template>
  <div class="w-full container mx-auto relative pt-12 p-4">
    <div class="absolute top-2 right-4 flex items-center space-x-2">
      <p class="text-sm text-bold">lang:</p>

      <USelect label="Language" v-model="lang" :options="locales" />
    </div>

    <div class="w-full  p-10 text-justify rounded">
      <ContentDoc :path="`/terms/${lang}`" />
    </div>
  </div>
</template>