<script lang="ts" setup>
definePageMeta({
  layout: 'authorization',
  middleware: 'auth'
})

const { users, loading } = storeToRefs(useUsersStore())
const { fetchUsers } = useUsersStore()

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'username',
    label: 'Username',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'role',
    label: 'Role',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
]

const items = (row: any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <XDashboardPage>
    <template #header-panel>

    </template>

    <template #main>
      <h1>
        Users
      </h1>

      <div>
        <UTable
          :loading="loading"
          :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
          :columns="columns"
          :rows="users"
        >
          <template #email-data="{ row }">
            <a :href="'mailto:' + row.email" class="text-second dark:text-second-dark  underline underline-offset-2 transition hover:text-hover dark:hover:text-hover-dark">{{ row.email }}</a>
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="items(row)">
              <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </UDropdown>
          </template>
        </UTable>
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
