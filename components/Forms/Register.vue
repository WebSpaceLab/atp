<script setup lang="ts">
  import { z } from 'zod'
  import type { FormSubmitEvent } from '#ui/types'

  // const schema: insertUserSchema = z.object({
  //   username: z.string().min(3, 'First name is required'),
  //   firstName: z.string().min(3, 'First name is required'),
  //   lastName: z.string().min(3, 'Last name is required'),
  //   email: z.string().email('Invalid email'),
  //   password: z.string().min(8, 'Must be at least 8 characters'),
  //   confirmPassword: z.string().refine((data: string) => data === state.password, {
  //     message: 'Passwords do not match',
  //   })
  // })

  const schema = insertUserSchema


  
  type Schema = z.output<typeof schema>

  const isAgreement = ref<boolean>(false)
  const isOpen = ref<boolean>(false)
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
  
  // const confirmPasswordSchema = z.object({ 
  //     password: z.string().refine((data: string) => data === state.password, {
  //       message: 'Passwords do not match',
  //     })
  // })
  // type ConfirmPasswordSchema = z.output<typeof confirmPasswordSchema>
  // const confirm = reactive<ConfirmPasswordSchema>({
  //   password: ''
  // })

  const confrimPassword = ref<string>('')

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: event
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
      console.log('Passwords do not match')
    }
  })
</script>

<template>
  <UForm :schema="schema" :state="state" class="w-full space-y-4" @submit="onSubmit">
    <UFormGroup required label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <div class="w-full flex space-x-4">
      <UFormGroup required class="w-full" label="First Name" name="firstName">
        <UInput v-model="state.firstName" />
      </UFormGroup>

      <UFormGroup required class="w-full" label="Last Name" name="lastName">
        <UInput v-model="state.lastName" />
      </UFormGroup>
    </div>

    <UFormGroup required label="Email" name="email">
      <UInput v-model="state.email" type="email" />
    </UFormGroup>

    <UFormGroup required class="w-full" label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup required class="w-full" label="Confirm Password" name="confirmPassword">
      <UInput v-model="confrimPassword" type="password" />
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
