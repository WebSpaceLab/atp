<script lang="ts" setup>
defineProps({
  links: {
    type: Array,
    required: true,
  }
});
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3">
    <template v-for="link in links" :key="link.label">
      <XNavbarMenuItem
        :link="link"
      />
    </template>
  </div>
</template>
