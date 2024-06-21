<script lang="ts" setup>
const { params } = useRoute()
const { id } = params
</script>

<template>
  <div>
    <h1>Member: {{ id }}</h1>
  </div>
</template>
