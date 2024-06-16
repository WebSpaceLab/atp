<script lang="ts" setup>
const { navbar, toggleScroll, handleScroll } = useNavbar()

function scrollNavbar() {
  handleScroll('main-nav-dashboard')
}

onMounted(() => {
  scrollNavbar()
});
</script>

<template>
  <div
    id="main-nav-dashboard"
    :class="[
      navbar.isScroll ? 'fixed top-0 left-0' : 'relative',
    ]"
    class="w-screen box-border h-20 transition-all duration-500 bg-white dark:bg-slate-900 shadow-black shadow-lg"
  >
    <div class="h-full flex items-center justify-center lg:justify-between">
      <div class="relative  hidden lg:flex">
        <slot name="bar" />
      </div>

      <div  class="lg:hidden absolute top-6 left-0">
        <slot name="bar" />
      </div>

      <div class="w-full hidden lg:block ">
        <div class="relative w-full flex justify-around items-center">
          <div class="flex w-full justify-center items-center space-x-10 ">
            <slot name="content" />
          </div>

          <div class="w-70 flex justify-end items-center pr-6 box-border">
            <div class="flex justify-center items-center space-x-3">
              <XBtnColorMode />
            </div>

            <div class="flex justify-center items-center space-x-3 pr-3 ">
              <slot name="action" />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-5 right-5 lg:hidden flex justify-center items-center mr-4">
        <div class="flex justify-center items-center space-x-3">
          <XBtnColorMode />
        </div>

        <div class="flex justify-center items-center space-x-3 pr-3 ">
          <slot name="action" />
        </div>
      </div>
    </div>
  </div>
</template>
