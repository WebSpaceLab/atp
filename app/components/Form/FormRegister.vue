<script setup lang="ts">
  import { z } from 'zod'
  import type { FormSubmitEvent } from '#ui/types'

  const schema = insertUserSchema
  type Schema = z.output<typeof schema>

  const state = reactive<Schema>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    isAgree: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  const isAgreement = ref<boolean>(false)
  const isOpen = ref<boolean>(false)
  const confrimPassword = ref<string>('')
  const previewPassword = ref<boolean>(false)
  const previewConfirmPassword = ref<boolean>(false)
  const error = ref<{path: string, message: string}>({ path: '', message: ''})
  const validateConfrimPassword = (path: string, message: string) => {
    error.value.path = path
    error.value.message = message
  }

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: event.data
    }).then((res) => {
      console.log('Response: ', res)
    })
    console.log('Data event: ', event.data)
  }

  function agreement(req: boolean) {
    isAgreement.value = req
    state.isAgree = req
    isOpen.value = false
  }

  watch(isAgreement, (value) => {
    state.isAgree = value
  })

  watch(confrimPassword, (value) => {
    if(value !== state.password) {
      validateConfrimPassword('confrimPassword', 'Passwords do not match')  
    }

    if(value === state.password) {
      validateConfrimPassword('', '')
    }

    if(value === '') {
      validateConfrimPassword('', '')
    }
  })
</script>

<template>
  <UForm :schema="schema" :state="state" class="w-full space-y-4" @submit="onSubmit">
    <UFormGroup required label="Username" name="username">
      <UInput color="primary" v-model="state.username" />
    </UFormGroup>

    <div class="w-full flex space-x-4">
      <UFormGroup required class="w-full" label="First Name" name="firstName">
        <UInput color="primary" v-model="state.firstName" />
      </UFormGroup>

      <UFormGroup required class="w-full" label="Last Name" name="lastName">
        <UInput color="primary" v-model="state.lastName" />
      </UFormGroup>
    </div>

    <UFormGroup required label="Email" name="email">
      <UInput color="primary" v-model="state.email" type="email" />
    </UFormGroup>

    <UFormGroup required class="w-full" label="Password" name="password">
      <UInput :ui="{icon: {trailing: { pointer: ''}}}" color="primary" v-model="state.password" :type="previewPassword ? 'text' : 'password'" >
        <template #trailing>
          <UButton variant="link" @click="previewPassword = !previewPassword"">
            <Icon v-if="previewPassword" name="i-line-md-watch-twotone"  class="text-gray-500 dark:text-gray-400 text-2xl"/>
            <Icon v-else name="i-line-md-watch-off-twotone"  class="text-gray-500  dark:text-gray-400 text-2xl"/>
          </UButton>
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup  required class="w-full " label="Confirm Password" name="confirmPassword" >
      <UInput :ui="{icon: {trailing: { pointer: ''}}}" :color="error.path === 'confrimPassword' ? 'red' : 'primary'" v-model="confrimPassword" :type="previewConfirmPassword ? 'text' : 'password'" >
        <template #trailing>
          <UButton variant="link" @click="previewConfirmPassword = !previewConfirmPassword"">
            <Icon v-if="previewConfirmPassword" name="i-line-md-watch-twotone"  class="text-gray-500 dark:text-gray-400 text-2xl"/>
            <Icon v-else name="i-line-md-watch-off-twotone"  class="text-gray-500  dark:text-gray-400 text-2xl"/>
          </UButton>
        </template>
      </UInput>
      
      <p v-if="error.path === 'confrimPassword'"  class="text-red-400 text-sm">{{ error.message }}</p>
    </UFormGroup>

    <UCheckbox required color="primary" v-model="isAgreement">
      <template #label>
        <span class="italic">Zgadzam się z
          <UButton variant="link" label="umową" class="p-0" @click="isOpen = true" />
        </span>
      </template>
    </UCheckbox>

    <UButton type="submit" block :disabled="!isAgreement">
      Register
    </UButton>

    <UModal v-model="isOpen">
      <div class="w-full p-4">
        <h2 class="text-xl font-semibold">Umowa</h2>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nisi
          ultricies ultricies. Nullam nec dui in nisi ultricies ultricies. Nullam nec dui in
          nisi ultricies ultricies. Nullam nec dui in nisi ultricies ultricies. Nullam nec dui
          in nisi ultricies ultricies. Nullam nec dui in nisi ultricies ultricies. Nullam nec
          dui in nisi ultricies ultricies. Nullam nec dui in nisi ultricies ultricies. Nullam
          nec dui in nisi ultricies ultricies. Nullam nec dui in nisi ultricies ultricies.
        </p>

        <div class="w-full mt-4 flex justify-between">
          <UButton variant="solid" color="red" label="Odrzuć" @click="agreement(false)" />

          <UButton variant="solid" color="primary" label="Zgadzam się" @click="agreement(true)" />
        </div>
      </div>
    </UModal>
  </UForm>
</template>
