<script setup>
defineProps({
  container: {
    type: Boolean,
    default: true,
  }
});

</script>

<template>
  <div
    class="relative w-full h-full flex transition-all duration-500 box-border "
    :class="[
      container ? 'container mx-auto' : ''
    ]"
  >
    <slot />
  </div>
</template>
