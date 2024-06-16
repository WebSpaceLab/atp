<script lang="ts" setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },

})

const { closeMobile } = useNavbar()

const open = ref(false)
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
    <div
      v-else
      class="relative"
      @mouseenter="open = true"
      @mouseleave="open = false"
    >
      <ULink
        @click="closeMobile"
        :to="link.to"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        {{ link.label }}
      </ULink>

      <div v-if="open" class="absolute pt-4 -translate-x-4">
        <div class="backdrop-blur shadow-lg shadow-black box-border bg-white/80 dark:bg-slate-900/80 py-2 px-4 rounded">
          <UVerticalNavigation :links="link.children" />
        </div>
      </div>
    </div>

  </div>
</template>
