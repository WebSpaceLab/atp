<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const paymentTypes =  [
  z.literal('sepa'),
  z.literal('cash'),
]
type PaymentType = typeof paymentTypes[number]

const sepa = z.object({
  accountHolder: z.string().optional(),
  iBan: z.string().optional(),
  bic: z.string().optional(),
})

const cash = z.object({})

const schema = z.object({
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  membershipId: z.string().min(3, 'Membership ID is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmPassword: z.string().refine((data) => data === state.password, {
    message: 'Passwords do not match',
  }),
  company: z.string().optional(),

  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
  }).optional(),

  joinDate: z.date().optional(),
  leaveDate: z.date().optional(),
  birthDate: z.date().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
  bankData: z.object({
    // paymentMethod: z.enum(['directDebit', 'creditCard', 'bankTransfer']),
    accountHolder: z.string().optional(),
    iBan: z.string().optional(), // International Bank Account Number use IBAN.js
    bic: z.string().optional(),
  }).optional(),
  paymentType: z.enum(paymentTypes),
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  firstName: '',
  lastName: '',
  membershipId: '',
  company: '',
  address: {
    street: '',
    city: '',
    zip: '',
    state: '',
    country: '',
  },
  joinDate: undefined,
  leaveDate: undefined,
  birthDate: undefined,
  phone: '',
  notes: '',
  bankData: undefined,
  paymentType: 'sepa',
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
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup label="Confirm Password" name="confirmPassword">
      <UInput v-model="state.confirmPassword" type="password" />
    </UFormGroup>

    <UFormGroup>
      <UInput label="First Name" name="firstName"  v-model="state.firstName" />
      <UInput label="Last Name" name="lastName" v-model="state.firstName" />
    </UFormGroup>

    <UFormGroup label="Membership ID" name="membershipId">
      <UInput v-model="state.membershipId" />
    </UFormGroup>

    <UFormGroup label="Company" name="company">
      <UInput v-model="state.company" />
    </UFormGroup>

    <UFormGroup label="Address" name="address">
      <UInput label="Street" name="street" v-model="state.address.street" />
      <UInput label="City" name="city" v-model="state.address.city" />
      <UInput label="Zip" name="zip" v-model="state.address.zip" />
      <UInput label="State" name="state" v-model="state.address.state" />
      <UInput label="Country" name="country" v-model="state.address.country" />
    </UFormGroup>

    <UFormGroup label="Join Date" name="joinDate">
      <UInput type="date" v-model="state.joinDate" />
    </UFormGroup>

    <UFormGroup label="Leave Date" name="leaveDate">
      <UInput type="date" v-model="state.leaveDate" />
    </UFormGroup>

    <UFormGroup label="Birth Date" name="birthDate">
      <UInput type="date" v-model="state.birthDate" />
    </UFormGroup>

    <UFormGroup label="Phone" name="phone">
      <UInput v-model="state.phone" />
    </UFormGroup>

    <UFormGroup label="Notes" name="notes">
      <UTextarea v-model="state.notes" />
    </UFormGroup>

    <UFormGroup label="Payment Type" name="paymentType">
      <URadioGroup v-model="state.paymentType">
        <URadio value="sepa">SEPA</URadio>
        <URadio value="cash">Cash</URadio>
      </URadioGroup>
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

