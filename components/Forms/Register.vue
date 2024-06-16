<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema: any = z.object({
  username: z.string().min(3, 'First name is required'),
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmPassword: z.string().refine((data: string) => data === state.password, {
    message: 'Passwords do not match',
  })
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="w-full space-y-4" @submit="onSubmit">
    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <div class="w-full flex space-x-4">
      <UFormGroup class="w-full" label="First Name" name="firstName" >
        <UInput v-model="state.firstName"/>
      </UFormGroup>

      <UFormGroup class="w-full" label="Last Name" name="lastName">
        <UInput  v-model="state.firstName"/>
      </UFormGroup>
    </div>

    <UFormGroup label="Email" name="email">
      <UInput  v-model="state.email"  type="email"/>
    </UFormGroup>

    <UFormGroup class="w-full" label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup class="w-full" label="Confirm Password" name="confirmPassword">
      <UInput v-model="state.confirmPassword" type="password" />
    </UFormGroup>

    <UButton type="submit" block>
      Register
    </UButton>
  </UForm>
</template>


