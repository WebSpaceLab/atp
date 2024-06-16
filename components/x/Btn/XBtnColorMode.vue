<script lang="ts" setup>
const setColorTheme = (newTheme: string) => {
  useColorMode().preference = newTheme
}


</script>

<template>
  <UTooltip :text="`Zmień motyw na ${$colorMode.value == 'dark' ? 'jasny' : 'ciemny'}`"   :popper="{ placement: 'right' }">
    <UButton color="primary" variant="link"  @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" >
      <Icon v-if="$colorMode.value == 'dark'" class="text-lg" name="line-md:moon-filled-loop" />
      <Icon v-else class="text-lg" name="line-md:moon-filled-to-sunny-filled-loop-transition" />
    </UButton>
  </UTooltip>
</template>
