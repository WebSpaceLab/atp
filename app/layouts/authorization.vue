<script lang="ts" setup>
const { sidebar } = useSidebar()

</script>

<template>
  <XDashboardLayout>
    <template #header>
      <XDashboardNavbar>
        <template #bar>
          <div
              class="flex justify-start px-4 space-x-2"
              :class="[sidebar.isRail ? '' : 'w-64']"
          >
            <UTooltip :text="sidebar.isShow ? 'Close the sidebar' : 'Open sidebar'">
              <XBtnCloseToOpen :switcher="sidebar.isShow" @click="sidebar.isShow = !sidebar.isShow" />
            </UTooltip>

            <UTooltip v-if="sidebar.isShow" :text="sidebar.isRail ? 'Shrink sidebar' : 'Enlarge sidebar'">
              <UButton  color="primary" variant="ghost" size="sm" @click="sidebar.isRail = !sidebar.isRail" >
                <Icon class="text-2xl transition-all duration-300 ease-in" :name="sidebar.isRail ? 'i-line-md-arrows-horizontal': 'i-line-md-arrows-horizontal-alt'"/>
              </UButton>
            </UTooltip>

            <UTooltip v-if="sidebar.isShow" :text="sidebar.isRightSide ? 'Change sidebar to left side' : 'Change sidebar to right side'">
              <UButton  color="primary" variant="ghost" size="sm" @click="sidebar.isRightSide = !sidebar.isRightSide">
                <Icon v-if="sidebar.isRightSide" class="text-2xl transition-all duration-300 ease-in" name="i-line-md-arrow-open-left" />
                <Icon v-else class="text-2xl transition-all duration-300 ease-in" name="i-line-md-arrow-open-right"/>
              </UButton>
            </UTooltip>

            <UTooltip :text="sidebar.isShowHelperBar ? 'Close Helper Bar' : 'Open Helper Bar'">
              <UButton color="primary" variant="ghost" size="sm" @click="sidebar.isShowHelperBar = !sidebar.isShowHelperBar" >
                <Icon class="text-2xl" :name="sidebar.isShowHelperBar ? 'i-line-md-cog-filled-loop' : 'i-line-md-cog-off-filled-loop'"/>

              </UButton>
            </UTooltip>
          </div>
        </template>

        <template #content>

        </template>

        <template #action>
          <XDropdownManageAccount />
        </template>
      </XDashboardNavbar>
    </template>

    <template #main>
        <slot />
    </template>
  </XDashboardLayout>
</template>
