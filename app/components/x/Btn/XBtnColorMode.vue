<script lang="ts" setup>
const setColorTheme = (newTheme: string) => {
  useColorMode().preference = newTheme
}


</script>

<template>
  <UTooltip :text="`Change theme to ${$colorMode.value == 'dark' ? 'light' : 'dark'}`"   :popper="{ placement: 'bottom' }">
    <UButton color="primary" variant="link"  @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" >
      <Icon v-if="$colorMode.value == 'dark'" class="text-lg" name="line-md:moon-filled-loop" />
      <Icon v-else class="text-lg" name="line-md:moon-filled-to-sunny-filled-loop-transition" />
    </UButton>
  </UTooltip>
</template>
