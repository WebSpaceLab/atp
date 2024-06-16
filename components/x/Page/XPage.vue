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
    class="relative w-full h-full flex transition-all duration-500 box-border p-5"
    :class="[
      container ? 'container mx-auto' : ''
    ]"
  >
    <slot />
  </div>
</template>
