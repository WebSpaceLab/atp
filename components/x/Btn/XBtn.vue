<script setup>

defineProps({
  ui: {
    type: Object,
    default: () => ({})
  },
  size: {
    type: String,
    default: 'md'
  },
  type: {
    type: String,
    default: 'button'
  },
  label: {
    type: String || null,
    default: null
  },
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String ,
    default: 'solid'
  },
  target: {
    type: String || Object,
    default: '_self'
  },
  to: {
    type: String,
    default: ''
  },
  activeClass: {
    type: String,
    default: ''
  },
  exactActiveClass: {
    type: String,
    default: ''
  },
  rel: {
    type: String || Object,
    default: ''
  },

  prefetchedClass: {
    type: String,
    default: ''
  },

  href: {
    type: String,
    default: ''
  },
  icon: {
    type: String || null,
    default: null
  },
  loadingIcon: {
    type: String || null,
    default: null
  },
  trailingIcon: {
    type: String || null,
    default: null
  },
  replace: {
    type: Boolean,
    default: false
  },
  noRel: {
    type: Boolean,
    default: false
  },
  prefetch: {
    type: Boolean,
    default: false
  },
  noPrefetch: {
    type: Boolean,
    default: false
  },
  external: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  truncate: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  padded: {
    type: Boolean,
    default: false
  },
  trailing: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Object || null,
    default: null
  }
});

const isTooltip = ref(false);

watch(() => isTooltip.value, () => {
  setTimeout(() => {
    isTooltip.value = false
  }, 3000);
})
</script>

<template>
    <UButton
      @mouseover="isTooltip = true"
      @mouseleave="isTooltip = false"
      class="relative h-8 px-2"
      :ui="ui"
      :size="size"
      :type="type"
      :label="label"
      :color="color"
      :variant="variant"
      :target="target"
      :to="to"
      :activeClass="activeClass"
      :exactActiveClass="exactActiveClass"
      :rel="rel"
      :prefetchedClass="prefetchedClass"
      :href="href"
      :icon="icon"
      :loadingIcon="loadingIcon"
      :trailingIcon="trailingIcon"
      :replace="replace"
      :noRel="noRel"
      :prefetch="prefetch"
      :noPrefetch="noPrefetch"
      :external="external"
      :disabled="disabled"
      :truncate="truncate"
      :block="block"
      :square="square"
      :loading="loading"
      :padded="padded"
      :trailing="trailing"
    >
      <slot />

      <x-tooltip
        v-if="tooltip && isTooltip"
        :positionX="tooltip.positionX"
        :positionY="tooltip.positionY"

        :text="tooltip.text"
        class="text-xs text-slate-300 w-max"
      />
    </UButton>
</template>
