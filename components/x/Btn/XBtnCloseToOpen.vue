<script lang="ts" setup>
defineProps({
  switcher: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <UButton color="primary" variant="ghost" size="sm">
    <Icon v-if="switcher" class="text-2xl" name="i-line-md-menu-to-close-transition" />
    <Icon v-else class="text-2xl" name="i-line-md-close-to-menu-transition" />
  </UButton>
</template>
