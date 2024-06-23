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
              <XBtnCloseToOpen :switcher="sidebar.isShow" @click="sidebar.isShow = !sidebar.isShow" />

              <UButton v-if="sidebar.isShow" color="primary" variant="ghost" size="sm" @click="sidebar.isRail = !sidebar.isRail" >
                <Icon class="text-2xl transition-all duration-300 ease-in" :name="sidebar.isRail ? 'i-line-md-arrows-horizontal': 'i-line-md-arrows-horizontal-alt'"/>
              </UButton>

              <UButton v-if="sidebar.isShow" color="primary" variant="ghost" size="sm" @click="sidebar.isRightSide = !sidebar.isRightSide">
                <Icon v-if="sidebar.isRightSide" class="text-2xl transition-all duration-300 ease-in" name="i-line-md-arrow-open-left" />
                <Icon v-else class="text-2xl transition-all duration-300 ease-in" name="i-line-md-arrow-open-right"/>
              </UButton>

              <UButton color="primary" variant="ghost" size="sm" @click="sidebar.isShowHelperBar = !sidebar.isShowHelperBar" >
                <Icon class="text-2xl" :name="sidebar.isShowHelperBar ? 'i-line-md-cog-filled-loop' : 'i-line-md-cog-off-filled-loop'"/>

              </UButton>
          </div>
        </template>

        <template #content>

        </template>

        <template #action>

        </template>
      </XDashboardNavbar>
    </template>

    <template #main>
        <slot />
    </template>
  </XDashboardLayout>
</template>
