<script lang="ts" setup>

const links = ref([
{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
},
{
  label: 'About',
  icon: 'i-heroicons-book-open',
  to: '/about'
}, {
  label: 'Dashboard',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/dashboard',
  children: [{
    label: 'Profile',
    to: '/dashboard/profile',
    icon: 'i-heroicons-ticket',
    description: 'User profile'
  }, {
    label: 'Users',
    to: '/dashboard/users',
    icon: 'i-heroicons-ticket',
    description: 'Users list'
  }]
}, {
  label: 'Contact',
  icon: 'i-heroicons-rocket-launch',
  to: '/contact'
}])

const { openLoginModal, openRegisterModal } = useAuthModal()

</script>

<template>
  <XLayout>
    <template #header>
      <XNavbar container>
        <template #logo>
          <Logo />
        </template>

        <template #menu>
          <XNavbarMenu :links="links"  />
        </template>

        <template #action>
          <div v-if="!useAuthStore().loggedIn" class="flex space-x-3">
            <UTooltip text="Login">
              <UButton
                variant="ghost"
                color="primary"
                square
                @click="openLoginModal()"
              >
                <Icon class="text-2xl" name="i-line-md-person-filled" />
              </UButton>
            </UTooltip>

            <UTooltip text="Register">
              <UButton
                variant="ghost"
                color="primary"
                square
                @click="openRegisterModal()"
              >
                <Icon class="text-2xl" name="i-line-md-person-add-filled" />
              </UButton>
            </UTooltip>
          </div>

          <XDropdownManageAccount v-else />
        </template>
      </XNavbar>
    </template>

    <template #main>
      <slot />
    </template>

    <template #footer>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2024-{{ new Date().getFullYear() }} ATP - <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #addons>
      <ModalRegister />
      <ModalLogin />  
    </template>
  </XLayout>
</template>
