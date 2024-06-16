<script setup>
const { sidebar } = useSidebar()

defineProps({
  link: {
    type: Object,
    default: () => ({})
  },
});

const open = ref(false);

watch(() => sidebar.isRail, (event) => {
  if(event === true) {
    open.value = false
  }
})
</script>

<template>
  <li class="w-full mt-4 ease-in list-none">
    <ULink
      v-if="!link?.children?.length"
      :class="sidebar.isRail ? '' : 'overflow-hidden'"
      :to="{path: link.to }"
      class="h-10 w-full flex decoration-none rounded"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      <div class="w-10">
        <Icon class="text-2xl" :name="link.icon"/>
      </div>

      <span v-if="!sidebar.isRail" class="ml-3 transition-all duration-500">
        {{ link.label }}
      </span>
    </ULink>

    <div v-else class="w-full h-full flex flex-between items-center">
      <ULink
        :to="{ path: link.to }"
        :class="[
            sidebar.isRail ? '' : 'overflow-hidden',
            open ? 'font-semibold text-blue-600' : 'font-medium hover:text-hover-200'
        ]"
        class="flex justify-between items-center cursor-pointer decoration-none h-10 w-full rounded"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        <div v-if="!sidebar.isRail" class="flex items-start transition-all duration-500">
          <div  class="flex justify-start w-10 items-center">
            <Icon class="text-2xl" :name="link.icon"/>
          </div>

          <span class="ml-3" >{{ link.label }}</span>
        </div>
      </ULink>

      <span
        v-if="link?.children?.length"
        class="flex justify-center  items-center w-10 transition-all duration-500  h-full cursor-pointer"
      >
        <Icon v-if="sidebar.isRail && !open" class="text-2xl  transition-all duration-500 hover:text-hover-200" :name="link.icon"/>

        <Icon
          v-else
          :class="open ? 'rotate-90 text-blue-600' : 'fa-rotate-0 text-muted-light dark:text-muted-dark hover:text-hover-200'"
          class="text-2xl transition-all duration-200 ease-in"
          name="material-symbols:play-arrow-outline"
          @click="open = !open"
        />
      </span>
    </div>

    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0 -translate-x-64"
      enter-to-class="transform opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="transform opacity-100 translate-x-0"
      leave-to-class="transform opacity-0 -translate-x-64"
    >
      <ul v-if="link?.children?.length && open" :class="[sidebar.isRail ? 'w-10 p-0' : 'w-[90%] pl-5']" class="list-none">
        <template v-for="(child, index) in link.children" :key="index">
          <XDashboardSidebarLink :link="child" />
        </template>
      </ul>
    </transition>
  </li>
</template>
