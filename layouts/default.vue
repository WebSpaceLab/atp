<script lang="ts" setup>
const route = useRoute()
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
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro',
  children: [{
    label: 'Pricing',
    to: '/pro/pricing',
    icon: 'i-heroicons-ticket',
    description: 'A simple pricing, for solo developers or teams.'
  }, {
    label: 'Templates',
    to: '/pro/templates',
    icon: 'i-heroicons-computer-desktop',
    description: 'Get started with one of our official templates.'
  }]
}, {
  label: 'Contact',
  icon: 'i-heroicons-rocket-launch',
  to: '/contact'
}])

const authLinks = computed(() => {
    if (route.path === '/auth/register') {
      return [{
        label: 'Login',
        icon: 'i-heroicons-user',
        to: '/auth/login',
        variant: 'ghost'
      }]
    } else if (route.path === '/auth/login'){
      return [{
        label: 'Register',
        icon: 'i-heroicons-user-plus-16-solid',
        to: '/auth/register',
        variant: 'ghost'
      }]
    } else {
      return [
        {
          label: 'Login',
          icon: 'i-heroicons-user',
          to: '/auth/login',
          variant: 'ghost'
        },
        {
          label: 'Register',
          icon: 'i-heroicons-user-plus-16-solid',
          to: '/auth/register',
          variant: 'ghost'
        }
      ]
    }
  })
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
          <template v-for="item in authLinks" :key="item.label">
            <UTooltip :text="item.label">
              <UButton
                :variant="item.variant"
                :icon="item.icon"
                size="sm"
                color="primary"
                square
                :to="item.to"
              />
            </UTooltip>
          </template>
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

    </template>
  </XLayout>
</template>
