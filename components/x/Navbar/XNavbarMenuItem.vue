<script lang="ts" setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },

})

const { closeMobile } = useNavbar()
</script>

<template>
  <div>
    <ULink
      v-if="!link.children"
      @click="closeMobile"
      :to="link.to"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      {{ link.label }}
    </ULink>

    <UVerticalNavigation v-else :links="link.children" />

  </div>
</template>
