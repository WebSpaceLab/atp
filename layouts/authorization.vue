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
              <UButton color="primary" variant="ghost" size="sm" @click="sidebar.isShow = !sidebar.isShow">
                <Icon v-if="sidebar.isShow" class="text-2xl" name="mdi:close" />
                <Icon v-else class="text-2xl" name="material-symbols:menu-rounded" />
              </UButton>

              <UButton v-if="sidebar.isShow" color="primary" variant="ghost" size="sm" @click="sidebar.isRail = !sidebar.isRail" >
                <Icon class="text-2xl transition-all duration-300 ease-in" name="material-symbols:swap-horizontal-circle-rounded" :class="{'rotate-180' : sidebar.isRail}"/>
              </UButton>

              <UButton v-if="sidebar.isShow" color="primary" variant="ghost" size="sm" @click="sidebar.isRightSide = !sidebar.isRightSide">
                <Icon v-if="sidebar.isRightSide" class="text-2xl transition-all duration-300 ease-in" name="streamline:interface-layout-5-column-header-layout-layouts-masthead-sidebar" />
                <Icon v-else class="text-2xl transition-all duration-300 ease-in" name="streamline:interface-layout-4-column-header-layout-layouts-masthead-sidebar"/>
              </UButton>

              <UButton color="primary" variant="ghost" size="sm" @click="sidebar.isShowHelperBar = !sidebar.isShowHelperBar" >
                <Icon class="text-2xl" name="octicon:sidebar-expand-16" :class="sidebar.isShowHelperBar ? 'rotate-90' : 'rotate-270'" />

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

    <template #addons>

    </template>
  </XDashboardLayout>
</template>
