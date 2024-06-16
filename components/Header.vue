<script lang="ts" setup>
  const route = useRoute()

  const links = [{
    label: 'Home',
    icon: 'material-symbols:family-home-rounded',
    to: '/'
  }]

  const authLinks = computed(() => {
    if (route.path === '/auth/register') {
      return [{
        label: 'Login',
        icon: 'i-heroicons-user',
        to: '/auth/login',
        variant: 'outline'
      }]
    } else if (route.path === '/auth/login'){
      return [{
        label: 'Register',
        icon: 'i-heroicons-user-plus-16-solid',
        to: '/auth/register',
        variant: 'outline'
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
          variant: 'outline'
        }
      ]
    }
  })
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <div class="flex justify-between items-center space-x-3">
        <UColorModeToggle />

        <template v-for="item in authLinks" :key="item.label">
          <UButton
            :label="item.label"
            :variant="item.variant"
            :icon="item.icon"
            size="sm"
            color="primary"
            square
            :to="item.to"
          />
        </template>
        <!--
          <UColorModeButton />
          <UColorModeSelect class="w-28" />
        -->
      </div>
    </template>
  </UHeader>
</template>
