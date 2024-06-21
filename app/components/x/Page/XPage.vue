<script setup>
defineProps({
  container: {
    type: Boolean,
    default: false,
  }
});

</script>

<template>
  <div
    class="relative w-full h-full flex transition-all duration-500 box-border px-4 sm:px-6 lg:px-8"
    :class="[
      container ? 'container mx-auto max-w-7xl' : ''
    ]"
  >
    <slot />
  </div>
</template>
