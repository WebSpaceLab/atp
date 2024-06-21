<script lang="ts" setup>
definePageMeta({
  layout: 'authorization',
})

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
]

const data = ref([])
</script>

<template>
  <XDashboardPage>
    <template #header-panel>
      <UButton
        color="primary"
        variant="outline"
      >
       <Icon class="text-xl" name="i-line-md-clipboard-plus-twotone"/>
      </UButton>
    </template>

    <template #main>
      <h1>
        Users
      </h1>

      <div>
        <UTable :columns="columns" :rows="data" />
      </div>
    </template>

    <template #sidebar>

    </template>


    <template #addons>
      <div>

      </div>
    </template>
  </XDashboardPage>
</template>
